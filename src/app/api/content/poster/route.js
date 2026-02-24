import { connectDb } from "@/lib/connectDb";
import { deleteFileFromS3, uploadFileToS3 } from "@/lib/uploadImageFileToS3";
import { Content } from "@/models/Content";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Admin } from "@/models/Admin";

export async function PUT(req) {
  await connectDb();
  const session = await getServerSession(authOptions);
  const isAdmin = await Admin.findOne({ email: session?.user?.email });
  if (!isAdmin) {
    return NextResponse.json(
      { success: false, message: "Access denied" },
      { status: 403 },
    );
  }
  try {
    const formData = await req.formData();
    const id = formData.get("_id");
    if (!id) {
      return NextResponse.json(
        { success: false, message: "_id is required for update" },
        { status: 400 },
      );
    }
    const content = await Content.findById(id);
    if (!content) {
      return NextResponse.json(
        { success: false, message: "content not found" },
        { status: 404 },
      );
    }
    const removedImages = JSON.parse(formData.get("removedImages") || "[]");
    const imageFiles = formData.getAll("images") || [];
    const getRemovedImages = removedImages.map((i) => i.url); //Put image link to array only
    const imagesOrder = JSON.parse(formData.get("imagesOrder") || "[]");
   
    // Remove deleted images
    let updatePoster =
      content.information.poster.filter(
        (img) => !getRemovedImages.includes(img),
      ) || [];
    // Remove deleted images from S3
    if (getRemovedImages.length > 0) {
      for (const img of getRemovedImages) {
        const key = img.split("/").pop();
        if (key) await deleteFileFromS3(key);
      }
    }
    // Upload new images to S3
    const uploadPromises = imageFiles
      .filter((file) => file.size > 0)
      .map((file) => uploadFileToS3(file));

    const uploadedUrls = await Promise.all(uploadPromises);
    updatePoster.push(...uploadedUrls);


        // Only reorder if imagesOrder is valid
    if (imagesOrder.length > 0) {
      const orderedUrls = imagesOrder.map((img) => img.url);
      // Add new images that are NOT in order list
      for (const img of updatePoster) {
        if (!orderedUrls.includes(img)) {
          orderedUrls.push(img);
        }
      }
     content.information.poster = orderedUrls;
    } else {
      content.information.poster = updatePoster;
    }
    await content.save();
    return NextResponse.json({
      success: true,
      content,
      message: "Saved successfully",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}

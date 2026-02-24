import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Admin } from "@/models/Admin";
import { Event } from "@/models/Event";
import { deleteFileFromS3, uploadFileToS3 } from "@/lib/uploadImageFileToS3";
import { connectDb } from "@/lib/connectDb";

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
    const event = await Event.findById(id);
    if (!event) {
      return NextResponse.json(
        { success: false, message: "event not found" },
        { status: 404 },
      );
    }
    const removedImages = JSON.parse(formData.get("removedImages") || "[]");
    const imageFiles = formData.getAll("images") || [];

    const getRemovedImages = removedImages.map((i) => i.url);
    const imagesOrder = JSON.parse(formData.get("imagesOrder") || "[]");

    // Remove deleted images
    let updateImage =
      event.images.filter((img) => !getRemovedImages.includes(img)) || [];
    // Remove deleted images from S3
    if (getRemovedImages.length > 0) {
      for (const img of getRemovedImages) {
        const key = img.split("/").pop();
        if (key) await deleteFileFromS3(key);
      }
    }
    // Upload new images to S3

        // Upload new images to S3
        const uploadPromises = imageFiles
          .filter((file) => file.size > 0)
          .map((file) => uploadFileToS3(file));
      
        const uploadedUrls = await Promise.all(uploadPromises);
        updateImage.push(...uploadedUrls);
  //    if (imageFiles && imageFiles.length > 0) {
  //   for (const imageFile of imageFiles) {
  //     if (imageFile.size > 0) {
  //       const imageUrl = await uploadFileToS3(imageFile);
  //       updateImage.push(imageUrl);
  //       console.log("Image uploaded to S3:", imageUrl);
  //     }
  //   }
  //   console.log(
  //     "-----------------------------------------------------------------------------------------------------------------------------"
  //   );
  //   console.log(
  //     `Total file ${imageFiles.length} uploaded to S3 successfully`
  //   );
  // }

    // Only reorder if imagesOrder is valid
    if (imagesOrder.length > 0) {
      const orderedUrls = imagesOrder.map((img) => img.url);
      // Add new images that are NOT in order list
      for (const img of updateImage) {
        if (!orderedUrls.includes(img)) {
          orderedUrls.push(img);
        }
      }

      event.images = orderedUrls;
    } else {
      event.images = updateImage;
    }
    await event.save();
    return NextResponse.json({
      success: true,
      event,
      message: "Event images saved",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}

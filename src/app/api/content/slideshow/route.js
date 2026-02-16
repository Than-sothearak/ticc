import { connectDb } from "@/lib/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { Admin } from "@/models/Admin";
import { Content } from "@/models/Content";
import { deleteFileFromS3, uploadFileToS3 } from "@/lib/uploadImageFileToS3";

export async function POST(req) {
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
    const imageFiles = formData.getAll("images");

    let imageUrls = [];

    // ===== Upload to S3 (unchanged logic) =====
    if (imageFiles && imageFiles.length > 0 && imageFiles[0].size > 0) {
      for (const imageFile of imageFiles) {
        if (imageFile.size > 0) {
          const imageUrl = await uploadFileToS3(imageFile);
          imageUrls.push(imageUrl);
        }
      }
    }
    // =========================================

    const content = await Content.findOne();
    if (!content) {
      return NextResponse.json(
        { success: false, message: "Content not found" },
        { status: 404 },
      );
    }

    content.slide_show.images.push(...imageUrls);
    await content.save();

    return NextResponse.json({
      success: true,
      message: "Images added successfully",
      content,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}

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
        { success: false, message: "Content not found" },
        { status: 404 },
      );
    }

    const removedImages = JSON.parse(formData.get("removedImages") || "[]");
    const imageFiles = formData.getAll("images") || [];

    const getRemovedImages = removedImages.map((i) => i.url); //Put image link to array only
    const imagesOrder = JSON.parse(formData.get("imagesOrder") || "[]");


    // Remove deleted images
    let updateImages =
      content.slide_show?.images.filter(
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
    updateImages.push(...uploadedUrls);
    
   
    // Only reorder if imagesOrder is valid
    if (imagesOrder.length > 0) {
      const orderedUrls = imagesOrder.map((img) => img.url);
      // Add new images that are NOT in order list
      for (const img of updateImages) {
        if (!orderedUrls.includes(img)) {
          orderedUrls.push(img);
        }
      }
      content.slide_show.images = orderedUrls;
    } else {
      content.slide_show.images = updateImages;
    }

    await content.save();

    return NextResponse.json({
      success: true,
      message: "Saved successfully",
      content,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}

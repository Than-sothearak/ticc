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
    
    const getRemovedImages = removedImages.map(i => i.url)
 
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
    for (const file of imageFiles) {
      if (file.size > 0) {
        const url = await uploadFileToS3(file);
        updateImage.push(url);
      }
    }
    const imagesOrder = JSON.parse(formData.get("imagesOrder") || "[]");

  

    // Only reorder if imagesOrder is valid
    if (imagesOrder.length > 0) {
        console.log("Images reorder")
      event.images = imagesOrder.map(img => img.url);
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

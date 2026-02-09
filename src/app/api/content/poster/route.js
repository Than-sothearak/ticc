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
    
  
    // Remove deleted images
    let updatePoster = content.information.poster.filter(
      (img) => !removedImages.includes(img),
    ) || [];
    // Remove deleted images from S3
    if (removedImages.length > 0) {
      for (const img of removedImages) {
        const key = img.split("/").pop();
        if (key) await deleteFileFromS3(key);
      }
    }
    // Upload new images to S3
    for (const file of imageFiles) {
      if (file.size > 0) {
        const url = await uploadFileToS3(file);
        updatePoster.push(url);
      }
    }
    content.information.poster = updatePoster;
    await content.save();
    return NextResponse.json({
      success: true,
      content,
      message: "Saved",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}

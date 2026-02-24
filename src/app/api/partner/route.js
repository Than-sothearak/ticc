import { connectDb } from "@/lib/connectDb";
import { deleteFileFromS3, uploadFileToS3 } from "@/lib/uploadImageFileToS3";
import { Partner } from "@/models/Partner";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const formData = await req.formData();

    const imageFiles = formData.getAll("images"); // File[]
    let imageUrls =[];
       if (imageFiles && imageFiles.length > 0 && imageFiles[0].size > 0) {
         for (const imageFile of imageFiles) {
           if (imageFile.size > 0) {
             const imageUrl = await uploadFileToS3(imageFile);
             imageUrls.push(imageUrl);
             console.log("Image uploaded to S3:", imageUrl);
           }
         }
         console.log(
           "-----------------------------------------------------------------------------------------------------------------------------"
         );
         console.log(
           `Total file ${imageFiles.length} uploaded to S3 successfully`
         );
       }
    await Partner.create({
      logos: imageUrls,
    });

    return NextResponse.json({
         success: true, message: "Logos added" ,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}


export async function PUT(req) {
  try {
    await connectDb();
    const formData = await req.formData();
    const id = formData.get("_id"); 
    if (!id) {
      return NextResponse.json(
        { success: false, message: "_id is required for update" },
        { status: 400 }
      );
    }
    const partner = await Partner.findById(id);
    if (!partner) {
      return NextResponse.json(
        { success: false, message: "Partner not found" },
        { status: 404 }
      );
    }
    const removedImages = JSON.parse(formData.get("removedImages") || "[]");
    const imageFiles = formData.getAll("images") || [];
    const getRemovedImages = removedImages.map((i) => i.url); //Put image link to array only
        const imagesOrder = JSON.parse(formData.get("imagesOrder") || "[]");


    // Remove deleted images
    let updatedLogos = partner.logos.filter(
      (logo) => !getRemovedImages .includes(logo)
    );
      // Remove deleted images from S3
    if (getRemovedImages .length > 0) {
      for (const img of getRemovedImages ) {
        const key = img.split("/").pop();
        if (key) await deleteFileFromS3(key);
      }
    }
    // Upload new images to S3
      const uploadPromises = imageFiles
          .filter((file) => file.size > 0)
          .map((file) => uploadFileToS3(file));
    
    const uploadedUrls = await Promise.all(uploadPromises);
    updatedLogos.push(...uploadedUrls);
    partner.logos = updatedLogos;
     
      if (imagesOrder.length > 0) {
      const orderedUrls = imagesOrder.map((img) => img.url);
      // Add new images that are NOT in order list
      for (const img of updatedLogos) {
        if (!orderedUrls.includes(img)) {
          orderedUrls.push(img);
        }
      }
      partner.logos = orderedUrls;
    } else {
      partner.logos = updatedLogos;
    }


    await partner.save();
    return NextResponse.json({
      success: true,
      partner,
      message: "Saved"
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

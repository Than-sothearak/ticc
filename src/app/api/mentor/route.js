import { connectDb } from "@/lib/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Admin } from "@/models/Admin";
import { Content } from "@/models/Content";
import { deleteFileFromS3, uploadFileToS3 } from "@/lib/uploadImageFileToS3";
import { authOptions } from "../auth/[...nextauth]/route";
import { Mentor } from "@/models/Mentor";

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
        const data = JSON.parse(formData.get("data"));
        const imageFile = formData.get("image");
        let imageUrl

        // ===== Upload to S3 (unchanged logic) =====
        if (imageFile?.size > 0) {
            imageUrl = await uploadFileToS3(imageFile)
        }
        const mentor = await Mentor.create({
            name: data.name
            ,
            title: data.title,
            image: imageUrl,
            year: data.year
        })
        return NextResponse.json({
            success: true,
            message: "Mentor added successfully",
            mentor
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
        const data = JSON.parse(formData.get("data"));
        const imageFile = formData.get("image");
        const mentor = await Mentor.findById({ _id: data._id })
        let imageUrl = mentor.image
        if (!data) {
            return NextResponse.json(
                { success: false, message: "data is required for update" },
                { status: 400 },
            );
        }
        if (imageFile?.size > 0) {
           if (mentor?.image) {
             const key = mentor?.image.split("/").pop();
            if (key) await deleteFileFromS3(key);
           }
            imageUrl = await uploadFileToS3(imageFile)
        }

        mentor.title = data.title
        mentor.name = data.name
        mentor.year = data.year
        mentor.image = imageUrl
        await mentor.save();

        return NextResponse.json({
            success: true,
            message: "Saved successfully",
            mentor,
        });
    } catch (err) {
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 },
        );
    }
}

import { NextResponse } from "next/server";
import { Mentor } from "@/models/Mentor";
import { connectDb } from "@/lib/connectDb";
import { deleteFileFromS3 } from "@/lib/uploadImageFileToS3";
import { authOptions } from "../../auth/[...nextauth]/route";
import { Admin } from "@/models/Admin";
import { getServerSession } from "next-auth";

export async function DELETE(req, { params }) {
    await connectDb();
    const session = await getServerSession(authOptions);
    const isAdmin = await Admin.findOne({ email: session?.user?.email });
    if (!isAdmin) {
        return NextResponse.json(
            { success: false, message: "Access denied" },
            { status: 403 },
        );
    }
    const { id } = params;

    if (!id) {
        return NextResponse.json(
            { success: false, message: "Mentor ID is required" },
            { status: 400 }
        );
    }

    try {
        const deletedMentor = await Mentor.findByIdAndDelete(id);
        if (deletedMentor.image) {
            const key = deletedMentor?.image.split("/").pop();
            if (key) await deleteFileFromS3(key);
        }
        if (!deletedMentor) {
            return NextResponse.json(
                { success: false, message: "Mentor not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({
            success: true,
            message: "Mentor deleted successfully",
            mentor: deletedMentor,
        });
    } catch (err) {
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

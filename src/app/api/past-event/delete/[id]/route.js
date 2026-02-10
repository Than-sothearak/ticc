import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Admin } from "@/models/Admin";
import { Event } from "@/models/Event";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { deleteFileFromS3 } from "@/lib/uploadImageFileToS3";
import { connectDb } from "@/lib/connectDb";


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
      { success: false, message: "Event ID is required" },
      { status: 400 },
    );
  }
  try {
    const event = await Event.findByIdAndDelete(id);
    if (event.images) {
      for (const img of event.images) {
        const key = img.split("/").pop();
        if (key) await deleteFileFromS3(key);
      }
    }

    if (event.prototypes) {
      for (const img of event.prototypes) {
        const key = img.split("/").pop();
        if (key) await deleteFileFromS3(key);
      }
    }
    if (!event) {
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({
      success: true,
      message: "Event deleted successfully",
      mentor: event,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}

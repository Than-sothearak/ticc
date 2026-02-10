import { connectDb } from "@/lib/connectDb";
import { deleteFileFromS3, uploadFileToS3 } from "@/lib/uploadImageFileToS3";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { Admin } from "@/models/Admin";
import { Event } from "@/models/Event";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);
    const isAdmin = await Admin.findOne({ email: session?.user?.email });
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "Access denied" },
        { status: 403 },
      );
    }

    const { year, title, description, season, postby } = await req.json();

    if (!title || !title.trim()) {
      console.log("Title cannot be empty");
      return;
    }

    if (!year) {
      console.log("Year cannot be empty");
      return;
    }
    // Optional: convert year to number
    const yearNumber = Number(year);
    if (isNaN(yearNumber)) {
      console.log("Year must be a number");
      return;
    }
    // 2️⃣ Prepare payload
    const payload = {
      title: title.trim(),
      year: yearNumber,
      season: season || "", // optional
      description: description || "",
      postby: postby, // from RichTextEditor
    };
    const event = await Event.create(payload);
    revalidatePath("/dashboard/events"); // list page
revalidatePath(`/dashboard/events/${event._id}`); // detail page (if exists)

    return NextResponse.json({
      success: true,
      message: "Event created",
      event,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}

export async function PUT(req) {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);
    const isAdmin = await Admin.findOne({ email: session?.user?.email });
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "Access denied" },
        { status: 403 },
      );
    }

    const { year, title, description, season, postby, id } = await req.json();
    const event = await Event.findById({ _id: id });

    if (!event) {
      return NextResponse.json(
        { success: false, message: err.message },
        { status: 500 },
      );
    }
    if (!title || !title.trim()) {
      console.log("Title cannot be empty");
      return;
    }

    if (!year) {
      console.log("Year cannot be empty");
      return;
    }
    // Optional: convert year to number
    const yearNumber = Number(year);
    if (isNaN(yearNumber)) {
      console.log("Year must be a number");
      return;
    }
    ((event.title = title),
      (event.year = year),
      (event.description = description),
      (event.season = season));
    await event.save();
    revalidatePath('/dashboard/events')
    return NextResponse.json({
      success: true,
      event,
      message: "Event Saved",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}


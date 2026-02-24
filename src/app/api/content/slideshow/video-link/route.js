import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDb } from "@/lib/connectDb";
import { Admin } from "@/models/Admin";
import { Content } from "@/models/Content";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/**
 * CREATE or UPDATE apply link (single content document)
 */
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
    const { link } = await req.json();

    // Find single content document
    let content = await Content.findOne();

    if (!content) {
      content = await Content.create({
        slide_show: {
          videoLink: link,
        },
      });
    } else {
      content.slide_show.videoLink = link || "",
      await content.save();
    }

    return NextResponse.json({
      success: true,
      message: "Video link saved successfully",
      videoLink: content.slide_show.videoLink || "",
 
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

import { connectDb } from "@/lib/connectDb";
import { Content } from "@/models/Content";
import { NextResponse } from "next/server";

/**
 * CREATE or UPDATE apply link (single content document)
 */
export async function POST(req) {
  try {
    await connectDb();

    const { link, enabled } = await req.json();

    if (!link) {
      return NextResponse.json(
        { success: false, message: "Link is required" },
        { status: 400 }
      );
    }

    // Find single content document
    let content = await Content.findOne();

    if (!content) {
      content = await Content.create({
        apply_link: {
          src: link,
          enabled,
        },
      });
    } else {
      content.apply_link.src = link;
      content.apply_link.enabled = enabled;
      await content.save();
    }

    return NextResponse.json({
      success: true,
      message: "Apply link saved successfully",
      src: content.apply_link.src,
      enabled: content.apply_link.enabled,
      _id: content._id,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

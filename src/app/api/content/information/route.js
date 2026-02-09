import { connectDb } from "@/lib/connectDb";
import { Content } from "@/models/Content";
import { NextResponse } from "next/server";

/**
 * CREATE or UPDATE apply weeks (single content document)
 */
export async function PUT(req) {
  try {
    await connectDb();

    const { weeks, enabled } = await req.json();

    if (!weeks) {
      return NextResponse.json(
        { success: false, message: "weeks is required" },
        { status: 400 }
      );
    }

    // Find single content document
    let content = await Content.findOne();

    if (!content) {
      content = await Content.create({
        information: {
          weeks,
          enabled,
        },
      });
    } else {
      content.information.weeks= weeks;
      content.information.enabled = enabled;
      await content.save();
    }

    return NextResponse.json({
      success: true,
      message: "Infomation and schedule saved successfully",
      weeks: content.information.weeks,
      enabled: content.information.enabled,
      _id: content._id,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

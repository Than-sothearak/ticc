import { connectDb } from "@/lib/connectDb";
import { Content } from "@/models/Content";
import { Fqa } from "@/models/Fqa";
import { NextResponse } from "next/server";

/**
 * CREATE or UPDATE apply link (single content document)
 */
export async function POST(req) {
  try {
    await connectDb();

    const { question, answer } = await req.json();

    if (!question || !answer) {
      return NextResponse.json(
        { success: false, message: "Question and answer are required" },
        { status: 400 }
      );
    }
      const fqa = await Fqa.create({
        question,
        answer
         });
        
    return NextResponse.json({
      success: true,
      message: "FQA added successfully",
      fqa,
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
       const { question, answer, id } = await req.json();

    if (!question || !answer) {
      return NextResponse.json(
        { success: false, message: "Question and answer are required" },
        { status: 400 }
      );
    }

    if(!id) {
      return NextResponse.json(
        { success: false, message: "FQA ID is required for update" },
        { status: 400 }
      );
    }
    await connectDb();      
    const fqa = await Fqa.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true }
    );  
    return NextResponse.json({
      success: true,
      message: "FQA updated successfully",
      fqa,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  } }
import { connectDb } from "@/lib/connectDb";
import { Admin } from "@/models/Admin";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email are required" },
        { status: 400 }
      );
    }
    const exsitingAdmin = await Admin.findOne({email: email})
 
    if (exsitingAdmin) {
         return NextResponse.json(
        { success: false, message: `Email ${email} already exists` },
        { status: 400 }
      );
    }
      const admin = await Admin.create({
        email: email
         });
        
    return NextResponse.json({
      success: true,
      message: "Admin added successfully",
      admin,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

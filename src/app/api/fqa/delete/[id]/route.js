import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Admin } from "@/models/Admin";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDb } from "@/lib/connectDb";
import { Fqa } from "@/models/Fqa";


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
      { success: false, message: "FQA ID is required" },
      { status: 400 },
    );
  }
  try {
    const fqa = await Fqa.findByIdAndDelete(id);
   
    if (!fqa) {
      return NextResponse.json(
        { success: false, message: "FQA not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({
      success: true,
      message: "FQA deleted successfully",
      fqa,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}

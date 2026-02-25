import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Admin } from "@/models/Admin";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
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
      { success: false, message: "Admin ID is required" },
      { status: 400 },
    );
  }
  try {

       // Find target admin first
    const targetAdmin = await Admin.findById(id);
    if (!targetAdmin) {
      return NextResponse.json(
        { success: false, message: "Admin not found" },
        { status: 404 }
      );
    }

    if (targetAdmin.email === "thearak643@gmail.com") {
      return NextResponse.json(
        { success: false, message: "You cannot delete Super Admin!" },
        { status: 400 }
      );
    }
      const admin = await Admin.findByIdAndDelete(id);
   
      return NextResponse.json({
        success: true,
        message: `Admin ${admin.email} deleted successfully`,
        admin,
      });
    
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
}

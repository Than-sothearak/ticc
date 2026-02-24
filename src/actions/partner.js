"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDb } from "@/lib/connectDb";
import { Admin } from "@/models/Admin";
import { getServerSession } from "next-auth";

export async function partnerImageUpdate(productId, prevState, formData) {
  return { success: true, message: "Product saved successfully!" };
}

export async function createPartner(prevState, formData) {
  await connectDb();
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return console.log("Access denied!");
  }
  const isAdmin = await Admin.find({ email: session.user.email });
  if (!isAdmin) {
    return console.log("Access denied!");
  }

  console.log(formData)

    if (!formData || typeof formData.get !== "function") {
      console.error("Invalid or missing formData:", formData);
      return { error: "No valid form data received" };
    }
    
    const imageFiles = formData.getAll("images");
    console.log(imageFiles)

       await Partner.create({
      logo: "test"
    });
  return { success: true, message: "Partner added successfully!" };

}

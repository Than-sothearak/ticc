"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

 if (session) {
  router.push('/dashboard')
 }
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
        <p className="text-gray-500 mt-2">
          Sign in using your Google account
        </p>
      </div>

      {/* Google Sign In Button */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition"
      >
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          width={20}
          height={20}
        />
        <span className="text-sm font-medium text-gray-700">
          Continue with Google
        </span>
      </button>

      {/* Footer */}
      <p className="text-xs text-center mt-6">
        By continuing, you agree to our Terms & Privacy Policy
      </p>
    </div>
  );
};

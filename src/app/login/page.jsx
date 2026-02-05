"use client"
import React from "react";
import { LoginForm } from "@/components/LoginForm";
import { SessionProvider } from "next-auth/react";

const LoginPage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <SessionProvider>
       <LoginForm />
  </SessionProvider>
    </div>
  );
};

export default LoginPage;

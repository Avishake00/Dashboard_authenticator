"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/auth/Login");
  };

  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-800 to-black">
      <div className="flex flex-col items-center space-y-4 text-center">
        <p className="text-white text-2xl">Welcome Back</p>
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          ZENTRADES
        </h1>
        <p className="text-white text-lg">A simple authentication service presented by Avishake</p>
      </div>
      <Button onClick={handleOnClick} className='bg-white text-blue-950 hover:text-white hover:border hover:border-yellow-400 rounded mt-4'>Click here to continue</Button>
    </main>
  );
};

export default Page;

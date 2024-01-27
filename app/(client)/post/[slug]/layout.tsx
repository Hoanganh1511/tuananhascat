"use client";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="absolute top-0 right-full mr-[20px]">
        <button
          onClick={() => router.back()}
          className="mt-[10px] bg-primary text-white rounded-md w-[60px] h-[30px] flex items-center justify-center"
        >
          <IoMdArrowBack size={25} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Layout;

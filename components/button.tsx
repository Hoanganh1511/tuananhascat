"use client";
import { cn } from "@/libs/utils";
import React from "react";
interface IButton {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}
const Button = ({ children, className, value, ...rest }: IButton) => {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(value)}
      className={cn(
        `block bg-[#5FBDFF] px-[16px] py-[8px] rounded-md 
        text-white dark:text-black
        hover:brightness-90
        duration-100
        `,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

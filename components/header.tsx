"use client";
import React, { useCallback, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import ThemeToggleButton from "./theme-toggle-button";
import { usePathname, useRouter } from "next/navigation";
import Hamburger from "hamburger-react";
import { useAnimationControls } from "framer-motion";
interface LinkItemProp {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}
const LinkItem = ({ href, children, ...props }: LinkItemProp) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${
        pathname === href ? "bg-primary rounded-sm" : ""
      } text-[#1a202c] dark:text-white px-[8px] py-[6px] relative hover:underline`}
      {...props}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full z-10   backdrop-blur-sm ">
      <div className="container">
        <div className="flex items-center justify-between py-[8px]">
          <div className="flex items-center">
            <Logo />
            <div className="hidden md:flex items-center gap-[18px] ml-[32px]">
              <LinkItem href="/projects">Projects</LinkItem>
              <LinkItem href="/post">Posts</LinkItem>
              <LinkItem href="/post">Gallery</LinkItem>
            </div>
          </div>
          <div className="hidden md:block">
            <ThemeToggleButton />
          </div>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {isOpen && (
              <div className="z-20 fixed top-0 left-0 h-screen w-[180px] px-[15px] pt-[20px] flex  justify-between bg-white/90">
                {/* <div className="flex flex-col gap-[16px]">
                  <LinkItem className="text-black" href="/work">
                    Works
                  </LinkItem>
                  <LinkItem className="text-black" href="/post">
                    Posts
                  </LinkItem>
                </div> */}
                <ThemeToggleButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

"use client";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import Logo from "../logo";
import ThemeToggleButton from "../theme-toggle-button";

const variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 20,
  },
};
interface LinkItemProp {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimationControls();
  const router = useRouter();
  const onRoute = useCallback(
    (href: string) => async () => {
      router.prefetch(href);
      await controls.start("exit");
      router.push(href);
      controls.start("enter");
    },
    [router, controls]
  );
  useEffect(() => {
    controls.start("enter");
  }, [controls]);
  const LinkItem = ({ href, children, ...props }: LinkItemProp) => {
    const pathname = usePathname();

    return (
      <Link
        href={""}
        prefetch={true}
        onClick={onRoute(href)}
        className={`${
          pathname === href ? "bg-primary " : ""
        } text-[#1a202c] text-[14px] dark:text-white px-[8px] py-[6px] relative hover:underline`}
        {...props}
      >
        {children}
      </Link>
    );
  };
  return (
    <>
      <div className="sticky top-0 left-0 w-full z-10  backdrop-blur-sm ">
        <div className="flex justify-between align-center py-[12px]">
          <div className="flex items-center">
            <Link href="" scroll={true} onClick={onRoute("/")}>
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-[12px] ml-[32px]">
              <LinkItem href="/projects">Projects</LinkItem>
              <LinkItem href="/post">Posts</LinkItem>
            </div>
          </div>
          <ThemeToggleButton />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={controls}
        variants={variants}
        className="mt-[40px]"
        transition={{ duration: 0.42, type: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default MainLayout;

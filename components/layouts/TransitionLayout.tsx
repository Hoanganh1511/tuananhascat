"use client";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import React, { useCallback } from "react";

import Header from "../header";
import { useRouter } from "next/navigation";
import MainLayout from "./MainLayout";

const TransitionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <MainLayout>{children}</MainLayout>
    </AnimatePresence>
  );
};

export default TransitionLayout;

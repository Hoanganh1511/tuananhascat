import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - Tuấn Anh",
  description: "Projects - Tuấn Anh",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Posts - Tuấn Anh",
  description: "Posts - Tuấn Anh",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;

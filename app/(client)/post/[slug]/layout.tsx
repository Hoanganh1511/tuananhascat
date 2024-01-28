import React from "react";
import { useRouter } from "next/navigation";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[750px] mx-auto">{children}</div>;
};

export default Layout;

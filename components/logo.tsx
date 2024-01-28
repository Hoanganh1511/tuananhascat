import Link from "next/link";
import React from "react";
import FootIcon from "./icons/foot";
import { useTheme } from "next-themes";
const Logo = () => {
  return (
    <div>
      <div className="flex items-center">
        <FootIcon
          width={34}
          height={34}
          className="fill-black dark:fill-white"
        />
        <h1 className="ml-[4px] text-[26px] font-bold">Takuya Tuananh</h1>
      </div>
    </div>
  );
};

export default Logo;

import React from "react";

export const BioYear = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-bold mr-[1em]">{children}</span>;
};
export const BioSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="pl-[3.4em] -indent-[3.4em]">{children}</div>;
};

export default BioSection;

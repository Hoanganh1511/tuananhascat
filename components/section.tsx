import React from "react";

const Section = ({
  title = "",
  subTitle = "",
  isUnderline = false,
  children,
}: {
  title: string;
  subTitle?: string;
  isUnderline?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-[20px]">
      <div className="mb-[12px]">
        <h3
          className={`text-[20px] font-bold inline-block relative 
          ${
            isUnderline
              ? "after:absolute after:left-0 after:w-full after:h-[3px] after:bg-[#525252] after:-bottom-[3px]"
              : ""
          }
          `}
        >
          <span className="text-primary">#</span> {title}
        </h3>
        {subTitle && subTitle.length > 0 && (
          <p className="my-[16px]">{subTitle}</p>
        )}
      </div>
      <>{children}</>
    </div>
  );
};

export default Section;

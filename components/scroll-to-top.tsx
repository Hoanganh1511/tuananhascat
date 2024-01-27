"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AiFillFire } from "react-icons/ai";
const ScrollToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    //     console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);
  const onTop = () => {
    if (window.scrollY > 500) {
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);
  return (
    <div className="fixed w-[30px] h-[30px] flex items-center justify-center bottom-[25px] right-[25px]">
      <AiFillFire
        size={30}
        className="cursor-pointer hover:text-[#52D3D8]"
        onClick={onTop}
      />
    </div>
  );
};

export default ScrollToTopButton;

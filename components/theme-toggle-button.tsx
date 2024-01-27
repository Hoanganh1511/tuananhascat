"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const toggleSwitch = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div onClick={toggleSwitch}>
      <motion.div layout>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className={`w-[40px] h-[40px] rounded-[8px] flex items-center justify-center cursor-pointer  
            duration-90 hover:brightness-90 ${
              theme === "dark" ? "bg-[#4E31AA]" : "bg-[#E96479]"
            }`}
            key={theme === "dark" ? "moon" : "sun"}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? (
              <IoMdMoon size={22} className="text-white" />
            ) : (
              <MdOutlineWbSunny size={22} className="text-white" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeToggleButton;

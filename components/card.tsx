"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: 0, y: 40 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 40 },
};

const Card = ({
  url,
  title,
  desc,
  imageUrl,
}: {
  url: string;
  title?: string;
  desc?: string;
  imageUrl: StaticImageData | string;
}) => {
  return (
    <motion.div
    // initial="hidden"
    // animate="enter"
    // exit="exit"

    // variants={variants}
    // transition={{ duration: 0.65, type: "easeInOut" }}
    // initial={{ y: 10, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // transition={{ duration: 0.8, delay: 0 }}
    // style={{ position: "relative" }}
    >
      {" "}
      <Link href={url} target="_blank" className="w-full">
        <div className="relative w-full h-[130px]">
          <Image
            src={imageUrl}
            alt="card image"
            fill
            className="object-cover w-full rounded-[6px]"
          />
        </div>
        <div className="text-center">
          <h5 className="mt-[14px] mb-[2px] text-[18px] font-semibold">
            {title}
          </h5>
          <p className="text-[12px]">{desc}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;

"use client";
import { Tag } from "@/utils/interface";
import { motion } from "framer-motion";
import React from "react";
import qs from "query-string";
import { FaHandPointRight } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
interface FilterProps {
  data: Tag[];
  valueKey: string;
}
const Filter = ({ data, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const onClick = (slug: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: slug,
    };

    if (current[valueKey] === slug) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };
  const selectedValue = searchParams.get(valueKey);
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variantsLi = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  };
  return (
    <div className="absolute w-[200px] h-[400px] border-r border-[rgba(255,255,255,0.7)] top-0 right-full mr-[20px]">
      <div className="flex flex-col">
        <motion.ul variants={variants} className="flex flex-col gap-3">
          {data &&
            data.map((item) => {
              const isActive = selectedValue === item.slug.current;
              return (
                <motion.li
                  variants={variantsLi}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.98 }}
                  key={item._id}
                  onClick={() => onClick(item.slug.current)}
                  className={`relative cursor-pointer font-semibold hover:text-white ${
                    isActive ? "" : ""
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-1/2 right-full mr-[12px] -translate-y-1/2 ">
                      <FaHandPointRight color="#7BD3EA" />
                    </span>
                  )}
                  <p>{item.name}</p>
                </motion.li>
              );
            })}
        </motion.ul>
      </div>
    </div>
  );
};

export default Filter;

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Post } from "@/utils/interface";
const PostComponent = ({ post }: { post: Post }) => {
  return (
    <Link
      href={`/post/${post.slug.current}`}
      className="w-full p-[10px] rounded-[6px] duration-200 border-[1px] shadow-md hover:shadow-none hover:border-primary"
    >
      <div className="relative w-full h-[130px]">
        <Image
          src={post.imageUrl}
          alt="card image"
          fill
          className="object-cover w-full rounded-[6px]"
        />
      </div>
      <div className="">
        <h5 className="font-bold normal-case mt-[10px] mb-[2px] text-[14px] font-regular">
          {post.title}
        </h5>
        <p className="text-[15px]"></p>
      </div>
    </Link>
  );
};

export default PostComponent;

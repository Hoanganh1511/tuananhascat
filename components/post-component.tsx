import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Post } from "@/utils/interface";
import { formatDate } from "@/libs/utils";
const PostComponent = ({ post }: { post: Post }) => {
  return (
    <Link
      href={`/post/${post.slug.current}`}
      className="w-full  duration-200 relative
      group
     after:block after:absolute after:w-[1px] after:h-full after:bg-black/10 dark:after:bg-white/10  after:top-0 after:-right-[20px]
     before:block before:absolute  before:h-[1px] before:bg-black/10 dark:before:bg-white/10 before:-top-[20px] before:-left-[20px] before:-right-[20px]
      "
    >
      <div className="relative w-full h-[150px]">
        <Image
          src={post.imageUrl || ""}
          alt="card image"
          fill
          className="object-cover w-full "
        />
      </div>
      <>
        <h5 className="font-bold normal-case mt-[20px]  text-[18px] font-regular group-hover:text-black/70 dark:group-hover:text-white/80">
          {post.title}
        </h5>
        <p className="text-[14.5px] leading-[1.4] inline-block w-full h-[50px] mt-[8px] mb-[8px] overflow-hidden truncate line-clamp-2">
          {post?.excerpt}
        </p>
        <div className="text-black/50 text-[12.5px] dark:text-white/50 ">
          By Tuan Anh - {formatDate(post.publishedAt)}
        </div>
      </>
    </Link>
  );
};

export default PostComponent;

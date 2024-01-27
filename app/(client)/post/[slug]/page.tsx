import useSWR from "swr";
import { useState, useEffect } from "react";
import Layout from "@/components/layouts/MainLayout";
import Section from "@/components/section";
import React from "react";
import { client } from "@/sanity/lib/client";
import { Post, Tag } from "@/utils/interface";
import PostComponent from "@/components/post-component";
import { groq } from "next-sanity";
import { useSearchParams } from "next/navigation";
import Skeleton from "@/components/ui/skeleton";
import { formatDate } from "@/libs/utils";
import { FaCalendarDay } from "react-icons/fa6";
import { PortableText } from "@portabletext/react";
import RichTextComponent from "@/components/ui/rich-text-component";
interface PostDetailPageProps {
  params: {
    slug: string;
  };
}
export const revalidate = 0;
const PostPage: React.FC<PostDetailPageProps> = async ({
  params: { slug },
}) => {
  const postQuery = `*[_type == 'post' && slug.current == $slug][0] {
     _id, title, slug,publishedAt,"imageUrl": thumbnail.asset->url, excerpt,body, tags[] ->{
      name,
      slug
     }
    }`;

  const post: Post = await client.fetch(postQuery, {
    slug,
    cache: "no-store",
  });
  return (
    <>
      <div className="relative">
        <h1 className="text-[26px]">{post.title}</h1>
        <div>Table of contents</div>
        <div className="mt-[12px] flex items-center gap-[8px] italic text-gray-500">
          <FaCalendarDay />
          <p>Ngày đăng: {formatDate(post.publishedAt)}</p>
        </div>
        <div className="mt-[20px]">
          <PortableText value={post.body} components={RichTextComponent} />
        </div>
      </div>
    </>
  );
};

export default PostPage;

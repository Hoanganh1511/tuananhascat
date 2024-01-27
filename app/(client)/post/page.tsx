"use client";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Layout from "@/components/layouts/MainLayout";
import Section from "@/components/section";
import React from "react";
import { client } from "@/sanity/lib/client";
import { Post, Tag } from "@/utils/interface";
import PostComponent from "@/components/post-component";
import Filter from "./components/filter";
import { groq } from "next-sanity";
import { useSearchParams } from "next/navigation";
import Skeleton from "@/components/ui/skeleton";
const PostPage: React.FC = () => {
  const searchParams = useSearchParams();
  const isFilter = searchParams.get("tagSlug");
  const postsQuery = isFilter
    ? `*[_type == 'post' && $tagSlug in tags[]->slug.current] {
     _id, title, slug,publishedAt,"imageUrl": thumbnail.asset->url, excerpt,body, tags[] ->{
      name,
      slug
     }
    }`
    : `*[_type == 'post'] {
    _id, title, slug,publishedAt,"imageUrl": thumbnail.asset->url, excerpt,body, tags[] ->{
     name,
     slug
    }
   }`;
  const tagsQuery = `*[_type == 'tag'] {
    _id,  name, slug
    } `;

  const paramsSanity = {
    tagSlug: isFilter,
  };
  useEffect(() => {
    postsMutate();
  }, [isFilter]);
  const {
    data: posts,
    error: postsError,
    isValidating: postsLoading,
    mutate: postsMutate,
  } = useSWR(
    groq`${postsQuery}`,
    (query) => client.fetch(query, !!isFilter && paramsSanity),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true, // If false, undefined data gets cached against the key.
      dedupingInterval: 3_600_000, // dont duplicate a request w/ same key for 1hr
    }
  );
  const { data: tags } = useSWR(groq`${tagsQuery}`, (query) =>
    client.fetch(query)
  );
  return (
    <>
      <div className=" relative">
        <Filter data={tags} valueKey="tagSlug" />
        <div>
          <Section title="Posts">
            <div className="grid grid-cols-2 gap-x-[12px] gap-y-[20px]">
              {postsLoading ? (
                <>
                  <Skeleton className="w-full h-[160px] rounded-md" />
                  <Skeleton className="w-full h-[160px] rounded-md" />
                  <Skeleton className="w-full h-[160px] rounded-md" />
                  <Skeleton className="w-full h-[160px] rounded-md" />
                </>
              ) : posts && posts.length > 0 ? (
                posts.map((post: Post) => {
                  return <PostComponent key={post._id} post={post} />;
                })
              ) : (
                "Không có bài viết nào"
              )}
            </div>
          </Section>

          <br />
        </div>
      </div>
    </>
  );
};

export default PostPage;

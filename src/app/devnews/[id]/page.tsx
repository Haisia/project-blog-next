import React from 'react';
import {MDXRemote} from "next-mdx-remote/rsc";
import {fetchDevNews} from "@/api/fetchDevNews";

const Page = async (
  {
    params,
  }: Readonly<{
    params: Promise<{id: number}>,
  }>) => {

  const { id } = await params;
  const response = await fetchDevNews(id);
  const devNews = response.blogDevNewses[0];

  return (
    <>
      <h1 className="text-[2.5rem] font-bold my-5">{devNews.contentData.title}</h1>
      <article className="markdown max-w-none">
        <MDXRemote source={devNews.contentData.content} />
      </article>
    </>
  );
};

export default Page;
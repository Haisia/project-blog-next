import React from 'react';
import {MDXRemote} from "next-mdx-remote/rsc";
import {fetchMarkdown} from "@/utils/fetchMarkdown";
import matter from "gray-matter";

const Page = async (
  {
    params,
  }: Readonly<{
    params: Promise<{id: number}>,
  }>) => {

  const { id } = await params;
  const response = await fetch(`http://localhost:8080/api/blog/devnews/${id}`);
  // const { title, content: rawContent } = await response.json();
  const { articles } = await response.json();
  const { content } = matter(articles[0].content);

  return (
    <>
      <h1 className="text-[2.5rem] font-bold my-5">{articles[0].title}</h1>
      <article className="markdown max-w-none">
        <MDXRemote source={content}/>
      </article>
    </>
  );
};

export default Page;
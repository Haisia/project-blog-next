import React from 'react';
import {MDXRemote} from "next-mdx-remote/rsc";
import {fetchMarkdown} from "@/utils/fetchMarkdown";

const Page = async (
  {
    params,
  }: Readonly<{
    params: Promise<{id: number}>,
  }>) => {

  const { id } = await params;
  const {title, content} = await fetchMarkdown(`http://localhost:8080/post/${id}`);

  return (
    <>
      <h1 className="text-[2.5rem] font-bold my-5">{title}</h1>
      <article className="markdown max-w-none">
        <MDXRemote source={content}/>
      </article>
    </>
  );
};

export default Page;
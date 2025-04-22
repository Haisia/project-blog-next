import React from 'react';
import Breadcrumb, {BreadcrumbItem} from "@/components/breadcrumb";
import {compileMDX} from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrismAll from "rehype-prism-plus";
import rehypeExternalLinks from "@/config/rehypeExternalLinks";

export interface MarkdownPostItem {
  title: string;
  content: string;
}

const MarkdownPost = async (
  {
    breadcrumbItems,
    item,
  }: {
    breadcrumbItems: BreadcrumbItem[];
    item: MarkdownPostItem;
  }
) => {

  const {content} = await compileMDX({
    source: item.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrismAll, rehypeExternalLinks],
      },
    },
  })

  return (
    <div className={"px-8 py-8 mr-[400px]"}>
      <Breadcrumb items={breadcrumbItems}/>
      <div>
        <h1 className="text-[2.5rem] font-bold my-5">{item.title}</h1>
        <article className="markdown max-w-none">
          {content}
        </article>
      </div>
    </div>
  );
};

export default MarkdownPost;
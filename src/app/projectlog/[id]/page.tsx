import React from 'react';
import {fetchProjectLogPost} from "@/api/fetchProjectLog";
import MarkdownPost from "@/components/markdownPost";

const group = "Project Log"
const groupLink = "/projectlog"

const Page = async (
  { params }: Readonly<{ params: Promise<{ id: number }> }>
) => {
  const { id } = await params
  const post = await fetchProjectLogPost(id.toString())

  const breadcrumbItems = [
    {content: group, link: groupLink},
    {content: post.title, link: `${groupLink}/${id}`}
  ]

  return (
    <MarkdownPost
      breadcrumbItems={breadcrumbItems}
      item={post}
    />
  );
};

export default Page;
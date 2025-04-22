import React from 'react';
import {fetchProjectLogPost} from "@/api/fetchProjectLog";
import MarkdownPost from "@/components/markdownPost";

const pageName = "Project Log"
const pageLink = "/projectlog"

const Page = async (
  { params }: Readonly<{ params: Promise<{ id: number }> }>
) => {
  const { id } = await params
  const post = await fetchProjectLogPost(id.toString())

  const breadcrumbItems = [
    {content: pageName, link: pageLink},
    {content: post.projectTitle, link: pageLink + `?projectId=${post.projectId}`},
    {content: post.title, link: `${pageLink}/${id}`}
  ]

  return (
    <MarkdownPost
      breadcrumbItems={breadcrumbItems}
      item={post}
    />
  );
};

export default Page;
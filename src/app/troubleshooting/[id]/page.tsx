import React from 'react';
import MarkdownPost from "@/components/markdownPost";
import {staticParamsGenerator} from "@/utils/staticParamsGenerator";
import {notFound} from "next/navigation";
import {fetchTroubleshootingPost} from "@/api/fetchTroubleshooting";

const pageName = "Troubleshooting"
const pageLink = "/troubleshooting"

// export function generateStaticParams() {
//   return staticParamsGenerator(50);
// }

const Page = async (
  { params }: Readonly<{ params: Promise<{ id: number }> }>
) => {
  const { id } = await params
  const post = await fetchTroubleshootingPost(id.toString())

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    {content: pageName, link: pageLink},
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
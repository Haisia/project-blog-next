import React from 'react';
import {BreadcrumbItem} from "@/components/breadcrumb";
import MarkdownPost from "@/components/markdownPost";
import {devToolDefaultContent} from "@/data/devToolData";

const pageName = "Dev Tool"
const pageLink = "/devtool"

const Page = () => {
  const breadcrumbItems:BreadcrumbItem[] = [
    {content:pageName, link: pageLink},
  ];

  return (
    <>
      <MarkdownPost breadcrumbItems={breadcrumbItems} item={devToolDefaultContent}/>
    </>
  );
}

export default Page;
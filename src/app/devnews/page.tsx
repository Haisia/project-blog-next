import React from 'react';
import {BreadcrumbItem} from "@/components/breadcrumb";
import MarkdownPost from "@/components/markdownPost";
import {devNewsDefaultContent} from "@/data/devNewsData";

const pageName = "Dev News"
const pageLink = "/devnews"

const Page = () => {
  const breadcrumbItems:BreadcrumbItem[] = [
    {content:pageName, link: pageLink},
  ];

  return (
    <>
      {<MarkdownPost breadcrumbItems={breadcrumbItems} item={devNewsDefaultContent}/>}
    </>
  );
}

export default Page;
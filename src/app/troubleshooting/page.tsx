import React from 'react';
import {BreadcrumbItem} from "@/components/breadcrumb";
import MarkdownPost from "@/components/markdownPost";
import {troubleshootingDefaultContent} from "@/data/troubleshootingData";

const pageName = "Troubleshooting"
const pageLink = "/troubleshooting"

const Page = () => {
  const breadcrumbItems:BreadcrumbItem[] = [
    {content:pageName, link: pageLink},
  ];

  return (
    <>
      <MarkdownPost breadcrumbItems={breadcrumbItems} item={troubleshootingDefaultContent}/>
    </>
  );
}

export default Page;
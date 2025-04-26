import React from 'react';
import {BreadcrumbItem} from "@/components/breadcrumb";
import MarkdownPost from "@/components/markdownPost";
import {studyNoteDefaultContent} from "@/data/studyNoteData";

const pageName = "Study Note"
const pageLink = "/studynote"

const Page = () => {
  const breadcrumbItems:BreadcrumbItem[] = [
    {content:pageName, link: pageLink},
  ];

  return (
    <>
      <MarkdownPost breadcrumbItems={breadcrumbItems} item={studyNoteDefaultContent}/>
    </>
  );
}

export default Page;
import React from 'react';
import Link from "next/link";

interface Breadcrumb {
  content: string;
  link: string;
}

interface BreadcrumbsProps {
  contents: Breadcrumb[];
}

const Breadcrumbs = ({contents}: BreadcrumbsProps) => {
  return (
    <>
      <div className={"text-[12px] text-gray-500/80"}>
        {contents.map((content, index) => (
          <span key={content.link}>
            <Link href={content.link}>{content.content}</Link>
            {index < contents.length - 1 && <span> {'>'} </span>}
          </span>
        ))}
      </div>
    </>
  );
};

export default Breadcrumbs;
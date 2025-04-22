import React from 'react';
import Link from "next/link";

export interface BreadcrumbItem {
  content: string;
  link: string;
}

const Breadcrumb = ({items}: { items:BreadcrumbItem[] }) => {
  return (
    <>
      <div className={"text-[12px] text-gray-500/80"}>
        {items.map((item, index) => (
          <span key={index}>
            <Link className={"hover:text-mypurple-100"} href={item.link}>{item.content}</Link>
            {index < items.length - 1 && <span> {'>'} </span>}
          </span>
        ))}
      </div>
    </>
  );
};

export default Breadcrumb;
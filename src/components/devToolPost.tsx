import React from 'react';
import Breadcrumb, {BreadcrumbItem} from "@/components/breadcrumb";

const DevToolPost = async (
  {
    breadcrumbItems,
    title,
    content,
  }: {
    breadcrumbItems: BreadcrumbItem[];
    title: string;
    content: React.ReactNode;
  }
) => {
  return (
    <div className={"px-8 py-8 mr-[400px]"}>
      <Breadcrumb items={breadcrumbItems}/>
      <div>
        <h1 className="text-[2.5rem] font-bold my-5">{title}</h1>
        <div className="max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
};

export default DevToolPost;
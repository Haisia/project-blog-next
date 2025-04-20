import React, {ReactNode} from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {fetchMarkdown} from "@/utils/fetchMarkdown";

const group = "Dev News";
const groupLink = "/devnews";

const Layout = async (
  {
    children,
    params,
  }: Readonly<{
    children: ReactNode;
    params: Promise<{id: number}>,
  }>) => {

  const { id } = await params;
  const {title} = await fetchMarkdown(`http://localhost:8080/api/blog/devnews/${id}`);

  return (
    <div className={"px-8 py-8"}>
      <Breadcrumbs contents={[{content: group, link: groupLink}, {content: title, link: `${groupLink}/${id}`}]}/>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
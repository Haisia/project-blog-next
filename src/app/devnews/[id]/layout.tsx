import React, {ReactNode} from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {fetchMarkdown} from "@/utils/fetchMarkdown";

const group = "Dev News";

const Layout = async (
  {
    children,
    params,
  }: Readonly<{
    children: ReactNode;
    params: Promise<{id: number}>,
  }>) => {

  const { id } = await params;
  const {title} = await fetchMarkdown(`http://localhost:8080/post/${id}`);

  return (
    <>
      <Breadcrumbs contents={[{content: group, link: '/devnews'}, {content: title, link: `/devnews/${id}`}]}/>
      <div>{children}</div>
    </>
  );
}

export default Layout;
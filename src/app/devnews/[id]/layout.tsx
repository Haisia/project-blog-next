import React, {ReactNode} from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import {fetchDevNews} from "@/api/fetchDevNews";

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
  const response = await fetchDevNews(id);
  const devNews = response.blogDevNewses[0];

  return (
    <div className={"px-8 py-8 mr-[400px]"}>
      <Breadcrumbs contents={[{content: group, link: groupLink}, {content: devNews.contentData.title, link: `${groupLink}/${id}`}]}/>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
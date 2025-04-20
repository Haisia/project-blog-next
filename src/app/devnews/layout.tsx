import React, {ReactNode} from "react";
import PostNavBar from "@/app/devnews/postNavBar";

const Layout = async (
  {
    children,
  }: Readonly<{
    children: ReactNode;
  }>) => {

  const response = await fetch(`http://localhost:8080/api/blog/devnews/all/latest`);
  const {articles}: {
    articles: Article[],
    year: string,
    month: string,
  } = await response.json();

  articles.sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <div className="flex flex-1 items-stretch">
      <PostNavBar articles={articles}/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

export interface Article {
  id: string;
  title: string;
  content: string;
}
export default Layout;
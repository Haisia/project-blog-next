import React, {ReactNode} from "react";
import PostNavBar from "@/app/devnews/postNavBar";

const Layout = async (
  {
    children,
  }: Readonly<{
    children: ReactNode;
  }>) => {

  const [articlesResponse, yearMonthResponse] = await Promise.all([
    fetch(`http://localhost:8080/api/blog/devnews/all/latest`),
    fetch(`http://localhost:8080/api/blog/devnews/all/year-month`),
  ]);

  const [articlesData, yearMonthData] = await Promise.all([
    articlesResponse.json(),
    yearMonthResponse.json(),
  ]);

  const { articles }: { articles: Article[]; year: string; month: string } = articlesData;
  const { allUniqueYearMonth }: { allUniqueYearMonth: YearMonth[] } = yearMonthData;

  articles.sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <div className="flex flex-1 items-stretch">
      <PostNavBar articles={articles} yearMonths={allUniqueYearMonth}/>
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
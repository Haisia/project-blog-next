"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DropdownNavBar from "./dropdownNavBar";

export interface Article {
  id: string;
  title: string;
  content: string;
}

const PostNavBar = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedYearMonth, setSelectedYearMonth] = useState<string | null>(null);


  useEffect(() => {
    const fetchArticles = async () => {
      let response;
      if (!selectedYearMonth) {
        response = await fetch("http://localhost:8080/api/blog/devnews/all/latest");
      } else {
        response = await fetch(`http://localhost:8080/api/blog/devnews/all/by/year-month/${selectedYearMonth}`);
      }
      const data = await response.json();
      const articlesData: Article[] = Array.isArray(data) ? data : [];

      articlesData.sort((a, b) => Number(b.id) - Number(a.id));
      setArticles(articlesData);
    };

    fetchArticles();

    console.log(articles)

  }, [selectedYearMonth]);

  const handleOnChangeSelectedYearMonth = (value:string) => setSelectedYearMonth(value);

  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <DropdownNavBar onChangeHandler={handleOnChangeSelectedYearMonth} />
      <ol className="list-decimal list-outside space-y-4 py-4 marker:text-lg marker:font-bold [&>li]:text-gray-400 mx-5 [&>li]:text-gray-400">
        {articles.map((article) => (
          <li key={article.id}>
            <Link
              className={`hover:text-mypurple-100 ${activeId === article.id ? "text-mypurple-100" : ""}`}
              onClick={() => setActiveId(article.id)}
              href={`/devnews/${article.id}`}
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PostNavBar;
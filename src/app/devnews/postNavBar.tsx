"use client"

import React, {useState} from "react";
import Link from "next/link";
import {Article} from "@/app/devnews/layout";

const PostNavBar = ({articles}: { articles: Article[];}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <DropdownNavBar/>
      <ol
        className="list-decimal list-outside space-y-4 py-4 marker:text-lg marker:font-bold [&>li]:text-gray-400 mx-5 [&>li]:text-gray-400">
        {articles.map((article) => (
          <li key={article.id}>
            <Link className={`hover:text-mypurple-100 ${activeId === article.id ? 'text-mypurple-100' : ''}`}
                  onClick={() => setActiveId(article.id)}
                  href={`/devnews/${article.id}`}>{article.title}</Link></li>
        ))}
      </ol>
    </div>
  );
};

export default PostNavBar;

const DropdownNavBar = () => {
  return (
    <>
      <select className={"text-white [&>option]:bg-myblack w-full border-gray-500/30 border-2 rounded-lg py-2"}>
        <option>2025년 4월</option>
        <option>2025년 3월</option>
        <option>2025년 2월</option>
        <option>2025년 1월</option>
      </select>
    </>
  );
}
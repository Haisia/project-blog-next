'use client'

import Link from "next/link";
import Image from "next/image";
import React from "react";

const SubNavBarContentsWithSubTitle = (
  {items}: { items: SubNavBarContentsWithSubTitleItem[] }
) => {
  const [selectedSubTitle, setSelectedSubTitle] = React.useState<string>("");

  const handleSubTitleClick = (subTitle: string) => {
    setSelectedSubTitle((prev) => (prev === subTitle ? "" : subTitle));
  };

  return (
    <>
      <ol
        className="list-decimal list-outside space-y-4 py-4 marker:text-lg marker:font-bold [&>li]:text-gray-400 mx-5">
        {items.map((content) => (
          <li key={content.category} className={"marker:size-[1.25rem] text-[1rem]"}>
            <div
              className={`hover:text-mypurple-100 hover:bg-neutral-700/90 p-2 rounded-lg hover:border-mypurple-100 border border-transparent flex  justify-between`}
              onClick={() => handleSubTitleClick(content.category)}
            >
              {content.category}
              {content.category === selectedSubTitle &&
                <Image src={"/icons/menu/arrow_right.svg"} alt={"arrow_right"} width={24} height={24}/>}
              {content.category !== selectedSubTitle &&
                <Image src={"/icons/menu/arrow_down.svg"} alt={"arrow_down"} width={24} height={24}/>}
            </div>
            <ol
              className="list-decimal list-outside marker:text-lg marker:font-bold marker:text-[1rem] [&>li]:text-gray-400">
              {content.category === selectedSubTitle && content.children.map((child) => (
                <div key={child.link} className={"list-inside border-l-2 px-3 hover:border-mypurple-300 text-[1rem]"}>
                  <li>
                    <Link className={`hover:text-mypurple-100 px-1`} href={child.link}>{child.title}</Link>
                  </li>
                </div>
              ))}
            </ol>

          </li>
        ))}
      </ol>
    </>
  )
}

export interface SubNavBarContentsWithSubTitleItem {
  category: string;
  children: Content[];
}

interface Content {
  title: string;
  link: string;
}

export default SubNavBarContentsWithSubTitle;
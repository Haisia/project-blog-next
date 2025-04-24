import Link from "next/link";
import React from "react";

const SubNavBarContents = ({items}:{items:SubNavBarContentsItem[]}) => {
  return (
    <>
      <ol
        className="list-decimal list-outside space-y-4 py-4 marker:text-lg marker:font-bold [&>li]:text-gray-400 mx-5">
        {items && items.map((item) => (
          <li key={item.title}>
            <Link
              className={`hover:text-mypurple-100`}
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}

export default SubNavBarContents;

export class SubNavBarContentsItem {
  constructor(
    public title: string,
    public link: string
  ) {}
}

export interface ToSubNavBarContentsItemsAble {
  toSubNavBarContentsItems(baseUrl: string): SubNavBarContentsItem[];
}

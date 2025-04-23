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
              // className={`hover:text-mypurple-100 ${activeDevNewsId === item.id ? "text-mypurple-100" : ""}`}
              className={`hover:text-mypurple-100`}
              // onClick={() => setActiveDevNewsId(item.id)}
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

export class SubNavBarContentsItem {
  constructor(
    public title: string,
    public link: string
  ) {}
}

export default SubNavBarContents;
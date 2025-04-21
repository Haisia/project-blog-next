'use client'

import React, {useEffect, useState} from "react";
import SubNavBarDropDown, {SubNavBarDropDownItem} from "@/app/projectlog/subNavBarDropDown";
import SubNavBarContentsWithSubTitle, {SubNavBarContentsWithSubTitleItem} from "@/components/subNavBarContentsWithSubTitle";

const SubNavBarWithSubTitle = () => {
  const [dropDownSelectedProjectId, setDropDownSelectedProjectId] = useState<string>("");
  const [subNavBarContentsItems, setSubNavBarContentsItems] = useState<SubNavBarContentsWithSubTitleItem[]>([]);
  const [subNavBarDropDownItems, setSubNavBarDropDownItems] = useState<SubNavBarDropDownItem[]>([]);

  useEffect(() => {
    const initDropDownItems = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/projectlog/all`);
      const {projects}: { projects: Project[] } = await res.json();
      const transformed: SubNavBarDropDownItem[] = projects.map((project) => ({content: project.title, value: project.id}));
      setDropDownSelectedProjectId(transformed[0].value.toString());
      setSubNavBarDropDownItems(transformed);
    }

    initDropDownItems();
  }, []);

  useEffect(() => {
    const syncSubNavBarContents = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/projectlog/all`);
      let {projects}: { projects: Project[] } = await res.json();

      projects = projects.filter((project) => project.id === parseInt(dropDownSelectedProjectId));
      const transformed: SubNavBarContentsWithSubTitleItem[] = projects.flatMap((project) =>
        (project.categories ?? []).map((category) => ({
          category: category.title,
          children: (category.posts ?? []).map((post) => ({
            title: post.title,
            link: `/projectlog/${post.id}`,
          })),
        }))
      );

      setSubNavBarContentsItems(transformed);
    };

    syncSubNavBarContents();
  }, [dropDownSelectedProjectId]);

  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <SubNavBarDropDown valueSetter={setDropDownSelectedProjectId} items={subNavBarDropDownItems}/>
      <SubNavBarContentsWithSubTitle items={subNavBarContentsItems}/>
    </div>
  );
};

export default SubNavBarWithSubTitle;

interface Project {
  id: number;
  title: string;
  categories?: Category[];
}

interface Category {
  id: number;
  title: string;
  posts?: Post[];
}

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}




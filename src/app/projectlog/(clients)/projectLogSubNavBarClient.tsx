'use client';

import { useEffect, useState } from "react";
import { SubNavBarDropDownItem } from "@/components/subNavBarDropDown";
import { SubNavBarContentsWithSubTitleItem } from "@/components/subNavBarContentsWithSubTitle";
import SubNavBarWithSubTitle from "@/components/subNavBarWithSubTitle";
import {Project} from "@/api/fetchProjectLog";
import Link from "next/link";

const ProjectLogSubNavBarClient = ({ projects }: { projects: Project[] }) => {
  const [dropDownSelectedProjectId, setDropDownSelectedProjectId] = useState<string>("");
  const [subNavBarContentsItems, setSubNavBarContentsItems] = useState<SubNavBarContentsWithSubTitleItem[]>([]);
  const [subNavBarDropDownItems, setSubNavBarDropDownItems] = useState<SubNavBarDropDownItem[]>([]);

  useEffect(() => {
    const transformed = projects.map((project) => ({
      content: project.title,
      value: project.id.toString(),
    }));
    setDropDownSelectedProjectId(transformed[0]?.value ?? "");
    setSubNavBarDropDownItems(transformed);
  }, [projects]);

  useEffect(() => {
    const selectedProject = projects.find((p) => p.id === parseInt(dropDownSelectedProjectId));
    if (!selectedProject) return;

    const transformed: SubNavBarContentsWithSubTitleItem[] = (selectedProject.categories ?? []).map((category) => ({
      category: category.title,
      children: (category.posts ?? []).map((post) => ({
        title: post.title,
        link: `/projectlog/${post.id}`,
      })),
    }));

    setSubNavBarContentsItems(transformed);
  }, [dropDownSelectedProjectId, projects]);

  return (
    <SubNavBarWithSubTitle
      preLi={<PreLi href={`/projectlog?projectId=${dropDownSelectedProjectId}`}/>}
      selectedDropDownValueSetter={setDropDownSelectedProjectId}
      subNavBarContentsItems={subNavBarContentsItems}
      subNavBarDropDownItems={subNavBarDropDownItems}
    />
  );
};

const PreLi = ({href}:{href:string}) => {
  return (
    <>
      <li className={"marker:size-[1.25rem] text-[1rem]"}>
        <Link className={`hover:text-mypurple-100 hover:bg-neutral-700/90 p-2 rounded-lg hover:border-mypurple-100 border border-transparent flex  justify-between`} 
              href={href}>
          프로젝트 개요
        </Link>
      </li>
    </>
  )
}

export default ProjectLogSubNavBarClient;

'use client';

import { useEffect, useState } from "react";
import { SubNavBarDropDownItem } from "@/components/subNavBarDropDown";
import { SubNavBarContentsWithSubTitleItem } from "@/components/subNavBarContentsWithSubTitle";
import SubNavBarWithSubTitle from "@/components/subNavBarWithSubTitle";
import { Project } from "@/types/Project";

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
      selectedDropDownValueSetter={setDropDownSelectedProjectId}
      subNavBarContentsItems={subNavBarContentsItems}
      subNavBarDropDownItems={subNavBarDropDownItems}
    />
  );
};

export default ProjectLogSubNavBarClient;

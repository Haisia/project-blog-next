'use client';

import {useMemo} from "react";
import SubNavBarWithSubTitle from "@/components/subNavBarWithSubTitle";
import Link from "next/link";
import useSubNavBarWithSubTitle from "@/hooks/useSubNavBarWithSubTitle";
import {ProjectLog, ProjectLogDto} from "@/types/projectlog/ProjectLog";

const baseUrl = "/projectlog";

const ProjectLogSubNavBarClient = ({ projects }: { projects: ProjectLogDto[] }) => {
  const projectInstances
    = useMemo(() => projects.map(ProjectLog.fromObject), [projects]);

  const {selectedId,setSelectedId, dropDownItems, contentItems } = useSubNavBarWithSubTitle(projectInstances, baseUrl);

  return (
    <SubNavBarWithSubTitle
      preLi={<PreLi href={`/projectlog?projectId=${selectedId}`}/>}
      selectedIdSetter={setSelectedId}
      contentsItems={contentItems}
      dropDownItems={dropDownItems}
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

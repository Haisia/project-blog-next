'use client';

import {useMemo} from "react";
import SubNavBarWithSubTitle from "@/components/subNavBarWithSubTitle";
import Link from "next/link";
import useSubNavBarWithSubTitle from "@/hooks/useSubNavBarWithSubTitle";
import {ProjectLog, ProjectLogDto} from "@/types/projectlog/ProjectLog";
import {Troubleshooting, TroubleshootingDto} from "@/types/troubleshooting/Troubleshooting";

const baseUrl = "/troubleshooting";

const TroubleshootingSubNavBarClient =
  ({ troubleshootings }: { troubleshootings: TroubleshootingDto[] }) => {
  const troubleshootingInstances
    = useMemo(() => troubleshootings.map(Troubleshooting.fromObject), [troubleshootings]);

  const {selectedId,setSelectedId, dropDownItems, contentItems } = useSubNavBarWithSubTitle(troubleshootingInstances, baseUrl);

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

export default TroubleshootingSubNavBarClient;

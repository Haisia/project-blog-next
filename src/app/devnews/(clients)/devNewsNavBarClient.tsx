'use client';

import React, {useMemo} from "react";
import SubNavBarDropDown from "@/components/subNavBarDropDown";
import SubNavBarContents from "@/components/subNavBarContents";
import {DevNews, DevNewsDto} from "@/types/devnews/DevNews";
import {useSubNavBar} from "@/hooks/useSubNavBar";
import {DevNewsesGroupedByYearMonth} from "@/types/devnews/DevNewsesGroupedByYearMonth";

const baseUrl = "/devnews";

const DevNewsNavBarClient = ({ devNewses }: { devNewses: DevNewsDto[] }) => {
  const devNewsesInstances = useMemo(() => devNewses.map(DevNews.fromObject), [devNewses]);
  const groupedDevNewses
    = useMemo(() => DevNewsesGroupedByYearMonth.fromDevNewses(devNewsesInstances),[devNewsesInstances])

  const {setSelectedId, dropDownItems, contentItems } = useSubNavBar(groupedDevNewses, baseUrl);

  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <SubNavBarDropDown valueSetter={setSelectedId} items={dropDownItems} />
      <SubNavBarContents items={contentItems} />
    </div>
  );
};

export default DevNewsNavBarClient;

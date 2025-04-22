'use client';

import React, { useEffect, useState } from "react";
import { DevNews } from "@/types/DevNewsesResponse";
import SubNavBarDropDown, { SubNavBarDropDownItem } from "@/components/subNavBarDropDown";
import SubNavBarContents, { SubNavBarContentsItem } from "@/components/subNavBarContents";

const DevNewsNevBarClient = ({ devNews }: { devNews: DevNews[] }) => {
  const [groupedAllDevNews, setGroupedAllDevNews] = useState<Record<string, DevNews[]>>({});
  const [selectedYearMonth, setSelectedYearMonth] = useState<string>("");
  const [subNavBarContentsItems, setSubNavBarContentsItems] = useState<SubNavBarContentsItem[]>([]);
  const [subNavBarDropDownItems, setSubNavBarDropDownItems] = useState<SubNavBarDropDownItem[]>([]);

  useEffect(() => {
    const grouped = devNewsResponseGroupByYearMonth(devNews);
    setGroupedAllDevNews(grouped);

    const firstKey = Object.keys(grouped)[0];
    setSelectedYearMonth(firstKey);
    setSubNavBarContentsItems(convertDevNewsToSubNavBarContentsItem(grouped[firstKey]));
    setSubNavBarDropDownItems(Object.keys(grouped).map((key) => ({
      content: key,
      value: key,
    })));
  }, [devNews]);

  useEffect(() => {
    const current = groupedAllDevNews[selectedYearMonth];
    setSubNavBarContentsItems(convertDevNewsToSubNavBarContentsItem(current));
  }, [selectedYearMonth, groupedAllDevNews]);

  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <SubNavBarDropDown valueSetter={setSelectedYearMonth} items={subNavBarDropDownItems} />
      <SubNavBarContents items={subNavBarContentsItems} />
    </div>
  );
};

export default DevNewsNevBarClient;

const devNewsResponseGroupByYearMonth = (devNewses: DevNews[]) => {
  const grouped: Record<string, DevNews[]> = {};
  devNewses.forEach((devNews) => {
    const date = new Date(devNews.createdAt);
    const key = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(devNews);
  });

  return Object.keys(grouped)
    .sort((a, b) => b.localeCompare(a))
    .reduce((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {} as Record<string, DevNews[]>);
};

const convertDevNewsToSubNavBarContentsItem = (devNewses?: DevNews[]) => {
  if (!Array.isArray(devNewses)) return [];
  return devNewses.map((devNews) => ({
    title: devNews.contentData.title,
    link: `/devnews/${devNews.id}`,
  }));
};

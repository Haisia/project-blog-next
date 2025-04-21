'use client';

import React, {useEffect, useState} from "react";
import Link from "next/link";
import DevNewsDropdownNavBar from "./devNewsDropdownNavBar";
import {fetchAllDevNews} from "@/api/fetchDevNews";
import {DevNews, DevNewsResponse, devNewsResponseGroupByYearMonth} from "@/types/DevNewsesResponse";

const DevNewsNevBar = () => {
  // 전체목록 그룹화
  const [groupedDevNews, setGroupedDevNews] = useState<Record<string,DevNews[]>>({});
  // 선택된 yearMonth
  const [selectedYearMonth, setSelectedYearMonth] = useState<string>("");
  // 선택된 yearMonth에 해당하는 devNews 전체목록
  const [devNewses, setDevNewses] = useState<DevNews[]>([]);
  // 선택된 게시글
  const [activeDevNewsId, setActiveDevNewsId] = useState<number | null>(null);


  useEffect(() => {
    const init = async () => {
      const allDevNewsResponse: DevNewsResponse = await fetchAllDevNews();
      const grouped = devNewsResponseGroupByYearMonth(allDevNewsResponse);

      setGroupedDevNews(grouped);

      const firstKey = Object.keys(grouped)[0];
      setSelectedYearMonth(firstKey);
      setDevNewses(grouped[firstKey]);
    }

    init();
  }, []);

  useEffect(() => {
    const syncDevNewses = async () => {
      setDevNewses(groupedDevNews[selectedYearMonth])
    }
    syncDevNewses();
  }, [selectedYearMonth])

  const handleOnChangeSelectedYearMonth = (value: string) => {
    setSelectedYearMonth(value);
  };

  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <DevNewsDropdownNavBar
        selectedYearMonth={selectedYearMonth}
        onChangeHandler={handleOnChangeSelectedYearMonth}
        groupedDevNews={groupedDevNews}
      />
      <ol
        className="list-decimal list-outside space-y-4 py-4 marker:text-lg marker:font-bold [&>li]:text-gray-400 mx-5">
        {devNewses && devNewses.map((devNews) => (
          <li key={devNews.id}>
            <Link
              className={`hover:text-mypurple-100 ${activeDevNewsId === devNews.id ? "text-mypurple-100" : ""}`}
              onClick={() => setActiveDevNewsId(devNews.id)}
              href={`/devnews/${devNews.id}`}
            >
              {devNews.contentData.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DevNewsNevBar;

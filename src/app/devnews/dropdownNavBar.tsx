"use client";

import React from "react";
import {DevNews} from "@/types/DevNewsesResponse";

const DropdownNavBar = (
  {
    selectedYearMonth,
    onChangeHandler,
    groupedDevNews,
  }: {
    selectedYearMonth: string;
    onChangeHandler: (value: string) => void;
    groupedDevNews: Record<string, DevNews[]>;
  }) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeHandler(e.target.value);
  };

  return (
    <select
      className="text-white [&>option]:bg-myblack w-full border-gray-500/30 border-2 rounded-lg py-2"
      value={selectedYearMonth}
      onChange={handleChange}
    >
      {Object.keys(groupedDevNews).map((yearMonth) => {
        return (
          <option key={yearMonth} value={yearMonth}>
            {yearMonth}
          </option>
        );
      })}
    </select>
  );
};

export default DropdownNavBar;

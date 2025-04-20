"use client";

import React, { useEffect, useState } from "react";

export interface YearMonth {
  year: string;
  month: string;
}

const DropdownNavBar = () => {
  const [yearMonths, setYearMonths] = useState<YearMonth[]>([]);

  useEffect(() => {
    const fetchYearMonths = async () => {
      const response = await fetch("http://localhost:8080/api/blog/devnews/all/year-month");
      const data = await response.json();
      const { allUniqueYearMonth }: { allUniqueYearMonth: YearMonth[] } = data;

      setYearMonths(allUniqueYearMonth);
    };

    fetchYearMonths();
  }, []);

  return (
    <select className="text-white [&>option]:bg-myblack w-full border-gray-500/30 border-2 rounded-lg py-2">
      {yearMonths.map((yearMonth) => (
        <option key={yearMonth.year + yearMonth.month} value={yearMonth.year + yearMonth.month}>
          {yearMonth.year}년 {yearMonth.month}월
        </option>
      ))}
    </select>
  );
};

export default DropdownNavBar;

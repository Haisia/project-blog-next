"use client";

import React, { useEffect, useState } from "react";

export interface YearMonth {
  year: string;
  month: string;
}

const DropdownNavBar = ({ onChangeHandler }: { onChangeHandler: (value: string) => void }) => {
  const [yearMonths, setYearMonths] = useState<YearMonth[]>([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const fetchYearMonths = async () => {
      const response = await fetch("http://localhost:8080/api/blog/devnews/all/year-month");
      const data = await response.json();
      const { allUniqueYearMonth }: { allUniqueYearMonth: YearMonth[] } = data;

      allUniqueYearMonth.sort((a, b) => {
        if (Number(a.year) === Number(b.year)) return Number(b.month) - Number(a.month);
        return Number(b.year) - Number(a.year);
      });

      setYearMonths(allUniqueYearMonth);

      // 초기 선택값 설정
      if (allUniqueYearMonth.length > 0) {
        const initialValue = allUniqueYearMonth[0].year + allUniqueYearMonth[0].month;
        setSelectedValue(initialValue);
        onChangeHandler(initialValue); // 초기값 핸들러 호출
      }
    };

    fetchYearMonths();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    onChangeHandler(e.target.value);
  };

  return (
    <select
      className="text-white [&>option]:bg-myblack w-full border-gray-500/30 border-2 rounded-lg py-2"
      value={selectedValue}
      onChange={handleChange}
    >
      {yearMonths.map((yearMonth) => {
        const value = yearMonth.year + yearMonth.month;
        return (
          <option key={value} value={value}>
            {yearMonth.year}년 {yearMonth.month}월
          </option>
        );
      })}
    </select>
  );
};

export default DropdownNavBar;

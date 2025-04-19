"use client"

import {useState} from "react";
import Image from "next/image";

const SearchBar = () => {
  const [onFocus, setOnFocus] = useState(false);

  const handleOnFocus = () => {
    setOnFocus(true);
  }

  const handleOnBlur = () => {
    setOnFocus(false);
  }

  return (
    <>
      <div className={
        `flex w-80 h-full `
        + `border ${onFocus ? "border-mypurple-100" : "border-gray-500/30"} rounded-md `
        + `items-center`
      }>
        <div className={"relative w-5 h-5 m-2"}>
          <Image src={"/icons/search.svg"} alt={"Search icon"} className={"object-contain"} fill/>
        </div>
        <input
          className={"w-full h-full outline-none"}
          placeholder={"통합검색"}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
      </div>
    </>
  );
}

export default SearchBar;
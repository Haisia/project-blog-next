'use client'

import React from 'react';
import Image from "next/image";

const ScrollTop = () => {
  return (
    <button
      className="fixed bottom-30 right-40 w-16 h-16 rounded-full bg-mypurple-200 text-white flex items-center justify-center shadow-lg cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Image src="/icons/scrolltop.svg" alt="scrolltop" width={40} height={40} />
    </button>
  );
};

export default ScrollTop;
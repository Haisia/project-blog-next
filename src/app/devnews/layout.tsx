import React, { ReactNode } from "react";
import PostNavBar from "@/app/devnews/postNavBar";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      <PostNavBar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;

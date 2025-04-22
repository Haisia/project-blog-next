import React, { ReactNode } from "react";
import DevNewsNavBar from "@/app/devnews/devNewsNavBar";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      <DevNewsNavBar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;

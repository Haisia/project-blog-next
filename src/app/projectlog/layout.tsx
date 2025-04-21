import React, { ReactNode } from "react";
import SubNavBarWithSubTitle from "@/app/projectlog/subNavBarWithSubTitle";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      <SubNavBarWithSubTitle/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;

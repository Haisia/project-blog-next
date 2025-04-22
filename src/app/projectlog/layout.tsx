import React, { ReactNode } from "react";
import ProjectLogSubNavBar from "@/app/projectlog/projectLogSubNavBar";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      <ProjectLogSubNavBar/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;

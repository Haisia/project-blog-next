import React, { ReactNode } from "react";
import ProjectLogNevBar from "@/app/projectlog/projectLogNevBar";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      <ProjectLogNevBar/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;

import React, { ReactNode } from "react";
import DevNewsNevBar from "@/app/devnews/devNewsNevBar";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      <DevNewsNevBar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;

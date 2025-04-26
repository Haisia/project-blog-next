import React, {ReactNode} from 'react';
import DevToolNavBar from "@/app/devtool/devToolNavBar";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      <DevToolNavBar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
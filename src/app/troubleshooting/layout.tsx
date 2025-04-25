import React, {ReactNode} from "react";
import TroubleshootingSubNavBar from "@/app/troubleshooting/troubleshootingSubNavBar";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      <TroubleshootingSubNavBar/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;

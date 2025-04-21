import React, { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      {/*<PostNavBar />*/}
      <div>fsdffs</div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;

import React, {ReactNode} from "react";

const Layout = async (
  {
    children,
  }: Readonly<{
    children: ReactNode;
  }>) => {

  return (
    <div className="flex flex-1 items-stretch">
      <PostNavBar/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

const PostNavBar = () => {
  return (
    <div className="w-[120px] border-r border-gray-500/30">
      <div className="p-4">postNavBar</div>
      <div className="p-4">test</div>
    </div>
  );
};
export default Layout;
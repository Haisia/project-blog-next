import React, {ReactNode} from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const Layout = async (
  {
    children,
  }: Readonly<{
    params: Promise<{id: number}>,
    children: ReactNode;
  }>) => {

  return (
    <>
      <Breadcrumbs contents={["devnews", "projectlog"]}/>
      <div>{children}</div>
    </>
  );
}

export default Layout;
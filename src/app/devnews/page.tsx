import React from 'react';
import Breadcrumbs from "@/components/Breadcrumbs";

const Page = () => {
  return (
    <>
      <Breadcrumbs contents={["devnews", "projectlog"]}/>
      <h1>projectlog</h1>
    </>
  );
}

export default Page;
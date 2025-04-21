
import React from "react";
import Link from "next/link";
import ProjectLogDropdownNavBar from "@/app/projectlog/projectLogDropdownNavBar";

const ProjectLogNevBar = () => {



  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <ProjectLogDropdownNavBar/>
      <ol className="list-decimal list-outside space-y-4 py-4 marker:text-lg marker:font-bold [&>li]:text-gray-400 mx-5">
        <li><Link className={`hover:text-mypurple-100`} href={`#`}>dfdf1</Link></li>
        <li><Link className={`hover:text-mypurple-100`} href={`#`}>dfdf1</Link></li>
        <li><Link className={`hover:text-mypurple-100`} href={`#`}>dfdf1</Link></li>
        <li><Link className={`hover:text-mypurple-100`} href={`#`}>dfdf1</Link></li>
        <li><Link className={`hover:text-mypurple-100`} href={`#`}>dfdf1</Link></li>
      </ol>
    </div>
  );
};

export default ProjectLogNevBar;

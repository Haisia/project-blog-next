import React from 'react';

type BreadcrumbsProps = {
  contents: string[];
};

const Breadcrumbs = ({ contents }: BreadcrumbsProps) => {
  const joinedBreadcrumbs = contents.join(" > ");

  return (
    <div className={"text-[12px] text-gray-500/80"}>{joinedBreadcrumbs}</div>
  );
};

export default Breadcrumbs;
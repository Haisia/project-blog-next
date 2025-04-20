import React from 'react';

type BreadcrumbsProps = {
  contents: string[];
};

const Breadcrumbs = ({ contents }: BreadcrumbsProps) => {
  const joinedBreadcrumbs = contents.join(" > ");

  return (
    <div>{joinedBreadcrumbs}</div>
  );
};

export default Breadcrumbs;
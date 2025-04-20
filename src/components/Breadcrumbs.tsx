import React from 'react';

const Breadcrumbs = (contents:string[]) => {
  const joinedBreadcrumbs = contents.join(" > ");

  return (
    <>
      <div>{joinedBreadcrumbs}</div>
    </>
  );
}

export default Breadcrumbs;
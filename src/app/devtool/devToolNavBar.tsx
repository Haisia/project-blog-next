import React from 'react';
import DevToolNavBarClient from "@/app/devtool/(clients)/devToolNavBarClient";
import {devToolCategories} from "@/data/DevToolData";

const StudyNoteNavBar = async () => {
  const categories = devToolCategories;
  return (
    <>
      <DevToolNavBarClient categories={categories} />
    </>
  );
};

export default StudyNoteNavBar;
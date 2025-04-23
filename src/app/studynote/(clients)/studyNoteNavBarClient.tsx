'use client';

import React, {useMemo} from "react";
import SubNavBarDropDown from "@/components/subNavBarDropDown";
import SubNavBarContents from "@/components/subNavBarContents";
import {StudyNoteCategory, StudyNoteCategoryDto} from "@/types/studynote/StudyNoteCategory";
import {useSubNavBar} from "@/hooks/useSubNavBar";

const baseUrl = "/studynote";

const StudyNoteNavBarClient = ({categories}: { categories: StudyNoteCategoryDto[] }) => {
  const categoryInstances
    = useMemo(() => categories.map(StudyNoteCategory.fromObject), [categories]);

  const {setSelectedId, dropDownItems, contentItems } = useSubNavBar(categoryInstances, baseUrl);

  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <SubNavBarDropDown valueSetter={setSelectedId} items={dropDownItems}/>
      <SubNavBarContents items={contentItems}/>
    </div>
  );
};

export default StudyNoteNavBarClient;

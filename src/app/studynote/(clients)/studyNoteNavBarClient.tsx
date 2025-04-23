'use client';

import React, {useEffect, useMemo, useState} from "react";
import SubNavBarDropDown, {SubNavBarDropDownItem} from "@/components/subNavBarDropDown";
import SubNavBarContents, {SubNavBarContentsItem} from "@/components/subNavBarContents";
import {StudyNoteCategory, StudyNoteCategoryDto} from "@/types/studynote/StudyNoteCategory";

const baseUrl = "/studynote";

const StudyNoteNavBarClient = ({categories}: { categories: StudyNoteCategoryDto[] }) => {
  const categoryInstances = useMemo(() => {
    return categories?.map(StudyNoteCategory.fromObject) ?? [];
  }, [categories]);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    categories?.[0]?.id?.toString?.() ?? ""
  );
  const [dropDownItems, setDropDownItems] = useState<SubNavBarDropDownItem[]>([]);
  const [contentItems, setContentItems] = useState<SubNavBarContentsItem[]>([]);

  useEffect(() => {
    const createdDropdownItems
      = categoryInstances.map(category => category.toSubNavBarDropDownItem());
    setDropDownItems(createdDropdownItems);

    setSelectedCategoryId(categories[0].id.toString());

    const createdContentsItems = categoryInstances[0].toSubNavBarContentsItem(baseUrl);
    setContentItems(createdContentsItems);
  }, [categories, categoryInstances]);

  useEffect(() => {
    const matched
      = categoryInstances.find(category => category.id.toString() === selectedCategoryId);
    if (!matched) return;

    const createdContentsItems = matched.toSubNavBarContentsItem(baseUrl);
    setContentItems(createdContentsItems);
  }, [categoryInstances, selectedCategoryId]);

  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <SubNavBarDropDown valueSetter={setSelectedCategoryId} items={dropDownItems}/>
      <SubNavBarContents items={contentItems}/>
    </div>
  );
};

export default StudyNoteNavBarClient;

import React from "react";
import SubNavBarDropDown, {SubNavBarDropDownItem} from "@/components/subNavBarDropDown";
import SubNavBarContentsWithSubTitle, {
  SubNavBarContentsWithSubTitleItem
} from "@/components/subNavBarContentsWithSubTitle";

const SubNavBarWithSubTitle = (
  {
    preLi,
    selectedIdSetter,
    dropDownItems,
    contentsItems
  } : {
    preLi?: React.ReactNode;
    selectedIdSetter : (value: string) => void;
    dropDownItems : SubNavBarDropDownItem[];
    contentsItems : SubNavBarContentsWithSubTitleItem[];
  }
) => {
  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <SubNavBarDropDown
        valueSetter={selectedIdSetter}
        items={dropDownItems}
      />
      <SubNavBarContentsWithSubTitle
        preLi={preLi}
        items={contentsItems}
      />
    </div>
  );
};

export default SubNavBarWithSubTitle;





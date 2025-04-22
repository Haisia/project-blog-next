import React from "react";
import SubNavBarDropDown, {SubNavBarDropDownItem} from "@/components/subNavBarDropDown";
import SubNavBarContentsWithSubTitle, {
  SubNavBarContentsWithSubTitleItem
} from "@/components/subNavBarContentsWithSubTitle";

const SubNavBarWithSubTitle = (
  {
    preLi,
    selectedDropDownValueSetter,
    subNavBarDropDownItems,
    subNavBarContentsItems
  } : {
    preLi?: React.ReactNode;
    selectedDropDownValueSetter : (value: string) => void;
    subNavBarDropDownItems : SubNavBarDropDownItem[];
    subNavBarContentsItems : SubNavBarContentsWithSubTitleItem[];
  }
) => {
  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <SubNavBarDropDown
        valueSetter={selectedDropDownValueSetter}
        items={subNavBarDropDownItems}
      />
      <SubNavBarContentsWithSubTitle
        preLi={preLi}
        items={subNavBarContentsItems}
      />
    </div>
  );
};

export default SubNavBarWithSubTitle;





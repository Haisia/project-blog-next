import {useEffect, useState} from 'react';
import {
  SubNavBarContentsWithSubTitleItem,
  ToSubNavBarContentsWithSubTitleItemAble
} from "@/components/subNavBarContentsWithSubTitle";
import {SubNavBarDropDownItem, ToSubNavBarDropDownItemAble} from "@/components/subNavBarDropDown";

const useSubNavBarWithSubTitle = (
  items: (ToSubNavBarContentsWithSubTitleItemAble & ToSubNavBarDropDownItemAble)[],
  baseUrl: string
) => {
  const [selectedId, setSelectedId] = useState<string>("");
  const [dropDownItems, setDropDownItems] = useState<SubNavBarDropDownItem[]>([]);
  const [contentItems, setContentItems] = useState<SubNavBarContentsWithSubTitleItem[]>([]);

  useEffect(() => {
    if (!items.length) return;

    setDropDownItems(items.map(item => item.toSubNavBarDropDownItem()));
    setSelectedId(items[0].toSubNavBarDropDownItem().value);
    setContentItems(items[0].toSubNavBarContentsWithSubTitleItem(baseUrl));
  }, []);

  useEffect(() => {
    const matched = items.find(item => item.toSubNavBarDropDownItem().value === selectedId);
    if (matched) {
      setContentItems(matched.toSubNavBarContentsWithSubTitleItem(baseUrl));
    }
  }, [selectedId, items]);

  return {
    selectedId,
    setSelectedId,
    dropDownItems,
    contentItems
  };
};

export default useSubNavBarWithSubTitle;
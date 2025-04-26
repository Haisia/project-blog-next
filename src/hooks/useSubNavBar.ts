import {SubNavBarContentsItem, ToSubNavBarContentsItemsAble} from "@/components/subNavBarContents";
import {SubNavBarDropDownItem, ToSubNavBarDropDownItemAble} from "@/components/subNavBarDropDown";
import {useEffect, useState} from "react";

export const useSubNavBar = (
  items: (ToSubNavBarContentsItemsAble & ToSubNavBarDropDownItemAble)[],
  baseUrl: string
) => {
  const [selectedId, setSelectedId] = useState<string>("");
  const [dropDownItems, setDropDownItems] = useState<SubNavBarDropDownItem[]>([]);
  const [contentItems, setContentItems] = useState<SubNavBarContentsItem[]>([]);

  useEffect(() => {
    if (!items.length) return;

    setDropDownItems(items.map(item => item.toSubNavBarDropDownItem()));
    setSelectedId(items[0].toSubNavBarDropDownItem().value);
    setContentItems(items[0].toSubNavBarContentsItems(baseUrl));
    console.log('#### 1');
  }, [baseUrl, items]);

  useEffect(() => {
    const matched = items.find(item => item.toSubNavBarDropDownItem().value === selectedId);
    if (matched) {
      setContentItems(matched.toSubNavBarContentsItems(baseUrl));
    }
    console.log('#### 2');
  }, [baseUrl, items, selectedId]);

  return {
    selectedId,
    setSelectedId,
    dropDownItems,
    contentItems
  };
};

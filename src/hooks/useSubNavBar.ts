import {SubNavBarContentsItem, toSubNavBarContentsItemAble} from "@/components/subNavBarContents";
import {SubNavBarDropDownItem, toSubNavBarDropDownItemAble} from "@/components/subNavBarDropDown";
import {useEffect, useState} from "react";

export const useSubNavBar = (
  items: (toSubNavBarContentsItemAble & toSubNavBarDropDownItemAble)[],
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
  }, [items]);

  useEffect(() => {
    const matched = items.find(item => item.toSubNavBarDropDownItem().value === selectedId);
    if (matched) {
      setContentItems(matched.toSubNavBarContentsItems(baseUrl));
    }
  }, [selectedId, items]);

  return {
    selectedId,
    setSelectedId,
    dropDownItems,
    contentItems
  };
};

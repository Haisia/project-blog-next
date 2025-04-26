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

    const dropdowns = items.map(item => item.toSubNavBarDropDownItem());
    setDropDownItems(dropdowns);

    const matched = items.find(item => item.toSubNavBarDropDownItem().value === selectedId);

    if (matched) {
      setContentItems(matched.toSubNavBarContentsItems(baseUrl));
    } else {
      const defaultId = dropdowns[0]?.value;
      if (defaultId) {
        setSelectedId(defaultId);
        setContentItems(items[0].toSubNavBarContentsItems(baseUrl));
      }
    }
  }, [baseUrl, items]);

  useEffect(() => {
    const matched = items.find(item => item.toSubNavBarDropDownItem().value === selectedId);
    if (matched) {
      setContentItems(matched.toSubNavBarContentsItems(baseUrl));
    }
  }, [selectedId]);

  return {
    selectedId,
    setSelectedId,
    dropDownItems,
    contentItems
  };
};

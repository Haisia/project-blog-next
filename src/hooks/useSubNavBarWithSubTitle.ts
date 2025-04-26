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

    const dropdowns = items.map(item => item.toSubNavBarDropDownItem());
    setDropDownItems(dropdowns);

    const matched = items.find(item => item.toSubNavBarDropDownItem().value === selectedId);

    if (matched) {
      setContentItems(matched.toSubNavBarContentsWithSubTitleItem(baseUrl));
    } else {
      const defaultId = dropdowns[0]?.value;
      if (defaultId) {
        setSelectedId(defaultId);
        setContentItems(items[0].toSubNavBarContentsWithSubTitleItem(baseUrl));
      }
    }
  }, [items, baseUrl]);

  useEffect(() => {
    const matched = items.find(item => item.toSubNavBarDropDownItem().value === selectedId);
    if (matched) {
      setContentItems(matched.toSubNavBarContentsWithSubTitleItem(baseUrl));
    }
  }, [selectedId]);

  return {
    selectedId,
    setSelectedId,
    dropDownItems,
    contentItems
  };
};

export default useSubNavBarWithSubTitle;

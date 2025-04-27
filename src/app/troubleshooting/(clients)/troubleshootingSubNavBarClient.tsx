'use client';

import {useMemo} from "react";
import SubNavBarWithSubTitle from "@/components/subNavBarWithSubTitle";
import useSubNavBarWithSubTitle from "@/hooks/useSubNavBarWithSubTitle";
import {Troubleshooting, TroubleshootingDto} from "@/types/troubleshooting/Troubleshooting";

const baseUrl = "/troubleshooting";

const TroubleshootingSubNavBarClient =
  ({ troubleshootings }: { troubleshootings: TroubleshootingDto[] }) => {
  const troubleshootingInstances
    = useMemo(() => troubleshootings.map(Troubleshooting.fromObject), [troubleshootings]);

  const {setSelectedId, dropDownItems, contentItems } = useSubNavBarWithSubTitle(troubleshootingInstances, baseUrl);

  return (
    <SubNavBarWithSubTitle
      selectedIdSetter={setSelectedId}
      contentsItems={contentItems}
      dropDownItems={dropDownItems}
    />
  );
};

export default TroubleshootingSubNavBarClient;

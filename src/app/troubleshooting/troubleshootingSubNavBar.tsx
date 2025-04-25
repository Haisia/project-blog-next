import {fetchAllTroubleshootingPosts} from "@/api/fetchTroubleshooting";
import {Troubleshooting} from "@/types/troubleshooting/Troubleshooting";
import TroubleshootingSubNavBarClient from "@/app/troubleshooting/(clients)/troubleshootingSubNavBarClient";

const TroubleshootingSubNavBar = async () => {
  const response = await fetchAllTroubleshootingPosts();
  const troubleshootings = response.troubleshootings.map(Troubleshooting.fromObject);
  return (
    <TroubleshootingSubNavBarClient troubleshootings={troubleshootings.map(t => t.toObject())}/>
  );
};

export default TroubleshootingSubNavBar;
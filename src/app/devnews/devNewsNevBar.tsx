import { fetchAllDevNews } from "@/api/fetchDevNews";
import DevNewsNevBarClient from "@/app/devnews/(clients)/devNewsNevBarClient";

const DevNewsNevBar = async () => {
  const devNews = await fetchAllDevNews();
  return <DevNewsNevBarClient devNews={devNews} />;
};

export default DevNewsNevBar;
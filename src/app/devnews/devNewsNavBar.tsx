import { fetchAllDevNews } from "@/api/fetchDevNews";
import DevNewsNavBarClient from "@/app/devnews/(clients)/devNewsNavBarClient";

const DevNewsNavBar = async () => {
  const devNews = await fetchAllDevNews();
  return <DevNewsNavBarClient devNewses={devNews} />;
};

export default DevNewsNavBar;
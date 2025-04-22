import { fetchAllDevNews } from "@/api/fetchDevNews";
import DevNewsNavBarClient from "@/app/devnews/(clients)/devNewsNavBarClient";

const DevNewsNavBar = async () => {
  const devNews = await fetchAllDevNews();
  return <DevNewsNavBarClient devNews={devNews} />;
};

export default DevNewsNavBar;
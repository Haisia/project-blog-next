import { fetchAllProjectLog } from "@/api/fetchProjectLog";
import ProjectLogSubNavBarClient from "@/app/projectlog/(clients)/projectLogSubNavBarClient";

const ProjectLogSubNavBarWrapper = async () => {
  const projects = await fetchAllProjectLog();
  return <ProjectLogSubNavBarClient projects={projects} />;
};

export default ProjectLogSubNavBarWrapper;

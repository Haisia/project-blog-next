import { fetchAllProjectLog } from "@/api/fetchProjectLog";
import ProjectLogSubNavBarClient from "@/app/projectlog/(clients)/projectLogSubNavBarClient";

const ProjectLogSubNavBar = async () => {
  const projects = await fetchAllProjectLog();
  return <ProjectLogSubNavBarClient projects={projects} />;
};

export default ProjectLogSubNavBar;

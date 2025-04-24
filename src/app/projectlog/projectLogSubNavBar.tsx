import {fetchAllProjectLog} from "@/api/fetchProjectLog";
import ProjectLogSubNavBarClient from "@/app/projectlog/(clients)/projectLogSubNavBarClient";
import {ProjectLog} from "@/types/projectlog/ProjectLog";

const ProjectLogSubNavBar = async () => {
  const projects = await fetchAllProjectLog();
  const projectLogs = projects.map(ProjectLog.fromObject);
  return <ProjectLogSubNavBarClient projects={projectLogs.map(projectLog => projectLog.toObject())} />;
};

export default ProjectLogSubNavBar;

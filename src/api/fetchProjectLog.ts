import {Project} from "@/types/Project";

const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/projectlog`;

export const fetchAllProjectLog = async () => {
  const fetchResult = await fetch(`${baseUrl}/all`, {next:{revalidate:30}});
  const {projects}: { projects: Project[] } = await fetchResult.json();

  return projects;
}

export const fetchProjectLog = async (id:string) => {
  const projects = await fetchAllProjectLog();
  return projects.filter((project) => project.id === parseInt(id));
}
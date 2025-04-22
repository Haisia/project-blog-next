const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/projectlog`;

export const fetchAllProjectLog = async () => {
  const fetchResult = await fetch(`${baseUrl}/all`, {next: {revalidate: 30}});
  const {projects}: { projects: Project[] } = await fetchResult.json();

  return projects;
}

export const fetchProjectLog = async (id: string) => {
  const projects = await fetchAllProjectLog();
  return projects.filter((project) => project.id === parseInt(id));
}

export const fetchProjectLogPost = async (id: string) => {
  const fetchResult = await fetch(`${baseUrl}/${id}`, {next: {revalidate: 30}});
  const {postId, postTitle, postContent, createdAt, updatedAt} = await fetchResult.json();

  return {
    id: postId,
    title: postTitle,
    content: postContent,
    createdAt, updatedAt
  };
}

export interface Project {
  id: number;
  title: string;
  categories?: ProjectCategory[];
}

export interface ProjectCategory {
  id: number;
  title: string;
  posts?: ProjectPost[];
}

export interface ProjectPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

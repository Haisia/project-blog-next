const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/projectlog`;

export const fetchAllProjectLog = async () => {
  const fetchResult = await fetch(`${baseUrl}/all`, {next: {revalidate: 30}});
  const {projects}: { projects: ProjectLogResponse[] } = await fetchResult.json();

  return projects;
}

export const fetchProjectLog = async (id: string) => {
  const fetchResult = await fetch(`${baseUrl}?projectId=${id}`, {next: {revalidate: 30}});
  const {projectId, projectTitle, projectContent} = await fetchResult.json();

  return {
    id: projectId,
    title: projectTitle,
    content: projectContent,
  };
}

export const fetchProjectLogPost = async (id: string) => {
  const fetchResult = await fetch(`${baseUrl}/${id}`, {next: {revalidate: 30}});
  const {postId, postTitle, postContent, createdAt, updatedAt, projectId, projectTitle, projectContent} = await fetchResult.json();

  return {
    id: postId,
    title: postTitle,
    content: postContent,
    createdAt, updatedAt,
    projectId,
    projectTitle,
    projectContent,
  };
}

interface ProjectLogResponse {
  id: number;
  title: string;
  content: string;
  categories?: ProjectLogCategory[];
}

interface ProjectLogCategory {
  id: number;
  title: string;
  posts?: ProjectLogPost[];
}

interface ProjectLogPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

import {ResponseData} from "@/types/commons/ResponseData";

const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/projectlog`;

interface ProjectLogResponse {
  id: string;
  title: string;
  content: string;
  categories?: ProjectLogCategory[];
}

interface ProjectLogCategory {
  id: string;
  title: string;
  posts?: ProjectLogPost[];
}

interface ProjectLogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchAllProjectLog = async (): Promise<ProjectLogResponse[]> => {
  const fetchResult = await fetch(`${baseUrl}/all`, { next: { revalidate: 30 } });

  const response: ResponseData<{ projects: ProjectLogResponse[] }> = await fetchResult.json();

  return response.data?.projects;
};

export const fetchProjectLog = async (id: string) => {
  const fetchResult = await fetch(`${baseUrl}?projectId=${id}`, { next: { revalidate: 30 } });

  const response: ResponseData<{
    projectId: string;
    projectTitle: string;
    projectContent: string;
  }> = await fetchResult.json();

  const { projectId, projectTitle, projectContent } = response.data;

  return {
    id: projectId,
    title: projectTitle,
    content: projectContent,
  };
};

export const fetchProjectLogPost = async (id: string) => {
  try {
    const fetchResult = await fetch(`${baseUrl}/${id}`, { next: { revalidate: 30 } });

    if (!fetchResult.ok) {
      console.error(`fetchProjectLogPost failed: ${fetchResult.status} ${fetchResult.statusText}`);
      return null;
    }

    const response: ResponseData<{
      postId: string;
      postTitle: string;
      postContent: string;
      createdAt: string;
      updatedAt: string;
      projectId: string;
      projectTitle: string;
      projectContent: string;
    }> = await fetchResult.json();

    if (!response.data) {
      console.error(`fetchProjectLogPost: response.data is null`);
      return null;
    }

    const {
      postId,
      postTitle,
      postContent,
      createdAt,
      updatedAt,
      projectId,
      projectTitle,
      projectContent,
    } = response.data;

    return {
      id: postId,
      title: postTitle,
      content: postContent,
      createdAt,
      updatedAt,
      projectId,
      projectTitle,
      projectContent,
    };
  } catch (error) {
    console.error('fetchProjectLogPost error:', error);
    return null;
  }
};

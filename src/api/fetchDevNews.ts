import { DevNewsDto } from "@/types/devnews/DevNews";
import {ResponseData} from "@/types/commons/ResponseData";

const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/devnews`;

interface BlogDevNewsResponse {
  id: string;
  title: string;
  content: string
  createdAt: string;
  updatedAt: string;
}

interface BlogDevNewsApiResponse {
  data: BlogDevNewsResponse[];
}

export const fetchAllDevNews = async (): Promise<DevNewsDto[]> => {
  const fetchResult = await fetch(`${baseUrl}/all`, { next: { revalidate: 30 } });

  const response: ResponseData<{ blogDevNewses: DevNewsDto[] }> = await fetchResult.json();

  const { blogDevNewses } = response.data;
  console.log(blogDevNewses)

  return blogDevNewses.map((devNews) => ({
    id: devNews.id,
    title: devNews.title,
    content: devNews.content,
    createdAt: devNews.createdAt,
  }));
};

export const fetchDevNews = async (id: number): Promise<DevNewsDto | undefined> => {
  try {
    const fetchResult = await fetch(`${baseUrl}/${id}`, { next: { revalidate: 30 } });

    if (!fetchResult.ok) {
      console.error(`fetchDevNews failed: ${fetchResult.status} ${fetchResult.statusText}`);
      return undefined;
    }

    const response: ResponseData<{ blogDevNewses: DevNewsDto[] }> = await fetchResult.json();

    if (!response.data) {
      console.error(`fetchDevNews: response.data is null`);
      return undefined;
    }

    const { blogDevNewses } = response.data;

    if (!blogDevNewses || blogDevNewses.length === 0) {
      console.error(`fetchDevNews: blogDevNewses is empty`);
      return undefined;
    }

    const devNews = blogDevNewses[0];

    return {
      id: devNews.id,
      title: devNews.title,
      content: devNews.content,
      createdAt: devNews.createdAt,
    };
  } catch (error) {
    console.error('fetchDevNews error:', error);
    return undefined;
  }
};

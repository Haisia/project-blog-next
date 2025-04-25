import {DevNewsDto} from "@/types/devnews/DevNews";

const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/devnews`;

export const fetchAllDevNews = async (): Promise<DevNewsDto[]> => {
  const fetchResult = await fetch(`${baseUrl}/all`, { next: { revalidate: 30 } });
  const { blogDevNewses }: BlogDevNewsApiResponse = await fetchResult.json();

  return blogDevNewses.map(devNews => ({
    id: devNews.id,
    title: devNews.contentData.title,
    content: devNews.contentData.content,
    createdAt: devNews.createdAt,
  }));
};

export const fetchDevNews = async (id: number): Promise<DevNewsDto | undefined> => {
  const res = await fetch(`${baseUrl}/${id}`, { next: { revalidate: 30 } });

  if (!res.ok) return undefined;

  const json = await res.json();

  const blogDevNewses = json?.blogDevNewses;
  if (!Array.isArray(blogDevNewses) || blogDevNewses.length === 0) return undefined;

  const devNews = blogDevNewses[0];

  return {
    id: devNews.id,
    title: devNews.contentData.title,
    content: devNews.contentData.content,
    createdAt: devNews.createdAt,
  };
};

interface BlogDevNewsResponse {
  id: number;
  contentData: {title: string, content: string};
  createdAt: string;
  updatedAt: string;
}

interface BlogDevNewsApiResponse {
  blogDevNewses: BlogDevNewsResponse[]
}
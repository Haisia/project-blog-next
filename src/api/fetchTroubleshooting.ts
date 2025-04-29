import {ResponseData} from "@/types/commons/ResponseData";

const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/troubleshooting`;

interface FetchTroubleshootingPostResponse {
  troubleshootingId: number;
  troubleshootingTitle: string;
  categoryId: number;
  categoryTitle: string;
  id: number;
  title: string;
  content: string;
}

interface FetchAllTroubleshootingPostsResponse {
  troubleshootings: Array<{
    id: string;
    title: string;
    categories?: Array<{
      id: string;
      title: string;
      posts?: Array<{
        id: string;
        title: string;
        content: string;
        createdAt: string;
        updatedAt: string;
      }>;
    }>;
  }>;
}

export const fetchAllTroubleshootingPosts = async (): Promise<FetchAllTroubleshootingPostsResponse> => {
  const fetchResult = await fetch(`${baseUrl}/all`, { next: { revalidate: 30 } });
  const response: ResponseData<FetchAllTroubleshootingPostsResponse> = await fetchResult.json();
  return response.data;
};

export const fetchTroubleshootingPost = async (id: string): Promise<FetchTroubleshootingPostResponse> => {
  const fetchResult = await fetch(`${baseUrl}/${id}`, { next: { revalidate: 30 } });
  const response: ResponseData<FetchTroubleshootingPostResponse> = await fetchResult.json();
  return response.data;
};

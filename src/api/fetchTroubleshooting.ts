const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/troubleshooting`;

export const fetchAllTroubleshootingPosts = async () => {
  const fetchResult = await fetch(`${baseUrl}/all`, {next: {revalidate: 30}});
  const response: FetchAllTroubleshootingPostsResponse = await fetchResult.json();
  return response;
}

export const fetchTroubleshootingPost = async (id: string) => {
  const fetchResult = await fetch(`${baseUrl}/${id}`, {next: {revalidate: 30}});
  const response: FetchTroubleshootingPostResponse = await fetchResult.json();
  return response;
}

interface FetchTroubleshootingPostResponse {
  troubleshootingId: number,
  troubleshootingTitle: string,
  categoryId: number,
  categoryTitle: string,
  id: number,
  title: string,
  content: string,
}

interface FetchAllTroubleshootingPostsResponse {
  troubleshootings: [
    {
      id: string,
      title: string,
      categories?: [
        {
          id: string,
          title: string
          posts?:[
            {
              id: string,
              title: string,
              content: string,
              createdAt: string,
              updatedAt: string
            }
          ]
        }
      ]
    }
  ]
}
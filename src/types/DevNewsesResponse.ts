import ContentData from "@/types/ContentData";

export interface DevNewsResponse {
  blogDevNewses : DevNews[];
}

export interface DevNews {
  id : number;
  contentData : ContentData;
  createdAt : string;
  updatedAt : string;
}

export const devNewsResponseGroupByYearMonth = (response: DevNewsResponse) => {
  const grouped: Record<string, DevNews[]> = {};

  response.blogDevNewses.forEach(news => {
    const date = new Date(news.createdAt);
    const key = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}`;

    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(news);
  });

  const sortedGrouped: Record<string, DevNews[]> = Object.keys(grouped)
    .sort((a, b) => b.localeCompare(a))
    .reduce((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {} as Record<string, DevNews[]>);

  return sortedGrouped;
};
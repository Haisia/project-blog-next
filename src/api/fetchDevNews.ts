import ContentData from "@/types/ContentData";

const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/devnews`;

export const fetchAllDevNews = async () => {
  const fetchResult = await fetch(`${baseUrl}/all`, {next:{revalidate:30}});
  const {blogDevNewses} : {blogDevNewses: DevNews[]} = await fetchResult.json();
  return blogDevNewses;
}

export const fetchDevNews = async (id:number) => {
  const fetchResult = await fetch(`${baseUrl}/${id}`, {next:{revalidate:30}});
  const {blogDevNewses} : {blogDevNewses: DevNews[]} = await fetchResult.json();
  return blogDevNewses[0];
}

export interface DevNews {
  id : number;
  contentData : ContentData;
  createdAt : string;
  updatedAt : string;
}
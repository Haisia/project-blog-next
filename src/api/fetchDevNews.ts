import {DevNewsResponse} from "@/types/DevNewsesResponse";

const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/devnews`;

export const fetchAllDevNews = async () => {
  const fetchResult = await fetch(`${baseUrl}/all`);
  const response: DevNewsResponse = await fetchResult.json()
  return response;
}

export const fetchDevNews = async (id:number) => {
  const fetchResult = await fetch(`${baseUrl}/${id}`);
  const response: DevNewsResponse = await fetchResult.json()
  return response;
}
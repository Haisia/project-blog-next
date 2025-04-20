import matter from "gray-matter";

export const fetchMarkdown = async (url:string) => {
  const response = await fetch(url);
  const { title, content: rawContent } = await response.json();
  const { content } = markdownToMatter(rawContent);
  return { title, content };
};

const markdownToMatter = (content:string) => {
  return matter(content);
}
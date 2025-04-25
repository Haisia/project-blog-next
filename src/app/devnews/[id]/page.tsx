import { fetchDevNews } from "@/api/fetchDevNews";
import MarkdownPost from "@/components/markdownPost";
import { DevNewsDto } from "@/types/devnews/DevNews";
import { notFound } from "next/navigation";
import {staticParamsGenerator} from "@/utils/staticParamsGenerator";

const pageName = "Dev News";
const pageLink = "/devnews";

export function generateStaticParams() {
  return staticParamsGenerator(50);
}

const Page = async (
  { params }: Readonly<{ params: Promise<{ id: number }> }>
) => {
  const { id } = await params;

  const devNews: DevNewsDto | undefined = await fetchDevNews(id);

  if (!devNews) {
    notFound();
  }

  const breadcrumbItems = [
    { content: pageName, link: pageLink },
    { content: devNews.title, link: `${pageLink}/${id}` }
  ];

  return (
    <MarkdownPost
      breadcrumbItems={breadcrumbItems}
      item={{ title: devNews.title, content: devNews.content }}
    />
  );
};

export default Page;

import {fetchDevNews} from "@/api/fetchDevNews"
import MarkdownPost from "@/components/markdownPost";
import {DevNewsDto} from "@/types/devnews/DevNews";

const pageName = "Dev News";
const pageLink = "/devnews";

const Page = async (
  { params }: Readonly<{ params: Promise<{ id: number }> }>
) => {
  const { id } = await params
  const devNews:DevNewsDto = await fetchDevNews(id)

  const breadcrumbItems = [
    {content: pageName, link: pageLink},
    {content: devNews.title, link: `${pageLink}/${id}`}
  ]

  return (
    <MarkdownPost
      breadcrumbItems={breadcrumbItems}
      item={{title:devNews.title, content:devNews.content}}
    />
  )
}

export default Page

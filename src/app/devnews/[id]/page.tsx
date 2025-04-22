import {fetchDevNews} from "@/api/fetchDevNews"
import MarkdownPost from "@/components/markdownPost";

const group = "Dev News";
const groupLink = "/devnews";

const Page = async (
  { params }: Readonly<{ params: Promise<{ id: number }> }>
) => {
  const { id } = await params
  const devNews = await fetchDevNews(id)

  const breadcrumbItems = [
    {content: group, link: groupLink},
    {content: devNews.contentData.title, link: `${groupLink}/${id}`}
  ]

  return (
    <MarkdownPost
      breadcrumbItems={breadcrumbItems}
      item={devNews.contentData}
    />
  )
}

export default Page

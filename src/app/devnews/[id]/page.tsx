import {fetchDevNews} from "@/api/fetchDevNews"
import MarkdownPost from "@/components/markdownPost";

const pageName = "Dev News";
const pageLink = "/devnews";

const Page = async (
  { params }: Readonly<{ params: Promise<{ id: number }> }>
) => {
  const { id } = await params
  const devNews = await fetchDevNews(id)

  const breadcrumbItems = [
    {content: pageName, link: pageLink},
    {content: devNews.contentData.title, link: `${pageLink}/${id}`}
  ]

  return (
    <MarkdownPost
      breadcrumbItems={breadcrumbItems}
      item={devNews.contentData}
    />
  )
}

export default Page

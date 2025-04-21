// page.tsx
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { fetchDevNews } from "@/api/fetchDevNews"

const Page = async ({ params }: Readonly<{ params: Promise<{ id: number }> }>) => {
  const { id } = await params
  const response = await fetchDevNews(id)
  const devNews = response.blogDevNewses[0]

  const { content, frontmatter } = await compileMDX({
    source: devNews.contentData.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  return (
    <>
      <h1 className="text-[2.5rem] font-bold my-5">{devNews.contentData.title}</h1>
      <article className="markdown max-w-none">
        {content}
      </article>
    </>
  )
}

export default Page

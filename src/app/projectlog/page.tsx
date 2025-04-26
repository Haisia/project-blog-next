import { fetchProjectLog } from '@/api/fetchProjectLog';
import MarkdownPost from '@/components/markdownPost';
import {BreadcrumbItem} from "@/components/breadcrumb";
import {projectLogDefaultContent} from "@/data/projectLogData";

const pageName = "Project Log"
const pageLink = "/projectlog"

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const projectId = typeof params.projectId === 'string' ? params.projectId : '';

  const project = projectId ? await fetchProjectLog(projectId) : projectLogDefaultContent;

  const breadcrumbItems:BreadcrumbItem[] = [
    {content:pageName, link: pageLink},
  ];

  return (
    <>
      {project && <MarkdownPost breadcrumbItems={breadcrumbItems} item={project} />}
    </>
  );
};

export default Page;

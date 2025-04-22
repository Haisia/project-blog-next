import { fetchProjectLog } from '@/api/fetchProjectLog';
import MarkdownPost from '@/components/markdownPost';
import {BreadcrumbItem} from "@/components/breadcrumb";

const pageName = "Project Log"
const pageLink = "/projectlog"

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const projectId = typeof params.projectId === 'string'
    ? params.projectId
    : params.projectId?.[0] ?? '1';

  const project = await fetchProjectLog(projectId);

  const breadcrumbItems:BreadcrumbItem[] = [
    {content:pageName, link: pageLink},
    {content:project.title, link: '#'},
  ];

  return (
    <>
      {project && <MarkdownPost breadcrumbItems={breadcrumbItems} item={project} />}
    </>
  );
};

export default Page;

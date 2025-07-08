import MarkdownPost from "@/components/markdownPost";
import {notFound} from "next/navigation";
import {fetchStudyNote} from "@/api/fetchStudyNote";
import {StudyNoteCategoryDto} from "@/types/studynote/StudyNoteCategory";

const pageName = "Study Note";
const pageLink = "/studynote";

// export function generateStaticParams() {
//   return staticParamsGenerator(50);
// }

const Page = async (
  { params }: Readonly<{ params: Promise<{ id: number }> }>
) => {
  const { id } = await params;

  const studyNoteCategory: StudyNoteCategoryDto | undefined = await fetchStudyNote(id);

  if (!studyNoteCategory) {
    notFound();
  }

  const post = studyNoteCategory.posts
    .find(post => post.id.toString() === id.toString());

  const breadcrumbItems = [
    { content: pageName, link: pageLink },
    { content: studyNoteCategory.title, link: `${pageLink}/${id}` }
  ];

  return (
    <MarkdownPost
      breadcrumbItems={breadcrumbItems}
      item={{ title: post!.title, content: post!.content }}
    />
  );
};

export default Page;

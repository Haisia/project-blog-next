import { StudyNoteCategoryDto } from "@/types/studynote/StudyNoteCategory";
import {ResponseData} from "@/types/commons/ResponseData";

const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/studynote`;

export const fetchAllStudyNotes = async (): Promise<StudyNoteCategoryDto[]> => {
  const fetchResult = await fetch(`${baseUrl}/all`, { next: { revalidate: 30 } });
  const response: ResponseData<{ categories: StudyNoteCategoryDto[] }> = await fetchResult.json();
  return response.data?.categories;
};

export const fetchStudyNote = async (_id: number): Promise<StudyNoteCategoryDto> => {
  const fetchResult = await fetch(`${baseUrl}/${_id}`, { next: { revalidate: 30 } });

  const response: ResponseData<{
    categoryId: string;
    categoryTitle: string;
    id: string;
    title: string;
    content: string;
  }> = await fetchResult.json();

  const { categoryId, categoryTitle, id, title, content } = response.data;

  return {
    id: categoryId,
    title: categoryTitle,
    studyNotes: [
      {
        id,
        title,
        content,
      },
    ],
  };
};

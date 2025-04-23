import {StudyNoteCategoryDto} from "@/types/studynote/StudyNoteCategory";

const baseUrl = `${process.env.NEXT_PUBLIC_BE_HOST}/api/blog/studynote`;

export const fetchAllStudyNotes = async (): Promise<StudyNoteCategoryDto[]> => {
  const fetchResult = await fetch(`${baseUrl}/all`, { next: { revalidate: 30 } });
  const { categories }: { categories: StudyNoteCategoryDto[] } = await fetchResult.json();
  return categories;
};

export const fetchStudyNote = async (_id: number): Promise<StudyNoteCategoryDto> => {
  const fetchResult = await fetch(`${baseUrl}/${_id}`, { next: { revalidate: 30 } });
  const { categoryId, categoryTitle, id, title, content } = await fetchResult.json();

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
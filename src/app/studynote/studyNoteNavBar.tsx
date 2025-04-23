import React from 'react';
import {fetchAllStudyNotes} from "@/api/fetchStudyNote";
import StudyNoteNavBarClient from "@/app/studynote/(clients)/studyNoteNavBarClient";

const StudyNoteNavBar = async () => {
  const categories = await fetchAllStudyNotes()
  return (
    <>
      <StudyNoteNavBarClient categories={categories} />
    </>
  );
};

export default StudyNoteNavBar;
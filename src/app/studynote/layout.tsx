import React, {ReactNode} from 'react';
import StudyNoteNavBar from "@/app/studynote/studyNoteNavBar";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-1 items-stretch">
      <StudyNoteNavBar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
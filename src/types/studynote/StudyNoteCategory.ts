import {StudyNote, StudyNoteDto} from "@/types/studynote/StudyNote";
import {SubNavBarDropDownItem} from "@/components/subNavBarDropDown";
import {SubNavBarContentsItem} from "@/components/subNavBarContents";

export interface StudyNoteCategoryDto {
  id: number;
  title: string;
  studyNotes: StudyNoteDto[];
}

export class StudyNoteCategory {
  constructor(
    public id: number,
    public title: string,
    public studyNotes: StudyNote[]
  ) {}

  toSubNavBarDropDownItem() {
    return new SubNavBarDropDownItem(this.title, this.id.toString());
  }

  toSubNavBarContentsItem(baseUrl: string): SubNavBarContentsItem[] {
    return this.studyNotes.map(studyNote => studyNote.toSubNavBarContentsItem(baseUrl));
  }

  static fromObject(obj: StudyNoteCategoryDto): StudyNoteCategory {
    return new StudyNoteCategory(
      obj.id,
      obj.title,
      obj.studyNotes.map(note => StudyNote.fromObject(note))
    );
  }

  toObject(): StudyNoteCategoryDto {
    return {
      id: this.id,
      title: this.title,
      studyNotes: this.studyNotes.map(note => note.toObject())
    };
  }
}
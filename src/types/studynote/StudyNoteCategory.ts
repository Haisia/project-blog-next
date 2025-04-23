import {StudyNote, StudyNoteDto} from "@/types/studynote/StudyNote";
import {SubNavBarDropDownItem, toSubNavBarDropDownItemAble} from "@/components/subNavBarDropDown";
import {SubNavBarContentsItem, toSubNavBarContentsItemAble} from "@/components/subNavBarContents";

export interface StudyNoteCategoryDto {
  id: number;
  title: string;
  studyNotes: StudyNoteDto[];
}

export class StudyNoteCategory implements toSubNavBarDropDownItemAble, toSubNavBarContentsItemAble {
  constructor(
    public id: number,
    public title: string,
    public studyNotes: StudyNote[]
  ) {}

  toSubNavBarDropDownItem(): SubNavBarDropDownItem {
    return new SubNavBarDropDownItem(this.title, this.id.toString());
  }

  toSubNavBarContentsItems(baseUrl: string): SubNavBarContentsItem[] {
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
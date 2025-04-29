import {StudyNotePost, StudyNotePostDto} from "@/types/studynote/StudyNotePost";
import {SubNavBarDropDownItem, ToSubNavBarDropDownItemAble} from "@/components/subNavBarDropDown";
import {SubNavBarContentsItem, ToSubNavBarContentsItemsAble} from "@/components/subNavBarContents";

export interface StudyNoteCategoryDto {
  id: string;
  title: string;
  posts: StudyNotePostDto[];
}

export class StudyNoteCategory implements ToSubNavBarDropDownItemAble, ToSubNavBarContentsItemsAble {
  constructor(
    public id: string,
    public title: string,
    public posts: StudyNotePost[]
  ) {}

  toSubNavBarDropDownItem(): SubNavBarDropDownItem {
    return new SubNavBarDropDownItem(this.title, this.id.toString());
  }

  toSubNavBarContentsItems(baseUrl: string): SubNavBarContentsItem[] {
    return this.posts.map(studyNote => studyNote.toSubNavBarContentsItem(baseUrl));
  }

  static fromObject(obj: StudyNoteCategoryDto): StudyNoteCategory {
    return new StudyNoteCategory(
      obj.id,
      obj.title,
      obj.posts.map(note => StudyNotePost.fromObject(note))
    );
  }

  toObject(): StudyNoteCategoryDto {
    return {
      id: this.id,
      title: this.title,
      posts: this.posts.map(note => note.toObject())
    };
  }
}
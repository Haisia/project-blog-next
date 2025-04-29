import {SubNavBarContentsItem} from "@/components/subNavBarContents";

export interface StudyNotePostDto {
  id: string;
  title: string;
  content: string;
}

export class StudyNotePost {
  constructor(
    public id: string,
    public title: string,
    public content: string
  ) {}

  toSubNavBarContentsItem(baseUrl: string): SubNavBarContentsItem {
    return new SubNavBarContentsItem(this.title, `${baseUrl}/${this.id.toString()}`);
  }

  static fromObject(obj: StudyNotePostDto): StudyNotePost {
    return new StudyNotePost(obj.id, obj.title, obj.content);
  }

  toObject(): StudyNotePostDto {
    return {
      id: this.id,
      title: this.title,
      content: this.content
    };
  }
}
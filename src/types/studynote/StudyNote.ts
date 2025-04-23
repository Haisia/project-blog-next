import {SubNavBarContentsItem} from "@/components/subNavBarContents";

export interface StudyNoteDto {
  id: number;
  title: string;
  content: string;
}

export class StudyNote {
  constructor(
    public id: number,
    public title: string,
    public content: string
  ) {}

  toSubNavBarContentsItem(baseUrl: string): SubNavBarContentsItem {
    return new SubNavBarContentsItem(this.title, `${baseUrl}/${this.id.toString()}`);
  }

  static fromObject(obj: StudyNoteDto): StudyNote {
    return new StudyNote(obj.id, obj.title, obj.content);
  }

  toObject(): StudyNoteDto {
    return {
      id: this.id,
      title: this.title,
      content: this.content
    };
  }
}
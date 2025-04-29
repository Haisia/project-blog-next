import {StudyNotePost} from "@/types/studynote/StudyNotePost";
import {SubNavBarDropDownItem, ToSubNavBarDropDownItemAble} from "@/components/subNavBarDropDown";
import {SubNavBarContentsItem, ToSubNavBarContentsItemsAble} from "@/components/subNavBarContents";
import {DevTool, DevToolDto} from "@/types/devtool/DevTool";

export interface DevToolCategoryDto {
  id: string;
  title: string;
  devTools: DevToolDto[];
}

export class DevToolCategory implements ToSubNavBarDropDownItemAble, ToSubNavBarContentsItemsAble {
  constructor(
    public id: string,
    public title: string,
    public devTools: DevTool[]
  ) {}

  toSubNavBarDropDownItem(): SubNavBarDropDownItem {
    return new SubNavBarDropDownItem(this.title, this.id.toString());
  }

  toSubNavBarContentsItems(baseUrl: string): SubNavBarContentsItem[] {
    return this.devTools.map(studyNote => studyNote.toSubNavBarContentsItem(baseUrl));
  }

  static fromObject(obj: DevToolCategoryDto): DevToolCategory {
    return new DevToolCategory(
      obj.id,
      obj.title,
      obj.devTools.map(note => StudyNotePost.fromObject(note))
    );
  }

  toObject(): DevToolCategoryDto {
    return {
      id: this.id,
      title: this.title,
      devTools: this.devTools.map(note => note.toObject())
    };
  }
}
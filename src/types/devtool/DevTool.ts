import {SubNavBarContentsItem} from "@/components/subNavBarContents";

export interface DevToolDto {
  id: string;
  title: string;
  content: string;
}

export class DevTool {
  constructor(
    public id: string,
    public title: string,
    public content: string,
  ) {}

  toSubNavBarContentsItem(baseUrl: string): SubNavBarContentsItem {
    return new SubNavBarContentsItem(this.title, `${baseUrl}/${this.id.toString()}`);
  }

  static fromObject(obj: DevToolDto): DevTool {
    return new DevTool(obj.id, obj.title, obj.content);
  }

  toObject(): DevToolDto {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
    };
  }
}
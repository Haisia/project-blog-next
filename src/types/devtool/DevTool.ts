import {SubNavBarContentsItem} from "@/components/subNavBarContents";

export interface DevToolDto {
  id: string;
  title: string;
}

export class DevTool {
  constructor(
    public id: string,
    public title: string,
  ) {}

  toSubNavBarContentsItem(baseUrl: string): SubNavBarContentsItem {
    return new SubNavBarContentsItem(this.title, `${baseUrl}/${this.id.toString()}`);
  }

  static fromObject(obj: DevToolDto): DevTool {
    return new DevTool(obj.id, obj.title);
  }

  toObject(): DevToolDto {
    return {
      id: this.id,
      title: this.title,
    };
  }
}
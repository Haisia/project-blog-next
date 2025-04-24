import {SubNavBarContentsItem} from "@/components/subNavBarContents";

export interface DevNewsDto {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export class DevNews {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public createdAt: string,
  ) {}

  toSubNavBarContentsItem(baseUrl: string): SubNavBarContentsItem {
    return new SubNavBarContentsItem(this.title, `${baseUrl}/${this.id.toString()}`)
  }

  getYearMonth() {
    const [year, month] = this.createdAt.split(" ")[0].split("-")
    return {year, month}
  }

  static fromObject(obj : DevNewsDto): DevNews {
    return new DevNews(obj.id, obj.title, obj.content, obj.createdAt);
  }

  toObject(): DevNewsDto {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
    };
  }
}
export interface TroubleshootingPostDto {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export class TroubleshootingPost {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public createdAt: string,
    public updatedAt: string,
  ) {}

  static fromObject(obj: TroubleshootingPostDto): TroubleshootingPost {
    return new TroubleshootingPost(obj.id, obj.title, obj.content, obj.createdAt, obj.updatedAt);
  }

  toObject(): TroubleshootingPostDto {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
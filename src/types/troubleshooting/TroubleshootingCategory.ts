import {TroubleshootingPost, TroubleshootingPostDto} from "@/types/troubleshooting/TroubleshootingPost";

export interface TroubleshootingCategoryDto {
  id: number;
  title: string;
  posts?: TroubleshootingPostDto[]
}

export class TroubleshootingCategory {
  constructor(
    public id: number,
    public title: string,
    public posts: TroubleshootingPost[] = []
  ) {}

  static fromObject(obj: TroubleshootingCategoryDto): TroubleshootingCategory {
    return new TroubleshootingCategory(
      obj.id,
      obj.title,
      (obj.posts || []).map(TroubleshootingPost.fromObject)
    );
  }

  toObject(): TroubleshootingCategoryDto {
    return {
      id: this.id,
      title: this.title,
      posts: this.posts.map(post => post.toObject()),
    }
  }

}
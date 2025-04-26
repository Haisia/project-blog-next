import {ProjectLogPost, ProjectLogPostDto} from "@/types/projectlog/ProjectLogPost";

export interface ProjectLogCategoryDto {
  id: string;
  title: string;
  posts?: ProjectLogPostDto[]
}

export class ProjectLogCategory {
  constructor(
    public id: string,
    public title: string,
    public posts: ProjectLogPost[]
  ) {}

  static fromObject(obj: ProjectLogCategoryDto): ProjectLogCategory {
    return new ProjectLogCategory(
      obj.id,
      obj.title,
      (obj.posts || []).map(ProjectLogPost.fromObject)
    );
  }

  toObject(): ProjectLogCategoryDto {
    return {
      id: this.id,
      title: this.title,
      posts: this.posts.map(post => post.toObject()),
    };
  }
}

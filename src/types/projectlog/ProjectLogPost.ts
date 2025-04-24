export interface ProjectLogPostDto {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export class ProjectLogPost {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public createdAt: string,
    public updatedAt: string
  ) {}

  static fromObject(obj: ProjectLogPostDto): ProjectLogPost {
    return new ProjectLogPost(obj.id, obj.title, obj.content, obj.createdAt, obj.updatedAt);
  }

  toObject(): ProjectLogPostDto {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
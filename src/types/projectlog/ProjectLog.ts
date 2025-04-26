import {ProjectLogCategory, ProjectLogCategoryDto} from "@/types/projectlog/ProjectLogCategory";
import {SubNavBarDropDownItem, ToSubNavBarDropDownItemAble} from "@/components/subNavBarDropDown";
import {SubNavBarContentsWithSubTitleItem,
  ToSubNavBarContentsWithSubTitleItemAble
} from "@/components/subNavBarContentsWithSubTitle";

export interface ProjectLogDto {
  id: string;
  title: string;
  content: string;
  categories?: ProjectLogCategoryDto[];
}

export class ProjectLog implements ToSubNavBarDropDownItemAble, ToSubNavBarContentsWithSubTitleItemAble {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public categories: ProjectLogCategory[] = []
  ) {}

  toSubNavBarDropDownItem(): SubNavBarDropDownItem {
    return new SubNavBarDropDownItem(this.title, this.id.toString());
  }

  toSubNavBarContentsWithSubTitleItem(baseUrl: string): SubNavBarContentsWithSubTitleItem[] {
    if (!this.categories?.length) return [];

    return this.categories.map(category => ({
      category: category.title,
      children: (category.posts ?? []).map(post => ({
        title: post.title,
        link: `${baseUrl}/${post.id}`
      }))
    }));
  }

  static fromObject(obj: ProjectLogDto): ProjectLog {
    return new ProjectLog(
      obj.id,
      obj.title,
      obj.content,
      (obj.categories || []).map(ProjectLogCategory.fromObject)
    );
  }

  toObject(): ProjectLogDto {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      categories: this.categories.map(cat => cat.toObject()),
    };
  }
}
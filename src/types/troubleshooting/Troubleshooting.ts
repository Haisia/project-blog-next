import {SubNavBarDropDownItem, ToSubNavBarDropDownItemAble} from "@/components/subNavBarDropDown";
import {
  SubNavBarContentsWithSubTitleItem,
  ToSubNavBarContentsWithSubTitleItemAble
} from "@/components/subNavBarContentsWithSubTitle";
import {TroubleshootingCategory, TroubleshootingCategoryDto} from "@/types/troubleshooting/TroubleshootingCategory";

export interface TroubleshootingDto {
  id: string;
  title: string;
  categories?: TroubleshootingCategoryDto[]
}

export class Troubleshooting implements ToSubNavBarDropDownItemAble, ToSubNavBarContentsWithSubTitleItemAble {
  constructor(
    public id: string,
    public title: string,
    public categories: TroubleshootingCategory[] = []
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

  static fromObject(obj: TroubleshootingDto): Troubleshooting {
    return new Troubleshooting(
      obj.id,
      obj.title,
      (obj.categories || []).map(TroubleshootingCategory.fromObject)
    );
  }

  toObject(): TroubleshootingDto {
    return {
      id: this.id,
      title: this.title,
      categories: this.categories.map(category => category.toObject()),
    };
  }
}
import {DevNews, DevNewsDto} from "@/types/devnews/DevNews";
import {SubNavBarDropDownItem, ToSubNavBarDropDownItemAble} from "@/components/subNavBarDropDown";
import {SubNavBarContentsItem, ToSubNavBarContentsItemsAble} from "@/components/subNavBarContents";

export interface DevNewsesGroupedByYearMonthDto {
  year: string,
  month: string,
  devNewses: DevNewsDto[]
}

export class DevNewsesGroupedByYearMonth implements ToSubNavBarDropDownItemAble, ToSubNavBarContentsItemsAble {
  constructor(
    public year: string,
    public month: string,
    public devNewses: DevNews[]
  ) {}

  toSubNavBarDropDownItem(): SubNavBarDropDownItem {
    return new SubNavBarDropDownItem(this.toString(), this.year + this.month)
  }

  toSubNavBarContentsItems(baseUrl: string): SubNavBarContentsItem[] {
    return this.devNewses.map(news => news.toSubNavBarContentsItem(baseUrl));
  }

  static fromObject(obj: DevNewsesGroupedByYearMonthDto): DevNewsesGroupedByYearMonth {
    return new DevNewsesGroupedByYearMonth(
      obj.year,
      obj.month,
      obj.devNewses.map(news => DevNews.fromObject(news))
    )
  }

  toObject(): DevNewsesGroupedByYearMonthDto {
    return {
      year: this.year,
      month: this.month,
      devNewses: this.devNewses.map(news => news.toObject())
    }
  }

  toString() {
    return `${this.year}년 ${this.month}월`
  }

  static fromDevNewses(devNewses: DevNews[]): DevNewsesGroupedByYearMonth[] {
    const groupMap: Map<string, DevNews[]> = new Map();

    for (const news of devNewses) {
      const { year, month } = news.getYearMonth();
      const key = `${year}-${month}`;

      if (!groupMap.has(key)) {
        groupMap.set(key, []);
      }

      groupMap.get(key)!.push(news);
    }

    const groupedList: DevNewsesGroupedByYearMonth[] = Array.from(groupMap.entries())
      .map(([key, newsList]) => {
        const [year, month] = key.split("-");
        return new DevNewsesGroupedByYearMonth(year, month, newsList);
      });

    groupedList.sort((a, b) => {
      if (a.year !== b.year) return +b.year - +a.year;
      return +b.month - +a.month;
    });

    return groupedList;
  }
}
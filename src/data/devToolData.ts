import {DevToolCategoryDto} from "@/types/devtool/DevToolCategory";

export const devToolCategories: DevToolCategoryDto[] = [
  {
    id: 'encoding',
    title: '인코딩 & 디코딩',
    devTools: [
      {id: 'base64', title: 'Base64',},
      {id: 'unicode', title: 'Unicode',},
      {id: 'cron', title: 'Cron Expression',},
    ]
  }
]
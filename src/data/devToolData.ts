import {DevToolCategoryDto} from "@/types/devtool/DevToolCategory";

export const devToolCategories: DevToolCategoryDto[] = [
  {
    id: 'encoding',
    title: '인코딩 & 디코딩',
    devTools: [
      {id: 'base64', title: 'Base64', content: ''},
      {id: 'unicode', title: 'Unicode',content: ''},
      {id: 'cron', title: 'Cron Expression',content: ''},
      {id: 'url', title: 'URL Encoding', content: ''},
      {id: 'htmlentities', title: 'HTML Entities', content: ''},
      {id: 'jwt', title: 'JWT Decoder', content: ''},
    ]
  }
]
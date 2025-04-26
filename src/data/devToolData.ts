import {DevToolCategoryDto} from "@/types/devtool/DevToolCategory";

export const devToolCategories: DevToolCategoryDto[] = [
  {
    id: 'encoding',
    title: '인코딩 & 디코딩',
    devTools: [
      {id: 'ed-base64', title: 'Base64', content: ''},
      {id: 'ed-unicode', title: 'Unicode',content: ''},
      {id: 'ed-cron', title: 'Cron Expression',content: ''},
      {id: 'ed-url', title: 'URL Encoding', content: ''},
      {id: 'ed-htmlentities', title: 'HTML Entities', content: ''},
      {id: 'ed-jwt', title: 'JWT Decoder', content: ''},
    ]
  },
  {
    id: 'formatter',
    title: '포매터',
    devTools: [
      {id: 'fm-json', title: 'JSON Formatter', content: ''},
    ]
  }
]
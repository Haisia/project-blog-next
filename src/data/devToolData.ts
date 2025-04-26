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

export const devToolDefaultContent = {
  title: '🪛 Dev Tool\n',
  content:
    '\n' +
    '개발을 하다 보면 매번 찾게 되는 유틸리티 도구들이 있다.  \n' +
    '그럴 때마다 검색하고, 광고 덕지덕지 붙은 사이트를 거치는 게 은근히 번거롭다.\n' +
    '\n' +
    '귀찮고 반복되는 일을 코드로 해결하려는 것. 개발자라면 가져야 마음가짐이 아닐까?\n' +
    '\n' +
    '그래서 직접 만들어보기로 했다.\n'+
    '\n' +
    '---\n' +
    '\n' +
    '## 어떤 도구들을 넣을 건지?\n' +
    '\n' +
    '- Base64, URL, Unicode 등 인코딩/디코딩 도구\n' +
    '- Cron 표현식 해석기\n' +
    '- JSON 포매터, JWT 디코더 같은 구조 분석기\n' +
    '- 자주 쓰는 변환기나 시각화 도구들\n' +
    '\n' +
    '지금은 많지 않지만,  \n' +
    '필요할 때마다 하나씩 추가해서 쌓아갈 생각이다.\n' +
    '\n' +
    '---\n' +
    '\n' +
    '## 개발의 목적?\n' +
    '\n' +
    '- 매번 검색하지 않고 하나의 사이트에 모아두기\n' +
    '- 광고 없이, 필요한 기능만 깔끔하게 사용\n' +
    '- 내가 자주 쓰는 도구를 내 손에 맞게 구현\n' +
    '\n' +
    '빠르고 깔끔하게, 필요한 기능만 모아두는 게 목표다.\n',
}
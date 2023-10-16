export const bulletin = {
  title: '网站公告',
  body: [
    {
      type: 'title',
      content: '博客',
    },
    {
      type: 'text',
      content: `
      <ul>
        <li><a href="https://www.techgrow.cn">https://www.techgrow.cn</a></li>
      </ul>`,
      style: 'font-size: 12px;'
    },
    {
      type: 'hr',
    },
    {
      type: 'title',
      content: '公众号',
    },
    {
      type: 'text',
      content: `<img style="width: 160px" src="/interview/wechat.png" />`,
      style: 'width:69%; margin:0 auto;'
    },
    {
      type: 'hr',
    },
    {
      type: 'buttongroup',
      children: [
        {
          text: '打赏',
          link: '/interview/docs/others/donate.html'
        }
      ]
    }
  ]
}
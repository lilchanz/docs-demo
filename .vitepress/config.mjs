import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {

    outlineTitle:"目录",
    outline:[2,6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', items:[
      { text: '示例', link: '/markdown-examples' },
      ],
    },
      { text: 'markdown示例',link: '/markdown-examples' },
      { text: '自动生成1',link: '/front-end/react' },
      { text: '自动生成2',link: '/backend/rabbitmq' },
      { text: '两边栏演示',link: '/两边栏演示' },

    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: '运行 API 演示', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar: {
    //    "/front-end/react": set_sidebar("front-end/react") ,
    //    "/backend/rabbitmq": set_sidebar("backend/rabbitmq") ,
             

    // },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
       copyright:"Copyright@ 2024 Lil Chanz"
    },
       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
  },

})

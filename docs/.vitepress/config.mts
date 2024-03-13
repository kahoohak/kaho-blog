import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/kaho-blog/',
  title: "小赵自律日记",
  description: "记录自己的生活点滴",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      {
        text: "学习",
        items: [
          { text: "Vue", link: "/study/vue/" },
          // { text: 'React', link: '/study/react' },
          { text: "前端工程化", link: "/study/frontend-engineering/" },
          { text: "面试", link: "/study/interview/" },
          { text: "算法", link: "/study/algorithmic/" },
          { text: "TypeScript", link: "/study/typescript/" },
        ],
      },
      { text: "作品", link: "/projects/" },
      // { text: "健身", link: "/fitness/" },
      // { text: "旅行", link: "/travel/" },
      { text: "简历", link: "/vitae/" },
    ],

    sidebar: {
      "/study/vue": [
        {
          text: "Vue3源码解析",
          collapsed: true,
          items: [{ text: "响应式原理", link: "/study/vue/vue3-sourceCode-parsing/响应式原理" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/kahoohak" }],

    outline: {
      level: [1, 6],
      label: '页面大纲'
    }
  },
});

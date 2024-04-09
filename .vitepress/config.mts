import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端周刊",
  description: "前端周刊，给前端同学准备的每周1小时阅读清单",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "前端周刊", link: "/" },
      { text: "英文文档阅读套装", link: "/tools.html" },
      { text: "0元建站方案", link: "/program.html" },
      { text: "前端博客", link: "https://refined-x.com/", target: "_blank" },
      {
        text: "在线绘制架构图",
        link: "https://www.processon.com/i/5a570b3be4b05a8ff2f93201",
        target: "_blank",
      },
    ],

    sidebar: [
      {
        text: "2024 年",
        items: [
          {
            text: "2024/phase-3",
            link: "2024/phase-3",
          },

          {
            text: "2024/phase-2",
            link: "2024/phase-2",
          },
          {
            text: "2024/phase-1",
            link: "2024/phase-1",
          },
        ],
      },
      {
        text: "2023 年",
        items: [
          {
            text: "2023/phase-4",
            link: "2023/phase-4",
          },
          {
            text: "2023/phase-3",
            link: "2023/phase-3",
          },
          {
            text: "2023/phase-2",
            link: "2023/phase-2",
          },
          {
            text: "2023/phase-1",
            link: "2023/phase-1",
          },
        ],
      },
      {
        text: "2022 年",
        items: [
          {
            text: "2022/phase-14",
            link: "2022/phase-14",
          },
          {
            text: "2022/phase-13",
            link: "2022/phase-13",
          },
          {
            text: "2022/phase-12",
            link: "2022/phase-12",
          },
          {
            text: "2022/phase-11",
            link: "2022/phase-11",
          },
          {
            text: "2022/phase-10",
            link: "2022/phase-10",
          },
          {
            text: "2022/phase-9",
            link: "2022/phase-9",
          },
          {
            text: "2022/phase-8",
            link: "2022/phase-8",
          },
          {
            text: "2022/phase-7",
            link: "2022/phase-7",
          },
          {
            text: "2022/phase-6",
            link: "2022/phase-6",
          },
          {
            text: "2022/phase-5",
            link: "2022/phase-5",
          },
          {
            text: "2022/phase-4",
            link: "2022/phase-4",
          },
          {
            text: "2022/phase-3",
            link: "2022/phase-3",
          },
          {
            text: "2022/phase-2",
            link: "2022/phase-2",
          },
          {
            text: "2022/phase-1",
            link: "2022/phase-1",
          },
        ],
      },
      {
        text: "2021 年",
        items: [
          {
            text: "2021/phase-15",
            link: "2021/phase-15",
          },
          {
            text: "2021/phase-14",
            link: "2021/phase-14",
          },
          {
            text: "2021/phase-13",
            link: "2021/phase-13",
          },
          {
            text: "2021/phase-12",
            link: "2021/phase-12",
          },
          {
            text: "2021/phase-11",
            link: "2021/phase-11",
          },
          {
            text: "2021/phase-11",
            link: "2021/phase-11",
          },
          {
            text: "2021/phase-9",
            link: "2021/phase-9",
          },
          {
            text: "2021/phase-8",
            link: "2021/phase-8",
          },
          {
            text: "2021/phase-7",
            link: "2021/phase-7",
          },
          {
            text: "2021/phase-6",
            link: "2021/phase-6",
          },
          {
            text: "2021/phase-5",
            link: "2021/phase-5",
          },
          {
            text: "2021/phase-4",
            link: "2021/phase-4",
          },
          {
            text: "2021/phase-3",
            link: "2021/phase-3",
          },
          {
            text: "2021/phase-2",
            link: "2021/phase-2",
          },
          {
            text: "2021/phase-1",
            link: "2021/phase-1",
          },
        ],
      },
      {
        text: "2020 年",
        items: [
          {
            text: "2020/phase-17",
            link: "2020/phase-17",
          },
          {
            text: "2020/phase-16",
            link: "2020/phase-16",
          },
          {
            text: "2020/phase-15",
            link: "2020/phase-15",
          },
          {
            text: "2020/phase-14",
            link: "2020/phase-14",
          },
          {
            text: "2020/phase-13",
            link: "2020/phase-13",
          },
          {
            text: "2020/phase-12",
            link: "2020/phase-12",
          },
          {
            text: "2020/phase-11",
            link: "2020/phase-11",
          },
          {
            text: "2020/phase-11",
            link: "2020/phase-11",
          },
          {
            text: "2020/phase-9",
            link: "2020/phase-9",
          },
          {
            text: "2020/phase-8",
            link: "2020/phase-8",
          },
          {
            text: "2020/phase-7",
            link: "2020/phase-7",
          },
          {
            text: "2020/phase-6",
            link: "2020/phase-6",
          },
          {
            text: "2020/phase-5",
            link: "2020/phase-5",
          },
          {
            text: "2020/phase-4",
            link: "2020/phase-4",
          },
          {
            text: "2020/phase-3",
            link: "2020/phase-3",
          },
          {
            text: "2020/phase-2",
            link: "2020/phase-2",
          },
          {
            text: "2020/phase-1",
            link: "2020/phase-1",
          },
        ],
      },
      {
        text: "2019 年",
        items: [
          {
            text: "2019/phase-53",
            link: "2019/phase-53",
          },
          {
            text: "2019/phase-52",
            link: "2019/phase-52",
          },
          {
            text: "2019/phase-51",
            link: "2019/phase-51",
          },
          {
            text: "2019/phase-50",
            link: "2019/phase-50",
          },
          {
            text: "2019/phase-49",
            link: "2019/phase-49",
          },
          {
            text: "2019/phase-48",
            link: "2019/phase-48",
          },
          {
            text: "2019/phase-47",
            link: "2019/phase-47",
          },
          {
            text: "2019/phase-46",
            link: "2019/phase-46",
          },
          {
            text: "2019/phase-45",
            link: "2019/phase-45",
          },
          {
            text: "2019/phase-44",
            link: "2019/phase-44",
          },
          {
            text: "2019/phase-43",
            link: "2019/phase-43",
          },
          {
            text: "2019/phase-42",
            link: "2019/phase-42",
          },
          {
            text: "2019/phase-41",
            link: "2019/phase-41",
          },
          {
            text: "2019/phase-40",
            link: "2019/phase-40",
          },
          {
            text: "2019/phase-39",
            link: "2019/phase-39",
          },
          {
            text: "2019/phase-38",
            link: "2019/phase-38",
          },
          {
            text: "2019/phase-37",
            link: "2019/phase-37",
          },
          {
            text: "2019/phase-36",
            link: "2019/phase-36",
          },
          {
            text: "2019/phase-35",
            link: "2019/phase-35",
          },
          {
            text: "2019/phase-34",
            link: "2019/phase-34",
          },
          {
            text: "2019/phase-32",
            link: "2019/phase-32",
          },
          {
            text: "2019/phase-31",
            link: "2019/phase-31",
          },
          {
            text: "2019/phase-30",
            link: "2019/phase-30",
          },
          {
            text: "2019/phase-29",
            link: "2019/phase-29",
          },
          {
            text: "2019/2019-07-15",
            link: "2019/2019-07-15",
          },
          {
            text: "2019/2019-07-08",
            link: "2019/2019-07-08",
          },
          {
            text: "2019/2019-07-01",
            link: "2019/2019-07-01",
          },
          {
            text: "2019/2019-06-24",
            link: "2019/2019-06-24",
          },
          {
            text: "2019/2019-06-17",
            link: "2019/2019-06-17",
          },
          {
            text: "2019/2019-06-10",
            link: "2019/2019-06-10",
          },
          {
            text: "2019/2019-06-03",
            link: "2019/2019-06-03",
          },
          {
            text: "2019/2019-05-27",
            link: "2019/2019-05-27",
          },
          {
            text: "2019/2019-05-20",
            link: "2019/2019-05-20",
          },
          {
            text: "2019/2019-05-13",
            link: "2019/2019-05-13",
          },
          {
            text: "2019/2019-05-06",
            link: "2019/2019-05-06",
          },
          {
            text: "2019/2019-04-29",
            link: "2019/2019-04-29",
          },
          {
            text: "2019/2019-04-22",
            link: "2019/2019-04-22",
          },
          {
            text: "2019/2019-04-15",
            link: "2019/2019-04-15",
          },
          {
            text: "2019/2019-04-08",
            link: "2019/2019-04-08",
          },
          {
            text: "2019/2019-04-01",
            link: "2019/2019-04-01",
          },
          {
            text: "2019/2019-03-25",
            link: "2019/2019-03-25",
          },
          {
            text: "2019/2019-03-18",
            link: "2019/2019-03-18",
          },
          {
            text: "2019/2019-03-11",
            link: "2019/2019-03-11",
          },
          {
            text: "2019/2019-03-04",
            link: "2019/2019-03-04",
          },
          {
            text: "2019/2019-02-25",
            link: "2019/2019-02-25",
          },
          {
            text: "2019/2019-02-18",
            link: "2019/2019-02-18",
          },
          {
            text: "2019/2019-02-11",
            link: "2019/2019-02-11",
          },
          {
            text: "2019/2019-02-04",
            link: "2019/2019-02-04",
          },
          {
            text: "2019/2019-01-28",
            link: "2019/2019-01-28",
          },
          {
            text: "2019/2019-01-21",
            link: "2019/2019-01-21",
          },
          {
            text: "2019/2019-01-07",
            link: "2019/2019-01-07",
          },
        ],
      },
      {
        text: "2018 年",
        items: [
          {
            text: "2018/2018-12-31",
            link: "2018/2018-12-31",
          },
          {
            text: "2018/2018-12-17",
            link: "2018/2018-12-17",
          },
          {
            text: "2018/2018-12-10",
            link: "2018/2018-12-10",
          },
          {
            text: "2018/2018-12-03",
            link: "2018/2018-12-03",
          },
          {
            text: "2018/2018-11-26",
            link: "2018/2018-11-26",
          },
          {
            text: "2018/2018-11-19",
            link: "2018/2018-11-19",
          },
          {
            text: "2018/2018-11-12",
            link: "2018/2018-11-12",
          },
          {
            text: "2018/2018-11-05",
            link: "2018/2018-11-05",
          },
          {
            text: "2018/2018-10-29",
            link: "2018/2018-10-29",
          },
          {
            text: "2018/2018-10-22",
            link: "2018/2018-10-22",
          },
          {
            text: "2018/2018-10-08",
            link: "2018/2018-10-08",
          },
          {
            text: "2018/2018-09-24",
            link: "2018/2018-09-24",
          },
          {
            text: "2018/2018-09-17",
            link: "2018/2018-09-17",
          },
          {
            text: "2018/2018-09-10",
            link: "2018/2018-09-10",
          },
          {
            text: "2018/2018-09-03",
            link: "2018/2018-09-03",
          },
          {
            text: "2018/2018-08-27",
            link: "2018/2018-08-27",
          },
          {
            text: "2018/2018-08-13",
            link: "2018/2018-08-13",
          },
          {
            text: "2018/2018-08-06",
            link: "2018/2018-08-06",
          },
          {
            text: "2018/2018-07-30",
            link: "2018/2018-07-30",
          },
          {
            text: "2018/2018-07-23",
            link: "2018/2018-07-23",
          },
          {
            text: "2018/2018-07-16",
            link: "2018/2018-07-16",
          },
          {
            text: "2018/2018-07-02",
            link: "2018/2018-07-02",
          },
          {
            text: "2018/2018-06-25",
            link: "2018/2018-06-25",
          },
          {
            text: "2018/2018-06-18",
            link: "2018/2018-06-18",
          },
          {
            text: "2018/2018-06-11",
            link: "2018/2018-06-11",
          },
          {
            text: "2018/2018-06-04",
            link: "2018/2018-06-04",
          },
          {
            text: "2018/2018-05-28",
            link: "2018/2018-05-28",
          },
          {
            text: "2018/2018-05-14",
            link: "2018/2018-05-14",
          },
          {
            text: "2018/2018-05-07",
            link: "2018/2018-05-07",
          },
          {
            text: "2018/2018-04-30",
            link: "2018/2018-04-30",
          },
          {
            text: "2018/2018-04-23",
            link: "2018/2018-04-23",
          },
          {
            text: "2018/2018-04-16",
            link: "2018/2018-04-16",
          },
          {
            text: "2018/2018-04-09",
            link: "2018/2018-04-09",
          },
          {
            text: "2018/2018-04-02",
            link: "2018/2018-04-02",
          },
          {
            text: "2018/2018-03-26",
            link: "2018/2018-03-26",
          },
          {
            text: "2018/2018-03-19",
            link: "2018/2018-03-19",
          },
          {
            text: "2018/2018-03-12",
            link: "2018/2018-03-12",
          },
          {
            text: "2018/2018-03-05",
            link: "2018/2018-03-05",
          },
          {
            text: "2018/2018-02-26",
            link: "2018/2018-02-26",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/tower1229/frontend-weekly" },
    ],

    search: {
      provider: "local",
    },
  },
});

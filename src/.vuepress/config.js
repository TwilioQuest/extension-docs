module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "TwilioQuest Extensions",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Get started building new adventures in TwilioQuest.",

  base: "/extension-docs/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#F22F46" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://www.twilio.com/quest/next/favicon.png",
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "API Reference",
        link: "/api/",
      },
      {
        text: "Examples",
        link: "/examples/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            "",
            "architecture",
            "levels",
            "maps",
            "objectives",
            "npcs",
            "events",
            "custom_objects",
            "distribution",
            "back_date_tq_version",
          ],
        },
      ],
      "/api/": [
        {
          title: "API Reference",
          collapsable: false,
          children: [
            "",
            "levels",
            "objectives",
            "events",
            "objects",
            "custom_objects",
            "conversations",
          ],
        },
      ],
      "/examples/": [
        {
          title: "Examples",
          collapsable: false,
          children: [
            "",
            "check-player-holding-item",
            "load-relative-images",
            "slideshow-extension",
            "lockable-doors",
          ],
        },
      ],
    },
  },

  // Distribution
  dest: "docs",

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

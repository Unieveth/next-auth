// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  gettingStarted: [
    {
      type: "autogenerated",
      dirName: "getting-started",
    },
  ],
  guides: [
    {
      type: "autogenerated",
      dirName: "guides",
    },
  ],
  reference: [
    "reference/index",
    {
      type: "category",
      label: "@auth/core",
      link: {
        type: "doc",
        id: "reference/core/modules/main",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "reference/03-core/modules",
          // See: https://github.com/facebook/docusaurus/issues/5689
          // exclude: ["index"],
        },
        {
          type: "category",
          label: "Reflections",
          collapsed: true,
          className: "reflection-category", // See src/index.css
          items: [
            {
              type: "autogenerated",
              dirName: "reference/03-core/functions",
            },
            {
              type: "autogenerated",
              dirName: "reference/03-core/interfaces",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "@auth/nextjs",
      link: {
        type: "doc",
        id: "reference/nextjs/index",
      },
      items: [
        "reference/nextjs/client",
        {
          type: "link",
          label: "NextAuth.js (next-auth)",
          href: "https://next-auth.js.org",
        },
      ],
    },
    {
      type: "category",
      label: "@auth/sveltekit",
      link: {
        type: "doc",
        id: "reference/sveltekit/index",
      },
      items: [],
    },
    {
      type: "category",
      label: "Database Adapters",
      link: {
        type: "doc",
        id: "reference/adapters/overview",
      },
      items: [],
    },
    "reference/utilities/client",
    "reference/warnings",
    "reference/errors",
  ],
  concepts: [
    {
      type: "autogenerated",
      dirName: "concepts",
    },
  ],
}

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  future: {
    experimental_faster: true,
    v4: true,
  },
  title: 'The Icelandic Now Project',
  tagline: 'The project committed to making Icelandic more learnable',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://icelandicnow.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // baseUrl: '/', // TODO: Change this back when in production

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tbrennan6', // Usually your GitHub org/user name.
  projectName: 'IcelandicNow', // Usually your repo name.

  // TODO: Fix links and change back to 'throw'
  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          path: './articles',
          routeBasePath: 'articles',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/icelandicnow_sheep.png',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Articles',
          position: 'left',
          items: [
            {label: 'All Articles', to: '/articles'},
            {label: 'Dev Blog', to: '/articles/tags/devblog'},
            {label: 'FAQ', to: '/articles/tags/faq'},
            {label: 'Grammar', to: '/articles/tags/grammar'},
            {label: 'How Do You', to: '/articles/tags/howdoyou'},
            {label: 'Resource Feature', to: '/articles/tags/resource'},
            {label: 'Top post', to: '/articles/tags/toppost'},
            {label: 'Vocabulary', to: '/articles/tags/vocabulary'},
            // one entry per tag key in tags.yml
          ],
        },
        {to: '/docs/welcome', label: 'Icelandic Courses', position: 'left'},
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Icelandic Courses',
        // },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        {to: '/resources', label: 'Other Resources', position: 'left'},
        {to: '/about', label: 'About', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Articles',
              to: '/articles',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/2eeRbCMeny',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Articles',
              to: '/articles',
            },
            {
              label: 'Other Resources',
              to: '/resources',
            },
          ],
        },
      ],
      copyright: `©${new Date().getFullYear()} Icelandic Now`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // Customize the keyboard shortcut to focus search bar (default is "mod+k"):
        // searchBarShortcutKeymap: "s", // Use 'S' key
        // searchBarShortcutKeymap: "ctrl+shift+f", // Use Ctrl+Shift+F

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],
};

export default config;

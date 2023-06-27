// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DataComb',
  tagline: 'Documentação de Data Science',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://raphael-ss.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'raphael-ss', // Usually your GitHub org/user name.
  projectName: 'raphael-ss.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog:false,
        //math: {
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DataComb',
        logo: {
          alt: 'datacomb-logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Intro',
          },
          {
            href: '/docs/author',
            type: 'docSidebar',
            position: 'left',
            label: 'Sobre o Autor',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          //{to: '/math', label: 'Matemática e Estatística', position: 'left'},
          {
            href: 'https://github.com/raphael-ss/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Índice',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
              {
                label: 'Sobre o Autor',
                to: '/docs/author',
              },
            ],
          },
          {
            title: 'Links Úteis',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
              {
                label: 'ChatGPT',
                href: 'https://chat.openai.com/',
              },
              {
                label: 'Python3 Docs',
                href: 'https://docs.python.org/3/',
              },
            ],
          },
          {
            title: 'Extra',
            items: [
              //{
              //  label: 'Blog',
              //  to: '/blog',
              //},
              {
                label: 'GitHub',
                href: 'https://github.com/raphael-ss',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DataComb - Data Science Docs, Made by raphael-ss. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

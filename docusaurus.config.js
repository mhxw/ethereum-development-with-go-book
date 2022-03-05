// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ethereum Development with Go',
  tagline: '用Go来做以太坊开发',
  url: 'https://mhxw.life',
  baseUrl: '/ethereum-development-with-go-book/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mhxw', // Usually your GitHub org/user name.
  projectName: 'ethereum-development-with-go-book', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mhxw/ethereum-development-with-go-book/tree/dev/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ethereum Development with Go',
        logo: {
          alt: 'MHXW Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'zh/README',
            position: 'left',
            label: '中文',
          },
          {
            type: 'doc',
            docId: 'en/README',
            position: 'left',
            label: 'English',
          },
          {
            href: 'https://github.com/mhxw/ethereum-development-with-go-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '中文',
                to: '/zh/README',
              },
              {
                label: 'English',
                to: '/en/README',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Learning Materials',
                href: 'https://github.com/mhxw/hyperledger',
              },
              {
                label: 'Solidity by Example 中文版',
                href: 'https://mhxw.life/solidity-by-example-cn/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
               href: 'https://mhxw.life',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mhxw',
              },
            ],
          },
        ],
        copyright: `2018 - ${new Date().getFullYear()} MHXW`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

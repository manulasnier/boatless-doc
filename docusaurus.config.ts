import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'boatless',
  tagline: 'LESS CSS starter toolkit for web integrators',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://boatless.manulasnier.com',
  baseUrl: '/',

  organizationName: 'manulasnier',
  projectName: 'boatless-doc',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          editUrl: 'https://github.com/manulasnier/boatless-doc/tree/main/',
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'boatless logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        height: 40,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
          docsPluginId: 'default',
        },
        {
          href: 'https://github.com/manulasnier/boatless',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/boatless',
          label: 'npm',
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
            {label: 'Getting Started', to: '/docs'},
            {label: 'Variables', to: '/docs/variables'},
            {label: 'Mixins', to: '/docs/mixins'},
            {label: 'Layout', to: '/docs/mixins/layout'},
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/manulasnier/boatless',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/boatless',
            },
            {
              label: 'Issues',
              href: 'https://github.com/manulasnier/boatless/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Manu Lasnier. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['less', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

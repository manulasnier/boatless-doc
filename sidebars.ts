import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Getting Started',
    },
    {
      type: 'doc',
      id: 'variables',
      label: 'Variables & Breakpoints',
    },
    {
      type: 'category',
      label: 'Mixins',
      items: [
        'mixins/index',
        'mixins/layout',
        'mixins/effects',
        'mixins/typography',
        'mixins/forms',
      ],
    },
    {
      type: 'doc',
      id: 'components',
      label: 'Components',
    },
    {
      type: 'doc',
      id: 'grid',
      label: 'Grid System',
    },
    {
      type: 'doc',
      id: 'helpers',
      label: 'Helpers',
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Changelog',
    },
  ],
};

export default sidebars;

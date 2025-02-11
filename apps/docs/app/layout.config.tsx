import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { GithubIcon } from 'lucide-react';
import { UiLogo } from './logo';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <UiLogo className="h-4 w-auto max-w-full" />,
  },
  links: [
    {
      text: 'GitHub',
      url: 'https://github.com/prodkt/cloud',
      icon: <GithubIcon />,
    },
  ],
};

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { GithubIcon } from 'lucide-react';
import {LogoUi} from './logo';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <LogoUi className="h-8 w-auto" />,
  },
  links: [
    {
      text: 'GitHub',
      url: 'https://github.com/prodkt/cloud',
      icon: <GithubIcon />,
    },
  ],
};

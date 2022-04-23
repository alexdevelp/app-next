import { LinkProps } from 'next/link';
import { ReactElement } from 'react';

export interface LinkInterface extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

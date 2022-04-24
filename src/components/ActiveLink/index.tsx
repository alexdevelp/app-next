import Link from 'next/link';
import { cloneElement } from 'react';
import { useRouter } from 'next/router';
import { LinkInterface } from '../../interfaces/LinkInterface';

export function ActiveLink({
  children,
  activeClassName,
  ...otherProps
}: LinkInterface) {
  const { asPath } = useRouter();
  const className = asPath === otherProps.href ? activeClassName : '';

  return <Link {...otherProps}>{cloneElement(children, { className })}</Link>;
}

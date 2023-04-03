import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '../../lib/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

import { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.CLEAR,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

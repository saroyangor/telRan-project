import React from 'react';

import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames";
import { AppLink } from "@/shared/ui/AppLink";

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.navbar, [className])}>
      <ThemeSwitcher />

      <div className={cls.links}>
        <AppLink to='/'>Главная</AppLink>
        <AppLink to='/about'>О нас</AppLink>
      </div>
    </div>
  );
};
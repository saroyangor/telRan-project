import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, [className])}>
      <div className={cls.links}>
        <AppLink to="/">{t('Главная')}</AppLink>
        <AppLink to="/about">{t('О нас')}</AppLink>
      </div>
    </div>
  );
};

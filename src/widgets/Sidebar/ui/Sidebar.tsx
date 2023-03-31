import React, { useState } from "react";

import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from '@/shared/lib/classNames';
import { Button } from "@/shared/ui/Button";

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div
      className={classNames(cls.Sidebar, [className], {[cls.collapsed]: collapsed})}
    >
      <Button onClick={onToggle}>Toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* LangSwitcher */}
      </div>
    </div>
  );
};

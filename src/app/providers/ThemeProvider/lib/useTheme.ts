import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

type useThemeResult = [theme: Theme | undefined, toggleTheme: () => void]

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    if (setTheme) {
      setTheme(newTheme as Theme);
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return [theme, toggleTheme];
}

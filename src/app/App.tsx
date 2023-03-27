import React from 'react';
import { Link } from 'react-router-dom';

import { classNames } from "@/shared/lib/classNames";

import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

import './styles/index.scss';

const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>

      <AppRouter />
    </div>
  );
};

export default App;
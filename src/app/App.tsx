import React from 'react';

import { classNames } from "@/shared/lib/classNames";
import { Navbar } from "@/widgets/Navbar";

import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

import './styles/index.scss';

const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />

      <button onClick={toggleTheme}>TOGGLE</button>

      <AppRouter />
    </div>
  );
};

export default App;
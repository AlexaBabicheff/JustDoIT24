import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../actions/ui';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add(styles.dark);
      document.body.classList.remove(styles.light);
      console.log(theme);
    } else if (theme === 'dark') {
      document.body.classList.remove(styles.dark);
      document.body.classList.add(styles.light);
      console.log(theme);
    }
  }, [theme]);

  return (
    <button onClick={() => dispatch(switchTheme())}>Переключить тему</button>
  );
};

export default ThemeSwitcher;
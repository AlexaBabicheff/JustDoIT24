import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../actions/ui";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add(styles.light);
      document.body.classList.remove(styles.dark);
    } else if (theme === "dark") {
      document.body.classList.remove(styles.light);
      document.body.classList.add(styles.dark);
    }
  }, [theme]);

  const toggleDarkMode = () => {
    dispatch(switchTheme());
  };

  const darkMode = theme === "dark" ? "dark" : "light";
  const btnActive = darkMode === "dark" ? styles.active : styles.normal;

  return (
    <div className={styles.dark_light}>
      <button className={styles.btnActive} onClick={toggleDarkMode}>
        {darkMode === "dark" ? "Light mode" : "Dark mode"}
      </button>
    </div>

  );
};

export default ThemeSwitcher;


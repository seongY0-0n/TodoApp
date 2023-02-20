import React, { useContext } from "react";
import styles from "./Header.module.css";
import { DarkModeContext, useDarkMode } from "./../context/DarkModeContext";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.Btndark} onClick={() => toggleDarkMode()}>
        {darkMode ? <MdDarkMode /> : <BsFillSunFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              } `}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

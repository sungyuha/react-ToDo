import React from "react";
import { useDarkMode } from "../Context/DarkModeContext";
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

const Header = ({filters, filter, onFilterChange}) => {
    // hook을 이용해서 값을 받아옴
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <>
            <header className={styles.header}>
                <button onClick={toggleDarkMode} className={styles.toggle}>
                    {/* 다크모드가 아이라면 달모양을 */}
                    {!darkMode && <HiMoon />}
                    {/* 다크모드인 경우에는 해모양을*/}
                    {darkMode && <HiSun />}
                </button>
                <ul className={styles.filters}>
                    {filters.map((value, index) => (
                        <li key={index}>
                            <button 
                                className={`${styles.filter} ${
                                    filter === value && styles.selected
                                }`}
                                onClick={() => onFilterChange(value)}
                                >
                                {value}
                            </button>
                        </li>
                    ))}
                </ul>
            </header> 
        </>
    )
}

export default Header;
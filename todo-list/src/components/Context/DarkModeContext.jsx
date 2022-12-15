import { useEffect } from "react";
import {createContext, useContext, useState} from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    // flase로 라이트모드로 시작
    const [darkMode, setDarkMode] = useState(false);
    // toggle만 누르면 자식들은 반대로 설정
    const toggleDarkMode = () => {
        // 다크모드와 반대
        setDarkMode(!darkMode);
        updateDarkMode(darkMode);
    };

    useEffect(() => {
        // 다크모드인지 변수에다 저장해서 기억
        const isDark = 
        (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
            window.matchMedia('(prefers-color-scheme: dark)').matches));
        // 내부 상태에 isDark 업데이트
        setDarkMode(isDark);
        updateDarkMode(isDark);
    }, []);
    
    return (
        // children 중에, 즉 필요한 자식 들 중에 darkMode와 toggleDarkMode에 접근
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

const updateDarkMode = (darkMode) => {
    if(darkMode) {
        // 만약 다크모드라면 
        document.documentElement.classList.add('dark');
        // 로컬스토리지에 저장
        localStorage.theme = 'dark';
    } else {
        // 다크모드가 아니라면 - 다크 클래스 제거
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'ligth';
    }
}
export const useDarkMode = () => useContext(DarkModeContext);
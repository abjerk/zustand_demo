import { useThemeStore } from '../store.ts';
import React from 'react';

const ThemeToggle: React.FC = () => {
    const { isDarkMode, themeClass, toggleTheme } = useThemeStore();

    return (
        <div className='theme_section'>
            <h1>Theme State with Zustand</h1>
            <h3 className={`${themeClass}`}>State: isDarkMode = {isDarkMode ? "true" : "false"}</h3>
            <button onClick={toggleTheme} className={`${themeClass}`}>
                {isDarkMode ? 'too dark!' : 'ah! too bright!'}
            </button>
        </div>
    )
}

export default ThemeToggle;
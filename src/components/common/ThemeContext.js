import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';

export const ThemeProvider = ({ children }) => {
    // Check local storage or system preference
    const getInitialTheme = () => {
        const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        if (savedTheme) {
            return savedTheme;
        }
        if (supportsMatchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        // Update data-theme attribute on document root
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Listen for system preference changes
    useEffect(() => {
        if (!supportsMatchMedia) return undefined;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

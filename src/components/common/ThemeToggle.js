import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

/**
 * ThemeToggle renders in two modes:
 *  - Fixed floating button (default): rendered in App.js with no className prop.
 *    Appears top-right, hides on scroll down, reappears on scroll up.
 *  - Inline button: rendered anywhere else (e.g. Footer) by passing ANY className prop.
 *    Sits in the normal document flow, always visible.
 */
const ThemeToggle = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    const [visible, setVisible] = useState(true); // Default to visible to start
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        setVisible(true); // Ensure visible on mount
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling DOWN -> Hide
                setVisible(false);
            } else {
                // Scrolling UP -> Show
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // If passed a className (like in footer), behave normally (always visible)
    const isFixedToggle = !className;

    if (!isFixedToggle) {
        return (
            <button
                className={`theme-toggle-btn ${className || ''}`}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Bright Mode"}
            >
                <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
            </button>
        );
    }

    return (
        <button
            className={`theme-toggle-btn fixed-toggle ${visible ? 'visible' : 'hidden'}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
                position: 'fixed',
                top: '15px',
                right: '15px',
                zIndex: 9999,
                backgroundColor: 'var(--surface-color)',
                color: 'var(--contrast-color)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                transform: visible ? 'translateY(0)' : 'translateY(-100px)',
                transition: 'transform 0.4s ease-in-out, background-color 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                border: 'none',
                cursor: 'pointer'
            }}
        >
            <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
        </button>
    );
};

export default ThemeToggle;

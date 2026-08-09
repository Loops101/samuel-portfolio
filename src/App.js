import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { ThemeProvider } from './components/common/ThemeContext';
import Landing from './pages/Landing';
import Developer from './pages/Developer';
import Soc from './pages/Soc';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
    const [loading, setLoading] = useState(true);

    // Preloader
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Initialize AOS (scroll animations) once, globally
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
        script.async = true;
        script.onload = () => {
            if (window.AOS) {
                window.AOS.init({
                    duration: 600,
                    easing: 'ease-in-out',
                    once: true,
                    mirror: false,
                });
            }
        };
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <ThemeProvider>
            {loading && (
                <div id="preloader">
                    <img src="assets/img/logo/LogoWhite.png" alt="Loading..." />
                </div>
            )}

            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/developer" element={<Developer />} />
                    <Route path="/soc" element={<Soc />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;

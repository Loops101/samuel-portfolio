import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * RouteChangeEffects — runs on every client-side navigation:
 *  1. Resets scroll position to the top.
 *  2. Refreshes AOS (scroll-reveal animations), which only scans the DOM
 *     once on load by default. Without this, elements rendered by a newly
 *     mounted route (e.g. navigating from "/" to "/developer") stay at
 *     their pre-animation opacity: 0 until a full page reload.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Let the new page's DOM (and its data-aos elements) paint first,
        // then tell AOS to re-scan and recalculate trigger offsets.
        const refreshAOS = () => {
            if (window.AOS && typeof window.AOS.refreshHard === 'function') {
                window.AOS.refreshHard();
            } else if (window.AOS && typeof window.AOS.refresh === 'function') {
                window.AOS.refresh();
            }
        };

        const raf = requestAnimationFrame(() => {
            // A second frame ensures layout has settled for accurate offsets.
            requestAnimationFrame(refreshAOS);
        });

        return () => cancelAnimationFrame(raf);
    }, [pathname]);

    return null;
};

export default ScrollToTop;

import { useEffect, useState } from 'react';

/** Tracks which section (by id) is currently in view for nav highlighting. */
const useScrollSpy = (defaultId) => {
    const [activeSection, setActiveSection] = useState(defaultId);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach((section) => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 200;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return activeSection;
};

export default useScrollSpy;

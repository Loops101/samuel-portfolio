import { useEffect } from 'react';

const setMeta = (attr, key, content) => {
    if (!content) return;
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
};

const setCanonical = (href) => {
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    link.setAttribute('href', href);
};

/**
 * Helmet — minimal, dependency-free per-page SEO manager.
 * Sets document title, meta description, and Open Graph tags on mount.
 */
export const Helmet = ({ title, description }) => {
    useEffect(() => {
        if (title) document.title = title;
        setMeta('name', 'description', description);
        setMeta('property', 'og:title', title);
        setMeta('property', 'og:description', description);
        const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
        setMeta('property', 'og:url', canonicalUrl);
        setMeta('name', 'twitter:title', title);
        setMeta('name', 'twitter:description', description);
        setCanonical(canonicalUrl);
    }, [title, description]);

    return null;
};

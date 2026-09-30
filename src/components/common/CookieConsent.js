import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'site-consent-acknowledged';

const CookieConsent = () => {
    const [visible, setVisible] = useState(() => localStorage.getItem(STORAGE_KEY) !== 'true');

    const acknowledge = () => {
        localStorage.setItem(STORAGE_KEY, 'true');
        setVisible(false);
    };

    useEffect(() => {
        const handleOpen = () => setVisible(true);
        window.addEventListener('open-cookie-settings', handleOpen);
        return () => window.removeEventListener('open-cookie-settings', handleOpen);
    }, []);

    if (!visible) return null;

    return (
        <aside className="cookie-consent" role="dialog" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-copy">
            <div className="cookie-consent-copy">
                <h2 id="cookie-consent-title">Privacy notice</h2>
                <p id="cookie-consent-copy">
                    This site stores your theme and this notice preference in your browser. It does not use analytics or advertising cookies.
                </p>
            </div>
            <button type="button" className="btn btn-primary cookie-consent-action" onClick={acknowledge}>
                Got it
            </button>
        </aside>
    );
};

export default CookieConsent;
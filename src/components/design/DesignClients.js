import React from 'react';
import { additionalClients } from '../../data/design/collections';

/**
 * DesignClients — "Selected Clients & Collaborations". Client names come
 * straight from the collection data; nothing is invented and no logos are
 * fabricated.
 */
const DesignClients = ({ collections = [] }) => {
    const clients = Array.from(new Set([
        ...collections.map((c) => c.client).filter(Boolean),
        ...additionalClients,
    ]));

    if (clients.length === 0) return null;

    return (
        <section id="clients" className="design-clients" data-aos="fade-up">
            <span className="design-eyebrow">Selected Clients &amp; Collaborations</span>
            <div className="design-clients-list">
                {clients.map((client) => <span key={client}>{client}</span>)}
            </div>
        </section>
    );
};

export default DesignClients;

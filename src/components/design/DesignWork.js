import React, { useMemo, useState } from 'react';
import DesignProjectTile from './DesignProjectTile';
import { categoryLabel } from '../../utils/designCategories';

/**
 * DesignWork — "Explore My Work" filters plus the full masonry gallery.
 * Filter options are derived from whichever collections actually loaded, so
 * an empty category never shows an empty filter.
 */
const DesignWork = ({ collections = [], onOpen }) => {
    const [filter, setFilter] = useState('all');

    const categories = useMemo(() => {
        const used = Array.from(new Set(collections.map((c) => c.category)));
        return ['all', ...used];
    }, [collections]);

    const filtered = filter === 'all'
        ? collections
        : collections.filter((c) => c.category === filter);

    return (
        <>
            <section id="work" className="design-explore">
                <div className="design-heading" data-aos="fade-up">
                    <span className="design-eyebrow">Browse by category</span>
                    <h2>Explore My Work</h2>
                </div>

                <div className="design-filters" data-aos="fade-up" data-aos-delay="80">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className={`design-filter-pill ${filter === cat ? 'is-active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat === 'all' ? 'All' : categoryLabel(cat)}
                        </button>
                    ))}
                </div>
            </section>

            <section id="gallery" className="design-gallery-wrap">
                {filtered.length > 0 ? (
                    <div className="design-gallery" data-aos="fade-up" data-aos-delay="100">
                        {filtered.map((collection) => (
                            <div className="design-gallery-item" key={collection.tag}>
                                <DesignProjectTile collection={collection} onOpen={onOpen} variant="caption" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="design-empty-state">No work in this category yet.</p>
                )}
            </section>
        </>
    );
};

export default DesignWork;

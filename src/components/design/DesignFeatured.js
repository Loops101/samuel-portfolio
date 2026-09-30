import React from "react";
import DesignProjectTile from "./DesignProjectTile";

/**
 * DesignFeatured — "Featured Work". Shows collections flagged
 * `featured: true` (falling back to the first few) in an asymmetric bento
 * grid, with the first tile shown large.
 */
const DesignFeatured = ({ collections = [], onOpen }) => {
  const flagged = collections.filter((c) => c.featured);
  const featured = (flagged.length > 0 ? flagged : collections).slice(0, 6);

  if (featured.length === 0) return null;

  return (
    <section id="featured" className="design-featured">
      <div className="design-heading" data-aos="fade-up">
        <span className="design-eyebrow">Selected work</span>
        <h2>Featured Work</h2>
      </div>

      <div
        className="design-featured-grid"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {featured.map((collection, index) => (
          <DesignProjectTile
            key={collection.tag}
            collection={collection}
            onOpen={onOpen}
            eager={index === 0}
            variant="caption"
            className={index === 0 ? "is-large" : "is-small"}
          />
        ))}
      </div>
    </section>
  );
};

export default DesignFeatured;

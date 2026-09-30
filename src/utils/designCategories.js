// -------------------------------------------------------------------------
// DESIGN CATEGORY LABELS
// Maps a collection's category slug to a friendly display label.
// Add an entry whenever a new category appears in data/design/collections.js.
// -------------------------------------------------------------------------
export const CATEGORY_LABELS = {
    branding: 'Branding',
    posters: 'Posters',
    'social-media': 'Social Media',
    print: 'Print',
    packaging: 'Packaging',
    'ui-ux': 'UI Visuals',
    other: 'Miscellaneous',
};

export const categoryLabel = (slug) => CATEGORY_LABELS[slug] || slug;

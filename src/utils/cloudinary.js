// -------------------------------------------------------------------------
// CLOUDINARY — CLIENT-SIDE COLLECTION FETCHING
//
// IMPORTANT — why this uses TAGS and not FOLDERS:
//
// Cloudinary's Admin API is the only way to list assets by *folder*, and it
// requires your API key + API secret. Those must never ship in a static
// front-end — anyone could read them from the browser and delete or
// re-upload your media. Since this portfolio has no backend, folder listing
// is not securely possible.
//
// Cloudinary's supported no-backend alternative is the "client-side asset
// list" endpoint, which lists assets by TAG and is safe to call publicly:
//
//     https://res.cloudinary.com/<cloud_name>/image/list/<tag>.json
//
// SETUP (one-time, ~5 minutes):
//
// 1. In Cloudinary: Settings -> Security -> enable "Resource list"
//    (it is restricted by default).
//
// 2. Tag your assets to mirror your folder structure. In the Media Library
//    you can select every image in a folder and bulk-add a tag. Use the tag
//    names in data/design/collections.js, e.g. everything in
//    graphic-design/branding/ciia/ gets the tag `ciia`.
//
// After that, uploading a new image and giving it the right tag makes it
// appear on the site automatically - no code changes, no URL pasting.
// -------------------------------------------------------------------------

export const CLOUDINARY_CLOUD_NAME = "vi2vt7vv"; // TODO: replace with your Cloudinary cloud name

export const isCloudinaryConfigured = () =>
  CLOUDINARY_CLOUD_NAME !== "your-cloud-name";

/**
 * Build a Cloudinary delivery URL from a public_id, with automatic format
 * and quality so browsers get WebP/AVIF where supported.
 */
export const cld = (publicId, options = {}) => {
  if (!publicId) return "";
  if (/^https?:\/\//i.test(publicId)) return publicId;

  const {
    width = 800,
    crop = "fill",
    quality = "auto",
    format = "auto",
  } = options;
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_${format},q_${quality},c_${crop},w_${width}/${publicId}`;
};

/**
 * Build a srcSet for responsive loading, so phones never download a
 * desktop-sized original just to render a thumbnail.
 */
export const cldSrcSet = (publicId, widths = [400, 700, 1000, 1400]) => {
  if (!publicId || /^https?:\/\//i.test(publicId)) return undefined;
  return widths
    .map((w) => `${cld(publicId, { width: w, crop: "limit" })} ${w}w`)
    .join(", ");
};

/**
 * Fetch every image carrying a given tag.
 * Returns an array of { publicId, version, format, width, height, context }.
 * Resolves to [] on any failure so the UI falls back gracefully rather than
 * breaking the page.
 */
export const fetchByTag = async (tag) => {
  if (!tag || !isCloudinaryConfigured()) return [];

  try {
    const res = await fetch(
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/list/${tag}.json`,
      { cache: "no-cache" },
    );
    if (!res.ok) return [];

    const data = await res.json();
    return (data.resources || []).map((r) => ({
      publicId: r.public_id,
      version: r.version,
      format: r.format,
      width: r.width,
      height: r.height,
      // Cloudinary "context" metadata lets you set a per-image caption
      // or alt text in the Media Library without touching code.
      context: (r.context && r.context.custom) || {},
    }));
  } catch {
    return [];
  }
};

/**
 * Fetch several tags at once, returning a { [tag]: images[] } map.
 */
export const fetchCollections = async (tags = []) => {
  const results = await Promise.all(tags.map((t) => fetchByTag(t)));
  return tags.reduce((acc, tag, i) => {
    acc[tag] = results[i];
    return acc;
  }, {});
};

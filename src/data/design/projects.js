// -------------------------------------------------------------------------
// GRAPHIC DESIGN — PROJECTS
// Images are NOT stored as URLs here — they're Cloudinary "public_id"s.
// The `cld()` helper (src/utils/cloudinary.js) turns each one into an
// optimized, responsive image URL at render time. Upload your design work
// to Cloudinary, copy its public_id (e.g. "portfolio/design/ciia-cover"),
// and paste it into the `image` field below.
//
// To add a new project: push a new object onto this array. Supported
// fields:
//   title        — project name
//   client       — who it was for (omit for personal/concept work)
//   category     — used for filtering, e.g. 'branding' | 'social' | 'print'
//                  | 'ui-ux' | 'packaging' | 'other'
//   image        — Cloudinary public_id for the cover image
//   gallery      — optional array of additional Cloudinary public_ids,
//                  shown in the detail modal
//   description  — full description shown in the modal
//   shortDescription — one-line summary shown on the card itself
//   featured     — true to include in the "Featured Work" section (aim for
//                  your strongest 4-6 projects)
//   services     — array of services provided, e.g. ['Brand Identity']
//   tools        — array of tools used, e.g. ['Adobe Illustrator']
//   year         — year completed
//   status       — 'Completed' | 'Ongoing' | 'Concept'
//   link         — optional external link (e.g. live site, Behance)
// -------------------------------------------------------------------------
const projects = [
  {
    title: "Brand & Marketing Collateral",
    client: "CIIA — Cerub Insurance & Investment Agency",
    category: "branding",
    image: "portfolio/design/ciia-cover",
    gallery: [],
    featured: true,
    description:
      "Brand and marketing collateral for CIIA, an insurance and investment agency — designed alongside their website to give the brand a consistent, professional visual identity across digital and print touchpoints.",
    shortDescription: "Brand identity and marketing collateral for an insurance & investment agency.",
    services: ["Brand Collateral", "Social Media Graphics", "Marketing Materials"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    year: "2024",
    status: "Completed",
    link: "https://ciia.co.ke/",
  },
  {
    title: "Brand & Social Media Design",
    client: "Elite Vision Opticals",
    category: "social",
    image: "portfolio/design/elite-vision-cover",
    gallery: [],
    featured: true,
    description:
      "Ongoing brand and social media design work for Elite Vision Opticals, covering promotional graphics, product highlights, and social media content designed to build a clean, modern optical-retail identity.",
    shortDescription: "Social media graphics and brand visuals for an optical retailer.",
    services: ["Social Media Graphics", "Promotional Design", "Brand Visuals"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "2024 — Present",
    status: "Ongoing",
    link: "",
  },

  // -----------------------------------------------------------------------
  // Placeholder entries — replace with your other one-time / freelance
  // projects. Swap the `image` public_id and details, or delete if unused.
  // Set `featured: true` on your strongest 4-6 projects to have them appear
  // in the "Featured Work" section on the Design homepage.
  // -----------------------------------------------------------------------
  {
    title: "One-off Project — Add Your Details",
    client: "Client Name",
    category: "other",
    image: "portfolio/design/placeholder-1",
    gallery: [],
    featured: false,
    description:
      "Replace this placeholder with a description of another design project — flyers, posters, packaging, logos, or any other one-time client work you've completed.",
    shortDescription: "Placeholder — describe this project in data/design/projects.js.",
    services: ["Service 1", "Service 2"],
    tools: ["Adobe Photoshop"],
    year: "2025",
    status: "Concept",
    link: "",
  },
];

export default projects;

// -------------------------------------------------------------------------
// DESIGN COLLECTIONS
//
// Mirrors your Cloudinary folder structure:
//
//   portfolio/graphic-design/
//     ├── branding/  ├── ciia/  ├── elite-vision/  └── other/
//     ├── posters/
//     ├── social-media/
//     ├── print-design/
//     └── miscellaneous/
//
// Each entry below is ONE collection shown on the Design page. The `tag` is
// the Cloudinary tag you apply to every image in that folder (see the setup
// notes in utils/cloudinary.js). Images are then fetched and rendered
// automatically — you never paste an image URL.
//
// TO ADD A NEW COLLECTION: upload the images to a folder, bulk-tag them in
// the Media Library, then add one object here.
//
// `client` is optional and feeds the "Selected Clients" section.
// `featured: true` surfaces the collection in "Featured Work".
// -------------------------------------------------------------------------

const collections = [
  {
    title: "CIIA Brand Identity",
    client: "CIIA — Cerub Insurance & Investment Agency",
    tag: "ciia",
    coverPublicId: "EID_Al_Adha-CIIA",
    category: "branding",
    featured: true,
    description:
      "Brand and marketing collateral for CIIA, an insurance and investment agency — designed alongside their website to give the brand a consistent, professional visual identity across digital and print touchpoints.",
    services: [
      "Brand Collateral",
      "Social Media Graphics",
      "Marketing Materials",
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    year: "2024",
    link: "https://ciia.co.ke/",
  },
  {
    title: "Elite Vision Campaign",
    client: "Elite Vision Opticals",
    tag: "elite-vision",
    coverPublicId: "Free_lens_cleaner",
    category: "branding",
    featured: true,
    description:
      "Ongoing brand and campaign design for Elite Vision Opticals, covering promotional graphics, product highlights, and social content built around a clean, modern optical-retail identity.",
    services: ["Campaign Design", "Promotional Graphics", "Brand Visuals"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "2024 — Present",
    link: "",
  },
  {
    title: "Brand Work",
    client: "",
    tag: "branding",
    coverPublicId: "CIIA_Logo",
    category: "branding",
    featured: true,
    description:
      "Assorted brand identity work — logos, visual systems, and supporting collateral for various clients and projects.",
    services: ["Brand Identity", "Logo Design"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    year: "",
    link: "",
  },
  {
    title: "Posters",
    client: "",
    tag: "posters",
    category: "posters",
    featured: true,
    description:
      "Poster design work — event promotion, campaign visuals, and typographic compositions.",
    services: ["Poster Design", "Typography"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "",
    link: "",
  },
  {
    title: "Social Media Design",
    client: "",
    tag: "social-media",
    coverPublicId: "Matatu_Drama",
    category: "social-media",
    featured: true,
    description:
      "Social media graphics built for feeds and stories — promotional posts, announcements, and branded content templates.",
    services: ["Social Media Graphics", "Content Design"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "",
    link: "",
  },
  {
    title: "Print Design",
    client: "",
    tag: "print-design",
    category: "print",
    featured: false,
    description:
      "Print-ready design work — flyers, brochures, banners, and other physical marketing materials.",
    services: ["Print Design", "Layout"],
    tools: ["Adobe InDesign", "Adobe Illustrator"],
    year: "",
    link: "",
  },
  {
    title: "Miscellaneous",
    client: "",
    tag: "miscellaneous",
    category: "other",
    featured: false,
    description:
      "One-off pieces and experiments that don't fit neatly into the other collections.",
    services: ["Graphic Design"],
    tools: ["Adobe Photoshop"],
    year: "",
    link: "",
  },
];

export default collections;

// -------------------------------------------------------------------------
// ADDITIONAL CLIENTS
// Clients I've designed for whose work doesn't have its own collection
// above yet. These appear in "Selected Clients & Collaborations" alongside
// the clients attached to collections. Names are taken from the Graphic
// Design CV.
// -------------------------------------------------------------------------
export const additionalClients = [
  "JMAX Healthcare",
  "Home Prep",
  "Mapsight Services",
];

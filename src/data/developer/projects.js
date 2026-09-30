// -------------------------------------------------------------------------
// DEVELOPER — PROJECTS
// To add a project: push a new object here. Every field below is supported
// by the ProjectCard component. Omit a field (e.g. previewLink) to hide it.
//   title        — project name
//   image        — path relative to /public
//   category     — used for filtering: 'web' | 'design' | 'ml' | 'other'
//   description  — short summary
//   techstack    — comma separated or array of technologies
//   features     — optional array of key feature strings
//   date         — year or range
//   status       — 'Live' | 'In Progress' | 'Completed' | 'Archived'
//   previewLink  — live demo URL
//   githubLink   — source code URL
// -------------------------------------------------------------------------
const projects = [
  {
    title: "Charity Awoke Foundation Website",
    image: "assets/projects/CharityAwoke.png",
    category: "web",
    description:
      "A responsive NGO website showcasing community empowerment projects in Kisii, with clear donation options, impact stories, and easy navigation for visitors to learn, support, and get involved.",
    techstack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    features: [
      "Donation call-to-actions and impact storytelling",
      "Fully responsive, accessible layout",
      "Deployed and maintained in production",
    ],
    date: "2024",
    status: "Live",
    previewLink: "https://charityawokefoundation.org/",
    githubLink: "https://github.com/Sam-Loops",
  },
  {
    title: "CIIA Insurance Agency Website",
    image: "assets/projects/CIIA.png",
    category: "web",
    description:
      "A responsive insurance agency website built with integrated Web3 forms for client inquiries and lead capture.",
    techstack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Web3Forms"],
    features: [
      "Integrated Web3 Forms for serverless contact handling",
      "Mobile-first responsive design",
    ],
    date: "2024",
    status: "Live",
    previewLink: "https://ciia.co.ke/",
    githubLink: "https://github.com/Sam-Loops",
  },
  {
    title: "Music Artist Website — Mcubamba Robbah",
    image: "assets/projects/portfolio-3.webp",
    category: "web",
    description:
      "A media-rich website for Kenyan artist Mcubamba Robbah with embedded YouTube and Spotify tracks, performance highlights, merchandise, and a booking form.",
    techstack: ["React", "CSS", "YouTube & Spotify Embeds", "Email Integration"],
    features: [
      "Embedded streaming players",
      "Artist booking / contact form",
    ],
    date: "2024",
    status: "Live",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Sam-Loops",
  },
  {
    title: "Breast Cancer Prediction Model",
    image: "assets/projects/portfolio-5.webp",
    category: "ml",
    description:
      "A machine learning model that predicts whether a tumor is malignant or benign using Logistic Regression and Random Forest, trained on medical data for accurate classification.",
    techstack: ["Python", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib"],
    features: [
      "Compared Logistic Regression vs. Random Forest performance",
      "Data cleaning and exploratory analysis pipeline",
    ],
    date: "2024",
    status: "Completed",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Sam-Loops",
  },
];

export default projects;

// -------------------------------------------------------------------------
// DEVELOPER — SKILLS
// Grouped into categories for display. Add a skill by pushing an object
// with a name and proficiency (0-100) into the relevant category's `items`.
// -------------------------------------------------------------------------
const skillCategories = [
  {
    category: "Front-End Development",
    items: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Bootstrap & Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Back-End & Data",
    items: [
      { name: "PHP", level: 75 },
      { name: "Django / Python", level: 65 },
      { name: "RESTful APIs & Auth", level: 75 },
      { name: "MySQL / Database Design", level: 75 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Microsoft Azure", level: 65 },
      { name: "AWS & GCP Basics", level: 50 },
      { name: "Docker", level: 55 },
      { name: "CI/CD Concepts", level: 55 },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Adobe Photoshop / Illustrator", level: 90 },
      { name: "Figma", level: 75 },
      { name: "SEO Optimization", level: 80 },
    ],
  },
];

// Flat list used for quick tag clouds / filters
const techStack = [
  "HTML5", "CSS3", "JavaScript", "React", "PHP", "Django",
  "Tailwind CSS", "Bootstrap", "Git & GitHub", "REST APIs",
  "MySQL", "Docker", "Microsoft Azure", "Figma", "Photoshop",
];

const skills = { skillCategories, techStack };

export default skills;

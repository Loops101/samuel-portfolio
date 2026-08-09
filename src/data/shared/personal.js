// -------------------------------------------------------------------------
// SHARED PERSONAL / BRAND DATA
// Single source of truth for identity information used on the landing page
// and inherited (with mode-specific overrides) by the Developer and SOC
// portfolios. Edit this file to update your name, taglines, socials, resumes,
// or contact details everywhere at once.
// -------------------------------------------------------------------------

const logos = {
  logogradient: "assets/img/logo/LogoBlack.png",
  logo: "assets/img/logo/LogoWhite.png",
};

const personal = {
  name: "Samuel Mbuvi Obaigwa",
  firstName: "Samuel",
  location: "Nairobi, Kenya",
  profileImage: "assets/img/profile/profile-2.png",
  profileImageSquare: "assets/img/profile/profile-square-3.jpeg",

  // Used on the general landing page
  landingTagline: "Full-Stack Developer + SOC / Cybersecurity Analyst",
  landingStatement:
    "I build secure, high-performance web applications and defend the systems that run them. Pick a path to explore that side of my work.",

  // Two resume files — kept deliberately separate so each portfolio links to
  // the CV tailored to that audience.
  resumes: {
    developer: {
      label: "Full-Stack Developer CV",
      url: "assets/Resume/Samuel_Mbuvi_Obaigwa_CV_FullStack.pdf",
    },
    soc: {
      label: "SOC Analyst CV",
      url: "assets/Resume/Samuel_Mbuvi_Obaigwa_CV_SOC.pdf",
    },
  },
};

const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/samuel-obaigwa",
  github: "https://github.com/Sam-Loops",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/sammy.l.mbuvi/posts/9317405295030318/",
};

const contactDetails = {
  email: "mbuvisamm@gmail.com",
  phone: "+254 717 406 525",
  location: "Nairobi, Kenya",
  linkedin: "linkedin.com/in/samuel-obaigwa",
};

// -------------------------------------------------------------------------
// Education (shared — same academic history regardless of portfolio mode)
// -------------------------------------------------------------------------
const eduDetails = [
  { Position: "Bachelor of Science in Computer Science", Company: "Kisii University", Location: "Kisii Main Campus", Type: "Full Time", Duration: "Sep 2019 - Dec 2023" },
  { Position: "Diploma in Information Technology", Company: "Kisii University", Location: "Kisii Main Campus", Type: "Full Time", Duration: "Sep 2016 - Dec 2018" },
  { Position: "Kenya Certificate of Secondary Education (KCSE)", Company: "Nyanchwa High School", Location: "Kisii", Type: "Full Time", Duration: "Jan 2011 - Dec 2014" },
  { Position: "Kenya Certificate of Primary Education (KCPE)", Company: "Gilgil Hills Academy", Location: "Gilgil", Type: "Full Time", Duration: "Jan 2002 - Dec 2010" },
];

// -------------------------------------------------------------------------
// Certifications — shared pool, tagged so each portfolio can filter to what's
// relevant. Add `tags: ['dev']`, `['soc']`, or `['dev','soc']` to any entry.
// -------------------------------------------------------------------------
const certDetails = [
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
    organization: "Microsoft",
    earnedOn: "May 2025",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/SamuelMbuvi-4559/6415AEBA0A872215?sharingId=BFF5ECEE6F9AF62F",
    tags: ["soc", "dev"],
  },
  {
    title: "The Cyber Security Threat Landscape",
    organization: "LinkedIn Learning",
    earnedOn: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/f4d9026dd6ffaeb3e171192d2d364ff76d37017fd54355c4a0613168d558e89e",
    tags: ["soc"],
  },
  {
    title: "Microsoft ADC Cloud Security Specialist",
    organization: "Cyber Shujaa & Microsoft ADC",
    earnedOn: "Apr 2025 - Jun 2025",
    link: "",
    tags: ["soc", "dev"],
  },
  {
    title: "EC-Council Essentials: Ethical Hacking Essentials (EHE)",
    organization: "Cyber Shujaa",
    earnedOn: "Oct 2025 - Nov 2025",
    link: "",
    tags: ["soc"],
  },
  {
    title: "SEO Certified",
    organization: "HubSpot Academy",
    earnedOn: "Sep 2025",
    link: "https://app-eu1.hubspot.com/academy/achievements/gsdvf7rs/en/1/samuel-mbuvi/seo",
    tags: ["dev"],
  },
  {
    title: "Full Stack Web Development",
    organization: "eMobilis Technology Institute",
    earnedOn: "Nov 2025 - Dec 2025",
    link: "",
    status: "Completed — awaiting certification",
    tags: ["dev"],
  },
  {
    title: "Artificial Intelligence Training",
    organization: "ICT Authority, Kenya (with Pathways Technologies)",
    earnedOn: "May 2026 - Jul 2026",
    link: "",
    tags: ["dev", "soc"],
  },
];

const personalDetails = {
  ...personal,
  about: `I am a passionate and versatile tech creative with hands-on experience in web development, IT support, and visual design. I enjoy turning ideas into clean, functional digital experiences — whether that's building responsive websites, designing eye-catching graphics, or solving real-world tech problems.

  I'm constantly learning and upskilling in areas like cyber security. When I'm not coding or designing, you'll probably find me crafting music mixes, editing videos, or managing content across social media. I love blending tech and creativity to tell stories, solve problems, and connect with people.`,
};

const shared = {
  logos,
  personal,
  personalDetails,
  socialMediaUrl,
  contactDetails,
  eduDetails,
  certDetails,
};

export default shared;

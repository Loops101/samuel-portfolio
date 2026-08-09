// -------------------------------------------------------------------------
// SOC — SKILLS
// Grouped into categories for display, sourced from the SOC Analyst CV.
// Add a skill by pushing an object with a name and proficiency (0-100)
// into the relevant category's `items`.
// -------------------------------------------------------------------------
const skillCategories = [
  {
    category: "Security Operations",
    items: [
      { name: "Security Monitoring", level: 70 },
      { name: "Incident Detection & Response", level: 65 },
      { name: "Log & Threat Analysis", level: 65 },
      { name: "Vulnerability Assessment", level: 60 },
    ],
  },
  {
    category: "Identity & Access",
    items: [
      { name: "Identity & Access Management (IAM)", level: 70 },
      { name: "Role-Based Access Control (RBAC)", level: 75 },
      { name: "Active Directory Administration", level: 70 },
      { name: "Microsoft 365 Administration", level: 65 },
    ],
  },
  {
    category: "Cloud & Platform Security",
    items: [
      { name: "Microsoft Azure Security", level: 65 },
      { name: "Microsoft Sentinel (SIEM)", level: 60 },
      { name: "Microsoft Defender for Cloud", level: 60 },
      { name: "Azure Firewall & NSGs / Key Vault", level: 60 },
    ],
  },
  {
    category: "Networking & Infrastructure",
    items: [
      { name: "TCP/IP, DNS, DHCP, VPN", level: 75 },
      { name: "Network Troubleshooting", level: 75 },
      { name: "Windows Administration", level: 75 },
      { name: "Endpoint Security & Hardening", level: 65 },
    ],
  },
];

// Flat list used for quick tag clouds / filters
const toolTags = [
  "Microsoft Sentinel", "Microsoft Defender for Cloud", "Azure Firewall",
  "Azure Key Vault", "Azure NSGs", "Active Directory", "RBAC",
  "TCP/IP", "DNS/DHCP", "VPN", "Windows Admin",
];

const skills = { skillCategories, toolTags };

export default skills;

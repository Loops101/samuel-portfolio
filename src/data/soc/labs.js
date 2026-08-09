// -------------------------------------------------------------------------
// SOC — LABS & PRACTICAL EXERCISES
// To add a new lab: push a new object onto this array. Supported fields:
//   title, description, skills[], tools[], platform, difficulty, date,
//   whatILearned, writeUpLink, evidenceImage
// Leave a field out (or set to null) to hide it — the LabCard component
// only renders fields that are present. Entries below are sourced directly
// from the SOC Analyst CV; extend them with write-ups/screenshots as you
// produce them.
// -------------------------------------------------------------------------
const labs = [
  {
    title: "Azure Network Security Projects",
    description:
      "Configured and secured Network Security Groups (NSGs), Service Endpoints, and Storage solutions under the Microsoft ADC Programme.",
    skills: ["Network Segmentation", "Cloud Security", "Access Control"],
    tools: ["Microsoft Azure", "NSGs", "Azure Storage"],
    platform: "Microsoft Azure",
    difficulty: "Intermediate",
    date: "2025",
    whatILearned:
      "How to design network boundaries in a cloud environment and restrict traffic and storage access to only what's required.",
    writeUpLink: null,
    evidenceImage: null,
  },
  {
    title: "Azure Cloud Security Labs",
    description:
      "Configured and secured Azure resources using Network Security Groups (NSGs), Azure Firewall, Role-Based Access Control (RBAC), and Azure Key Vault.",
    skills: ["Identity & Access Management", "Secrets Management", "Firewall Configuration"],
    tools: ["Azure Firewall", "Azure Key Vault", "Azure RBAC"],
    platform: "Microsoft Azure",
    difficulty: "Intermediate",
    date: "2025",
    whatILearned:
      "How to layer defenses — network controls, identity controls, and secrets management — into a single hardened cloud environment.",
    writeUpLink: null,
    evidenceImage: null,
  },
  {
    title: "Security Operations & Threat Detection Labs",
    description:
      "Conducted hands-on security monitoring and threat analysis using Microsoft Sentinel and Microsoft Defender for Cloud. Investigated simulated security events, analyzed logs, and practiced incident detection and response in a lab environment.",
    skills: ["Log Analysis", "Incident Detection", "Threat Analysis", "Incident Response"],
    tools: ["Microsoft Sentinel", "Microsoft Defender for Cloud"],
    platform: "Microsoft Azure / Sentinel",
    difficulty: "Intermediate",
    date: "2025",
    whatILearned:
      "A practical SIEM workflow — from alert triage through log investigation to documenting a response — inside Microsoft Sentinel.",
    writeUpLink: null,
    evidenceImage: null,
  },
];

// -------------------------------------------------------------------------
// Placeholder — add your next lab here as you complete it, e.g.:
// {
//   title: "TryHackMe: SOC Level 1 Path",
//   description: "...",
//   skills: [...],
//   tools: [...],
//   platform: "TryHackMe",
//   difficulty: "Beginner",
//   date: "2026",
//   whatILearned: "...",
//   writeUpLink: "https://...",
//   evidenceImage: "assets/soc/labs/soc-l1-01.png",
// },
// -------------------------------------------------------------------------

export default labs;

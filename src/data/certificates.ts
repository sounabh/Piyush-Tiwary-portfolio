// data/certificates.ts
import {
  Brain,
  Bot,
  Database,
  Trophy,
  Award,
  Code2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { assetUrl } from "../../config/site";

export interface Certificate {
  id: number;
  featured: boolean;
  title: string;
  issuer: string;
  date: string;
  icon: LucideIcon;
  image: string;
  pdf?: string;
  accent: string;
  description: string;
  tags: string[];
  credential: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    featured: true,
    title: "Winter AI Internship 2026",
    issuer: "Mirai School of Technology",
    date: "Jan 2026",
    icon: Brain,
    image: assetUrl("certificates/mirai-ai.webp"),
    pdf: assetUrl("certificates/6.c.pdf"),
    accent: "#7c3aed",
    description:
      "Completed a 4-week AI internship building production-ready LLM workflows, AI agents and automation systems.",
    tags: ["AI", "LLMs", "Automation", "n8n"],
    credential: "MSOT-2026-001670",
  },
  {
    id: 2,
    featured: true,
    title: "Ultimate Job Ready Data Science",
    issuer: "CodeWithHarry",
    date: "Oct 2025",
    icon: Database,
    image: assetUrl("certificates/3.c.webp"),
    pdf: assetUrl("certificates/3.c.pdf"),
    accent: "#10b981",
    description:
      "Comprehensive data science curriculum covering Python, Pandas, NumPy, SQL and Machine Learning.",
    tags: ["Python", "ML", "Pandas", "NumPy"],
    credential: "",
  },
  {
    id: 3,
    featured: true,
    title: "Complete Python Bootcamp",
    issuer: "CodeWithHarry",
    date: "Oct 2025",
    icon: Code2,
    image: assetUrl("certificates/python.webp"),
    pdf: assetUrl("certificates/8.c.pdf"),
    accent: "#0ea5e9",
    description:
      "Core Python programming, OOP, file handling, automation and project development.",
    tags: ["Python", "OOP", "Automation"],
    credential: "",
  },
  {
    id: 4,
    featured: true,
    title: "International Conference (ICRTCIS)",
    issuer: "Rajasthan Technical University (Kota)",
    date: "May 2024",
    icon: Award,
    image: assetUrl("certificates/conference.webp"),
    pdf: assetUrl("certificates/5.c.pdf"),
    accent: "#4f46e5",
    description:
      "Attended the International Conference on Recent Trends in Communication & Intelligent Systems.",
    tags: ["Conference", "Research"],
    credential: "",
  },
  {
    id: 5,
    featured: true,
    title: "GOONJ Technical Fest",
    issuer: "Rajasthan Technical University (Kota)",
    date: "Mar 2024",
    icon: Trophy,
    image: assetUrl("certificates/4.c.webp"),
    pdf: assetUrl("certificates/4.c.pdf"),
    accent: "#f59e0b",
    description:
      "Winner in Gully Cricket event during the National Level Technical Fest GOONJ.",
    tags: ["Winner", "Competition"],
    credential: "",
  },
  {
    id: 6,
    featured: true,
    title: "Victory-24",
    issuer: "Rajasthan Technical University (Kota)",
    date: "Mar 2024",
    icon: Trophy,
    image: assetUrl("certificates/victory.webp"),
    pdf: assetUrl("certificates/9.c.pdf"),
    accent: "#ef4444",
    description:
      "Achievement certificate earned during Victory-24 National Level Technical Fest.",
    tags: ["Achievement"],
    credential: "",
  },
  {
    id: 7,
    featured: false,
    title: "Zephyr 2024",
    issuer: "Rajasthan Technical University (Kota)",
    date: "Mar 2024",
    icon: Bot,
    // No webp exists — leave image empty, modal will show PDF iframe
    image: "",
    pdf: assetUrl("certificates/zephyr.pdf"),
    accent: "#38bdf8",
    description: "Participation in National Level Technical Fest.",
    tags: ["Participation"],
    credential: "",
  },
  {
    id: 8,
    featured: false,
    title: "Arya Premier League Runner-Up",
    issuer: "Rajasthan Technical University (Kota)",
    date: "2022",
    icon: Trophy,
    image: "",
    pdf: assetUrl("certificates/1.c.pdf"),
    accent: "#eab308",
    description: "Runner-up in Arya Premier League.",
    tags: ["Sports"],
    credential: "",
  },
  {
    id: 9,
    featured: false,
    title: "Arya Premier League Participation",
    issuer: "Rajasthan Technical University (Kota)",
    date: "2023",
    icon: Trophy,
    image: "",
    pdf: assetUrl("certificates/2.c.pdf"),
    accent: "#22c55e",
    description: "Captain participation certificate.",
    tags: ["Leadership"],
    credential: "",
  },
  {
    id: 10,
    featured: false,
    title: "Science Exhibition",
    issuer: "Ministry of Culture",
    date: "2023",
    icon: Award,
    image: assetUrl("certificates/science.webp"),
    pdf: assetUrl("certificates/10.c.pdf"),
    accent: "#06b6d4",
    description:
      "Participation in scientific exhibition and awareness programme.",
    tags: ["Science"],
    credential: "",
  },
];
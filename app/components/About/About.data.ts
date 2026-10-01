import { BriefcaseBusiness, FileText, Gavel, Scale } from "lucide-react";

export const aboutContent = {
  eyebrow: "About Me",

  title: "A LAWYER, RESEARCHER AND LL.M. CANDIDATE.",

  description:
    "I am an advocate with experience in commercial and regulatory matters. I am currently pursuing an LL.M., where I am deepening my understanding of international and comparative legal frameworks, with a particular interest in the intersection of law, technology and society.",

  imageQuote: "A lawyer with a curiosity for what comes next.",
} as const;

export const aboutStats = [
  {
    value: "50+",
    label: "Petitions, suits and written documents drafted",
    icon: FileText,
  },
  {
    value: "20+",
    label: "Matters appeared in before court",
    icon: Gavel,
  },
  {
    value: "100+",
    label: "Matters handled and tracked",
    icon: BriefcaseBusiness,
  },
  {
    value: "e-Lok Adalats",
    label: "Led 50+ case managers across multiple states",
    icon: Scale,
  },
] as const;

import { FileText, Gavel, Scale, Search } from "lucide-react";

export const practiceAreas = [
  {
    title: "Civil Litigation",
    description:
      "Drafting, filing and representation in civil matters before the Bombay High Court and City Civil Court.",
    image: "/assets/civil-litigation.png",
    icon: FileText,
  },
  {
    title: "Criminal Matters",
    description:
      "Experience assisting with criminal matters, including private criminal complaints and related court filings.",
    image: "/assets/criminal-matters.png",
    icon: Gavel,
  },
  {
    title: "Dispute Resolution",
    description:
      "Experience coordinating dispute settlements and e-Lok Adalats with District Legal Service Authorities.",
    image: "/assets/dispute-resolution.png",
    icon: Scale,
  },
  {
    title: "Legal Research & Drafting",
    description:
      "Legal research for case strategy and drafting petitions, suits, written statements, replies and other legal documents.",
    image: "/assets/legal-research.png",
    icon: Search,
  },
] as const;
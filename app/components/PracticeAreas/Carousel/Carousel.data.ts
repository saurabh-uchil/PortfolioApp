import { FileText, Gavel, Scale, Search } from "lucide-react";

export const practiceAreas = [
  {
    title: "Civil Litigation",
    description:
      "Drafting, filing and representation in civil matters before the Bombay High Court and City Civil Court.",
    icon: FileText,
  },
  {
    title: "Criminal Matters",
    description:
      "Experience assisting with criminal matters, including private criminal complaints and related court filings.",
    icon: Gavel,
  },
  {
    title: "Dispute Resolution",
    description:
      "Experience coordinating dispute settlements and e-Lok Adalats with District Legal Service Authorities.",
    icon: Scale,
  },
  {
    title: "Legal Research & Drafting",
    description:
      "Legal research for case strategy and drafting petitions, suits, written statements, replies and other legal documents.",
    icon: Search,
  },
] as const;
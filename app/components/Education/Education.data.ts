import { TimelineItem } from "../ui/Timeline/Timeline";


export const educationContent = {
  eyebrow: "Education",
  title: "Academic foundations for a growing legal practice.",
  description:
    "My academic journey combines legal education with focused study in arbitration and maritime law.",
} as const;

export const educationItems: readonly TimelineItem[] = [
  {
    period: "2025",
    title: "Master of Laws",
    subtitle: "K.C. Law College",
    meta: "Business Law",
  },
  {
    period: "2024 – 2025",
    title: "Post Graduate Diploma",
    subtitle: "National Law School of India University",
    meta: "Arbitration Laws",
  },
  {
    period: "2023 – 2024",
    title: "Advanced Diploma",
    subtitle: "NALSAR University Hyderabad",
    meta: "Maritime Laws",
  },
  {
    period: "2019 – 2024",
    title: "Law",
    subtitle: "Adv. Balasaheb Apte College of Law",
  },
  {
    period: "2019",
    title: "Humanities (Arts)",
    subtitle: "St. Xavier's College, Mumbai",
  },
];
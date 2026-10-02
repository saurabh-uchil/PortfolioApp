import { TimelineItem } from "../ui/Timeline/Timeline";


export const educationContent = {
  eyebrow: "Education & Credentials",
  title: "Academic background and specialised study.",
  description:
    "A legal education shaped by postgraduate study and specialised qualifications across business law, arbitration and maritime law.",
} as const;

export const educationItems: readonly TimelineItem[] = [
  {
    period: "Feb 2025",
    title: "Master of Laws (LL.M.)",
    subtitle: "K.C. Law College",
    meta: "Business Law",
  },
  {
    period: "Oct 2024 – Aug 2025",
    title: "Post Graduate Diploma",
    subtitle: "National Law School of India University",
    meta: "Arbitration Laws",
  },
  {
    period: "Oct 2023 – Jul 2024",
    title: "Advanced Diploma",
    subtitle: "NALSAR University Hyderabad",
    meta: "Maritime Laws",
  },
  {
    period: "2019",
    title: "Bachelor's Degree",
    subtitle: "St. Xavier's College, Mumbai",
    meta: "Humanities (Arts)",
  },
];
import { TimelineItem } from "../ui/Timeline/Timeline";

export const experienceContent = {
  eyebrow: "Experience",
  title: "Building experience through practice.",
  description:
    "From court appearances to drafting and client coordination, my experience has given me exposure to a wide range of civil and criminal matters across different courts and forums.",
} as const;

export const experienceItems: readonly TimelineItem[] = [
  {
    period: "2024 – 2026",
    title: "Junior",
    subtitle: "Chamber of Adv. Rajesh Kachare",
    meta: "Civil Litigation, Mumbai",
  },
  {
    period: "2023",
    title: "Intern",
    subtitle: "Adv. Wasim Hassan",
    meta: "Bombay High Court",
  },
  {
    period: "2022",
    title: "Intern",
    subtitle: "A&G Legal Associates LLP",
  },
  {
    period: "2021 – 2022",
    title: "Case Manager",
    subtitle: "Sama",
    meta: "e-Lok Adalats",
  },
];
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export const heroDetails: readonly {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: MapPin,
    label: "Mumbai,",
    value: "Maharashtra, India",
  },
  {
    icon: GraduationCap,
    label: "LL.M. (Business Law)",
    value: "K.C. Law College",
  },
  {
    icon: BriefcaseBusiness,
    label: "Open to",
    value: "opportunities",
  },
  {
    icon: FaLinkedin,
    label: "Connect on",
    value: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  },
] as const;



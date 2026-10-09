import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export const heroDetails = [
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
    href: "https://www.linkedin.com/in/kashvi-ail-5775402b1/",
  },
] as const;



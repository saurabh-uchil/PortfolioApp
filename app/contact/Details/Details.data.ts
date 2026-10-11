export const contactDetailsContent = {
  eyebrow: "GET IN TOUCH",
  title: "BEGIN A CONVERSATION",
  description:
    "For consultations and legal enquiries, please get in touch using the details below.",

  emailLabel: "Email",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  emailLinkLabel: "Send an email",

  linkedinLabel: "LinkedIn",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
} as const;

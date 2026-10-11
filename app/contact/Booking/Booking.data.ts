export const bookingContent = {
  eyebrow: "BOOK A CONSULTATION",
  title: "",
  description: "Select an available date and time for your consultation.",
  buttonLabel: "Schedule a consultation",
  modalTitle: "Schedule your consultation",
  modalDescription: "Choose an available date and time that suits you.",
  calendlyUrl:process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  calendlyTitle: "Schedule a consultation",
  fallbackLabel: "Open Calendly in a new tab",
  closeLabel: "Close booking dialog",
} as const;

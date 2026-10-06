export const contactTabs = [
  {
    id: "schedule",
    label: "Schedule a Call",
  },
  {
    id: "message",
    label: "Send a Message",
  },
] as const;

export type ContactTabId = (typeof contactTabs)[number]["id"];
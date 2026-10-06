"use client";

import { useState } from "react";

import { contactTabs, type ContactTabId } from "./Tabs.data";
import { contactTabsStyles } from "./styles";
import { Schedule } from "../Schedule/Schedule";
import { Message } from "../Message/Message";

export function Tabs() {
  const [activeTab, setActiveTab] =
    useState<ContactTabId>("schedule");

  return (
    <div className={contactTabsStyles.wrapper}>
      <div
        className={contactTabsStyles.tabs}
        role="tablist"
        aria-label="Contact options"
      >
        {contactTabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={contactTabsStyles.tab}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className={contactTabsStyles.content}>
        {activeTab === "schedule" && (
          <Schedule />
        )}

        {activeTab === "message" && (
          <Message />
        )}
      </div>
    </div>
  );
}
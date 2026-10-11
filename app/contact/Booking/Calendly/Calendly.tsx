"use client";

import { useEffect, useRef, useState } from "react";
import { bookingContent } from "../Booking.data";
import { calendlyStyles as styles } from "./styles";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

interface CalendlyProps {
  url?: string;
}

export function Calendly({
  url = bookingContent.calendlyUrl,
}: CalendlyProps) {
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = calendarRef.current;
    if (!container) return;

    let cancelled = false;
    let script: HTMLScriptElement | null = null;

    const handleCalendlyMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;

      const eventName = event.data?.event;

      if (
        eventName === "calendly.profile_page_viewed" ||
        eventName === "calendly.event_type_viewed"
      ) {
        setIsCalendarLoaded(true);
      }
    };

    const scriptUrl =
      "https://assets.calendly.com/assets/external/widget.js";

    const initializeCalendly = () => {
      if (cancelled || !calendarRef.current || !window.Calendly) {
        return;
      }

      const currentContainer = calendarRef.current;
      currentContainer.innerHTML = "";

      window.Calendly.initInlineWidget({
        url,
        parentElement: currentContainer,
      });
    };

    window.addEventListener("message", handleCalendlyMessage);

    script = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptUrl}"]`,
    );

    if (window.Calendly) {
      initializeCalendly();
    } else if (script) {
      script.addEventListener("load", initializeCalendly);
    } else {
      script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.addEventListener("load", initializeCalendly);
      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("message", handleCalendlyMessage);
      script?.removeEventListener("load", initializeCalendly);
    };
  }, [url]);

  return (
    <div className={styles.calendar}>
      {!isCalendarLoaded && (
        <div
          className={styles.loader}
          role="status"
          aria-live="polite"
        >
          <span
            className={styles.spinner}
            aria-hidden="true"
          />

          <p className={styles.loaderTitle}>
            Preparing your consultation
          </p>

          <p className={styles.loaderDescription}>
            Loading the booking calendar…
          </p>
        </div>
      )}

      <div
        ref={calendarRef}
        className={styles.calendlyEmbed}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { bookingContent } from "./Booking.data";
import { bookingStyles as styles } from "./styles";

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

export function Booking() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

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
        url: bookingContent.calendlyUrl,
        parentElement: currentContainer,
      });
    };

    window.addEventListener("message", handleCalendlyMessage);

    script = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptUrl}"]`
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
  }, [isOpen]);

  const openModal = () => {
    setIsCalendarLoaded(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsCalendarLoaded(false);
  };

  return (
    <section className={styles.wrapper}>
      <Image
        src="/assets/law-office.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        className={styles.backgroundImage}
      />

      <div
        className={styles.backgroundOverlay}
        aria-hidden="true"
      />

      <div className={styles.header}>
        <p className={styles.eyebrow}>
          {bookingContent.eyebrow}
        </p>

        <h2 className={styles.title}>
          {bookingContent.title}
        </h2>

        <p className={styles.description}>
          {bookingContent.description}
        </p>

        <button
          type="button"
          className={styles.trigger}
          onClick={openModal}
        >
          {bookingContent.buttonLabel}
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      {isOpen && (
        <div
          className={styles.overlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            aria-describedby="booking-modal-description"
            className={styles.dialog}
          >
            <header className={styles.modalHeader}>
              <div>
                <h2
                  id="booking-modal-title"
                  className={styles.modalTitle}
                >
                  {bookingContent.modalTitle}
                </h2>

                <p
                  id="booking-modal-description"
                  className={styles.modalDescription}
                >
                  {bookingContent.modalDescription}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                aria-label={bookingContent.closeLabel}
                onClick={closeModal}
              >
                <span aria-hidden="true">✕</span>
              </button>
            </header>

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

            <div className={styles.fallback}>
              <a
                href={bookingContent.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.fallbackLink}
              >
                {bookingContent.fallbackLabel} ↗
              </a>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}

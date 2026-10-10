"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { bookingContent } from "./Booking.data";
import { bookingStyles as styles } from "./styles";

export function Booking() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
          onClick={() => setIsOpen(true)}
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
              setIsOpen(false);
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
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden="true">✕</span>
              </button>
            </header>

            <div className={styles.calendar}>
              <iframe
                src={bookingContent.calendlyUrl}
                title={bookingContent.calendlyTitle}
                className={styles.iframe}
                loading="lazy"
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

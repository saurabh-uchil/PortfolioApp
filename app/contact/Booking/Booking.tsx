"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { bookingContent } from "./Booking.data";
import { bookingStyles as styles } from "./styles";
import { Calendly } from "./Calendly/Calendly";
import { Modal } from "../../components/ui/Modal/Modal";

export function Booking() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeModal = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
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
        aria-hidden="true"
        className={styles.backgroundOverlay}
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
          ref={triggerRef}
          type="button"
          className={styles.trigger}
          onClick={() => setIsOpen(true)}
        >
          {bookingContent.buttonLabel}
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={bookingContent.modalTitle}
        description={bookingContent.modalDescription}
      >
        <Calendly url={bookingContent.calendlyUrl} />

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
      </Modal>
    </section>
  );
}
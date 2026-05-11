"use client";

import { useEffect, useState } from "react";

export default function VacationNoticeModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.classList.add("vacation-notice-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("vacation-notice-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="vacation-notice" role="presentation">
      <div
        className="vacation-notice__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vacation-notice-title"
      >
        <button
          type="button"
          className="vacation-notice__close"
          aria-label="Zavřít oznámení"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <h2 id="vacation-notice-title" className="vacation-notice__title">
          <span className="vacation-notice__title--bold">Pletivo</span>{" "}
          <span className="vacation-notice__title--space">Grygov</span>
        </h2>
        <p className="vacation-notice__subtitle">
          Ve dnech 11.5. a 12.5. máme zavřeno z důvodu dovolené.
        </p>
        <p className="vacation-notice__description">
          Všechny objednávky a poptávky začneme zpracovávat 13.5. Děkujeme za
          pochopení.
        </p>

        <button
          type="button"
          className="vacation-notice__button"
          onClick={() => setIsOpen(false)}
        >
          Rozumím
        </button>
      </div>
    </div>
  );
}

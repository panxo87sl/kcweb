import { useEffect, useId, useRef, useState } from "react";
import "./ServiceDropdown.css";

function DropdownArrowIcon() {
  return (
    <svg
      className="serviceDropdown__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function ServiceDropdown({
  title = "Valores y consideraciones",
  items = [],
  colorProfile = "Centro", // Centro | Estetica | KCPLUS
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const contentId = useId();

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    if (isOpen) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = "0px";
    }
  }, [isOpen, items]);

  useEffect(() => {
    const handleResize = () => {
      const content = contentRef.current;
      if (!content || !isOpen) return;

      content.style.maxHeight = `${content.scrollHeight}px`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <article
      className={`serviceDropdown serviceDropdown--${colorProfile} ${
        isOpen ? "serviceDropdown--open" : ""
      }`}
    >
      <button
        className="serviceDropdown__summary"
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        <span className="serviceDropdown__summaryText">{title}</span>
        <DropdownArrowIcon />
      </button>

      <div
        id={contentId}
        ref={contentRef}
        className="serviceDropdown__content"
        aria-hidden={!isOpen}
      >
        <div className="serviceDropdown__contentInner">
          {items.map((item, index) => {
            if (item.type === "note") {
              return (
                <p className="serviceDropdown__note" key={`note-${index}`}>
                  * {item.text}
                </p>
              );
            }

            return (
              <article className="serviceDropdown__item" key={`${item.name}-${index}`}>
                <div className="serviceDropdown__itemHeader">
                  <h4 className="serviceDropdown__itemName">{item.name}</h4>

                  {item.price && (
                    <span className="serviceDropdown__itemPrice">{item.price}</span>
                  )}
                </div>

                {item.description && (
                  <p className="serviceDropdown__itemDescription">{item.description}</p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </article>
  );
}

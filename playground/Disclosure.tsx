
import { useId, useState, type ReactNode } from "react";

interface DisclosureProps {
  title: string;
  children: ReactNode;
}

export default function Disclosure({
  title,
  children,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="disclosure">
      <button
        type="button"
        className="disclosure-trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <span>{title}</span>

        <span className="disclosure-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        id={panelId}
        className="disclosure-panel"
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}

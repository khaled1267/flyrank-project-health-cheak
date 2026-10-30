
import { useRef, useState, type KeyboardEvent } from "react";

interface TabsProps {
  items: {
    label: string;
    content: React.ReactNode;
  }[];
}

export default function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const currentIndex = tabRefs.current.indexOf(event.currentTarget);

    if (currentIndex === -1 || items.length === 0) return;

    let nextIndex = currentIndex;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % items.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + items.length) % items.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="tabs-root">
      <div role="tablist" aria-label="Example tabs" className="tabs-list">
        {items.map((item, index) => (
          <button
            key={item.label}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`tab-${index}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            className="tab-trigger"
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
          >
            {item.label}
          </button>
        ))}
      </div>

      {items.map((item, index) => (
        <div
          key={item.label}
          role="tabpanel"
          id={`panel-${index}`}
          aria-labelledby={`tab-${index}`}
          tabIndex={0}
          hidden={activeTab !== index}
          className="tab-panel"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}

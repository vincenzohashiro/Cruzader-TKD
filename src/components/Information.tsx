import React, { useRef, useEffect, useState } from "react";
import "../assets/css/InformationCards.css";

type InfoItem = {
  title: string;
  content: string;
  image: string;
};

interface InfoCardsProps {
  rowHeight?: string; // e.g. "100vh", "80vh", "auto"
}

const infoData: InfoItem[] = [
  {
    title: "Title 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x250?text=Image+1",
  },
  {
    title: "Title 2",
    content: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    image: "https://via.placeholder.com/400x250?text=Image+2",
  },
  {
    title: "Title 3",
    content: "In condimentum facilisis porta. Sed nec diam mattis viverra.",
    image: "https://via.placeholder.com/400x250?text=Image+3",
  },
  {
    title: "Title 4",
    content: "Cras ornare tristique elit. Vivamus vestibulum ntulla nec ante.",
    image: "https://via.placeholder.com/400x250?text=Image+4",
  },
  {
    title: "Title 5",
    content: "Aliquam erat volutpat. Etiam ac erat ut enim maximus pretium.",
    image: "https://via.placeholder.com/400x250?text=Image+5",
  },
  {
    title: "Title 6",
    content: "Suspendisse potenti. Pellentesque habitant morbi tristique.",
    image: "https://via.placeholder.com/400x250?text=Image+6",
  },
];

// ✅ Titles for each row
const sectionTitles: string[] = [
  "About Our Program",
  "Our Philosophy",
  "Achievements",
];

function useFadeOnScroll(delay = 0, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setInView(true), delay);
        } else {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delay, threshold]);

  return { ref, inView };
}

const InfoCards: React.FC<InfoCardsProps> = ({ rowHeight = "50vh" }) => {
  const rows = Array.from({ length: infoData.length / 2 }, (_, i) =>
    infoData.slice(i * 2, i * 2 + 2)
  );

  return (
    <div className="info-grid">
      {rows.map((pair, rowIdx) => {
        const { ref, inView } = useFadeOnScroll(rowIdx * 150);
        const sectionTitle = sectionTitles[rowIdx] || `Section ${rowIdx + 1}`;

        return (
          <div key={rowIdx} className="info-row-wrapper">
            {/* Section title ABOVE the row */}
            <h2 className={`info-section-title ${inView ? "in-view" : ""}`}>
              {sectionTitle}
            </h2>

            {/* Cards container */}
            <div
              ref={ref}
              className={`info-row ${inView ? "in-view" : ""}`}
              style={{ minHeight: rowHeight }}
            >
              {pair.map((item, idx) => {
                const globalIndex = rowIdx * 2 + idx;
                const alignClass =
                  globalIndex % 2 === 0 ? "align-left" : "align-right";
                return (
                  <article
                    key={globalIndex}
                    className={`info-card ${alignClass}`}
                  >
                    <div className="info-card-text">
                      <h3 className="info-card-title">{item.title}</h3>
                      <p className="info-card-content">{item.content}</p>
                    </div>
                    <div className="info-card-media">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCards;

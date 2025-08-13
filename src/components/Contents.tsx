import React, { useEffect, useRef, useState } from "react";
import "../assets/css/Information.css";

const infoData = [
  {
    title: "Title 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300x150?text=Image+1",
  },
  {
    title: "Title 2",
    content: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    image: "https://via.placeholder.com/300x150?text=Image+2",
  },
  {
    title: "Title 3",
    content:
      "In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.",
    image: "https://via.placeholder.com/300x150?text=Image+3",
  },
  {
    title: "Title 4",
    content: "Cras ornare tristique elit. Vivamus vestibulum ntulla nec ante.",
    image: "https://via.placeholder.com/300x150?text=Image+4",
  },
  {
    title: "Title 5",
    content: "Aliquam erat volutpat. Etiam ac erat ut enim maximus pretium.",
    image: "https://via.placeholder.com/300x150?text=Image+5",
  },
  {
    title: "Title 6",
    content:
      "Suspendisse potenti. Pellentesque habitant morbi tristique senectus.",
    image: "https://via.placeholder.com/300x150?text=Image+6",
  },
];

const Contents: React.FC = () => {
  const numCols = 2;
  const numRows = Math.ceil(infoData.length / numCols);

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleRows, setVisibleRows] = useState<boolean[]>(
    Array(numRows).fill(false)
  );

  useEffect(() => {
    let prevScrollY = window.scrollY;
    const triggeredRows = new Set<number>();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > prevScrollY;

      rowRefs.current.forEach((row, i) => {
        if (!row) return;

        const rect = row.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight - 80 && rect.bottom > 0;

        if (scrollingDown && isInView && !visibleRows[i]) {
          triggeredRows.add(i);
          setTimeout(() => {
            setVisibleRows((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
          }, i * 150);
        }

        if (!scrollingDown && !isInView && visibleRows[i]) {
          triggeredRows.delete(i);
          setVisibleRows((prev) => {
            const updated = [...prev];
            updated[i] = false;
            return updated;
          });
        }
      });

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleRows]);

  const rows = Array.from({ length: numRows }, (_, i) =>
    infoData.slice(i * numCols, i * numCols + numCols)
  );

  const getAlignClass = (idx: number) =>
    idx % 2 === 0 ? "align-left" : "align-right";

  return (
    <div className="main-content">
      {rows.map((row, rowIdx) => (
        <div className="info-row-block" key={rowIdx}>
          {/* Row title */}
          <h3
            className={`info-row-title fade-up-title${
              visibleRows[rowIdx] ? " visible" : ""
            }`}
          >
            {`Section ${rowIdx + 1}`}
          </h3>

          {/* Cards grid */}
          <div
            className={`fade-up-row${visibleRows[rowIdx] ? " visible" : ""}`}
            ref={(el) => {
              rowRefs.current[rowIdx] = el;
            }}
          >
            <div className="info-card-grid info-card-grid-2col">
              {row.map((info, idx) => {
                const cardIdx = rowIdx * numCols + idx;
                return (
                  <div
                    className={`info-card ${getAlignClass(cardIdx)}`}
                    key={cardIdx}
                    tabIndex={0}
                  >
                    <div className="info-card-title">
                      <h4>{info.title}</h4>
                    </div>
                    <div className="info-card-details show">
                      <p>{info.content}</p>
                      <img
                        src={info.image}
                        alt={info.title}
                        className="info-img"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contents;

import React, { useEffect, useRef, useState } from "react";
import "../assets/css/Contents.css";

type Section = {
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  imageAlt?: string;
};

const sections: Section[] = [
  {
    title: "Train with purpose",
    description:
      "Our programs focus on discipline, technique, and personal growth with a supportive community.",
    bullets: [
      "Beginner to advanced",
      "Certified instructors",
      "Flexible schedule",
    ],
    image: "/images/section-1.jpg",
  },
  {
    title: "Strength in motion",
    description:
      "Improve agility, coordination, and confidence with drills designed to challenge and inspire.",
    bullets: ["Core conditioning", "Speed & agility", "Form refinement"],
    image: "/images/section-2.jpg",
  },
  {
    title: "Compete and excel",
    description:
      "Sharpen your skills for tournaments with strategy sessions and focused sparring.",
    bullets: ["Sparring labs", "Scoring strategy", "Mental readiness"],
    image: "/images/section-3.jpg",
  },
];

// simple fade observer hook built into this file
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

const Contents: React.FC = () => {
  return (
    <>
      {sections.map((s, idx) => {
        const { ref, inView } = useFadeOnScroll(idx * 150);
        const isEven = idx % 2 === 1;

        return (
          <section
            key={idx}
            ref={ref}
            className={`content-section${isEven ? " reverse" : ""} ${
              inView ? "in-view" : ""
            }`}
          >
            <div className="section-inner">
              <div className="image-col">
                <img src={s.image} alt={s.imageAlt || s.title} />
              </div>
              <div className="content-col">
                <div className="content-wrap">
                  <h2 className="content-title">{s.title}</h2>
                  <p className="content-desc">{s.description}</p>
                  {s.bullets && s.bullets.length > 0 && (
                    <ul className="content-list">
                      {s.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Contents;

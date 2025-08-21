import React, { useRef, useEffect, useState } from "react";
import "../assets/css/InformationCards.css";
import Imus from "../assets/images/Imus.jpg";
import GenTri from "../assets/images/GenTri.jpg";
import Dasmarinas from "../assets/images/Dasmarinas.jpg";
import Bacoor from "../assets/images/Bacoor.jpg";
import Step_Up from "../assets/images/Step UP.jpg";
import Mana from "../assets/images/Mana.jpg";
import FSES from "../assets/images/FSES.jpg";
import Paranaque from "../assets/images/Paranaque.jpg";
import Taguig from "../assets/images/Taguig.jpg";
import Muntinlupa from "../assets/images/Muntinlupa.jpg";
import Paco from "../assets/images/Paco.png";
import Paco1 from "../assets/images/Paco1.png";
import Paco2 from "../assets/images/Paco2.png";
import Paco3 from "../assets/images/Paco3.png";

const getImagePath = (path: string) => {
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return path;
  return path;
};

type InfoItem = {
  title: string;
  content: string;
  image?: string;
  images?: string[];
  video?: string;
  mapUrl?: string;
};

const infoData: InfoItem[] = [
  {
    title: "Robinsons Townville Buhay Na Tubig",
    content: "RCBC ATM ROBINSOS BUHAY NA TUBIG, BGY, PALICO ST, IMUS, CAVITE",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!4v1755417334509!6m8!1m7!1sQN6rSQkBUp1L6QnKiSQs_g!2m2!1d14.41131644524548!2d120.9527814066053!3f60.28668158105592!4f-1.9235652611184975!5f0.7820865974627469",
    images: [Imus, Paco1, Paco2, Paco3],
  },
  {
    title: "Cruzaders TKD SOMO - A Vista Mall",
    content: "Vista Mall, SOMO - A, Molino - Paliparan Rd, Bacoor, Cavite",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!4v1755676432030!6m8!1m7!1sLqIGsyGqO3qUrvkNZJgQAw!2m2!1d14.38533640150141!2d120.9795752482318!3f209.39480442053878!4f10.588966685049456!5f0.4000000000000002",
    images: [GenTri, Paco1, Paco2, Paco3],
  },
  {
    title: "Vista Mall Dasmarinas",
    content: "BRGY AGUSTIN 2, EMILIO AGUINALDO HWY, DASMARINAS, CAVITE",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!4v1755420360415!6m8!1m7!1szi-ipA4B_iUTSHNb682mdQ!2m2!1d14.31706945870941!2d120.9436747869969!3f26.66587119373616!4f-2.0621171472822795!5f0.4000000000000002",
    images: [Dasmarinas, Paco1, Paco2, Paco3],
  },
  {
    title: "Main Square Bacoor",
    content: "BACOOR BLVD, MOLINO BLVD., BRGY, BAYANAN, BACOOR, CAVITE",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!4v1755421975374!6m8!1m7!1swwII5qCVUc7O8zjefpltPg!2m2!1d14.42702391278704!2d120.9644755351902!3f36.315417670950865!4f3.9641306557803517!5f0.7820865974627469",
    images: [Bacoor, Paco1, Paco2, Paco3],
  },
  {
    title: "Cruzaders TKD Lokal Molino",
    content: "V-Central Mall Molino, Bacoor, Cavite",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!4v1755675669384!6m8!1m7!1sw_jPGBuqsdkZxRK8hilUKw!2m2!1d14.40672358833664!2d120.9754701342436!3f145.88608891288402!4f3.8675750072245307!5f0.7820865974627469",
    images: [Step_Up, Paco1, Paco2, Paco3],
  },
  {
    title: "Cruzader TKD Mana",
    content: "Mana Mall, Centennial Road, Kawit, Cavite",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!3m2!1sen!2sph!4v1755422770214!5m2!1sen!2sph!6m8!1m7!1sFR9NcjHCH1gf7TyBcROpCQ!2m2!1d14.43757415513388!2d120.9071046179823!3f180.11110067175514!4f6.29505640984209!5f0.7820865974627469",
    images: [Mana, Paco1, Paco2, Paco3],
  },
  {
    title: "Cruzaders Paranaque Gym",
    content: "10 st. Joseph, Parañaque, Metro Manila",
    mapUrl: "https://www.google.com/maps/embed?...",
    images: [Paranaque, Paco1, Paco2, Paco3],
  },
  {
    title: "Cruzaders FSES",
    content: "Annex, 35 Doña Soledad Ave, Parañaque, Metro Manila",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.8763082841373!2d121.02593138401859!3d14.488607591885962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf007ddd38c7%3A0xf4d84fa865302a9f!2sCruzaders%20FSES!5e0!3m2!1sen!2sph!4v1755422986350!5m2!1sen!2sph",
    images: [FSES, Paco1, Paco2, Paco3],
  },
  {
    title: "Cruzaders TKD Bicutan",
    content: "Waltermart Bicutan, Tanyag St, Taguig, Metro Manila",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!4v1755423972446!6m8!1m7!1sgvpTpuT_MSrsioOnFLg2MQ!2m2!1d14.48115156068142!2d121.0453418992282!3f91.9962298615203!4f4.41707241105388!5f0.4000000000000002",
    images: [Taguig, Paco1, Paco2, Paco3],
  },
  {
    title: "Cruzaders TKD Wmall",
    content: "Wmall, W service Rd, Muntinlupa, Metro Manila",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!4v1755424400670!6m8!1m7!1smfrLCxeg4V73CwQJFqhg1g!2m2!1d14.44750964168961!2d121.0451486557456!3f295.1463588069379!4f7.599579950547692!5f0.4000000000000002",
    images: [Muntinlupa, Paco1, Paco2, Paco3],
  },
  {
    title: "Cruzaders TKD Paco",
    content:
      "Paco Mall, Angel Linao Stcorner, Pedro Gil St, Manila, 1007 Metro Manila",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!4v1755424257167!6m8!1m7!1sTgYAdh96AwkgRPV1b-RJ-w!2m2!1d14.57829809550929!2d120.9935241576018!3f339.2844397405731!4f7.694676007928351!5f0.7820865974627469",
    images: [Paco, Paco1, Paco2, Paco3],
  },
];

// Custom section order using indices from infoData
const sectionItemsIndices: number[][] = [
  [0, 1, 2, 3, 4, 5], // Section 1
  [6], // Section 2
  [10], // Section 3
  [8], // Section 4
  [9], // Section 5
];

const sectionTitles: string[] = [
  "Cavite",
  "Paranaque",
  "Manila",
  "Taguig",
  "Muntinlupa",
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
        }
        // <-- remove the else block so it doesn't fade out
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

const InfoCards: React.FC = () => {
  // Map section indices to actual items
  const sections = sectionItemsIndices.map((indices) =>
    indices.map((i) => infoData[i])
  );

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expandedIndex]);

  return (
    <div className="info-grid">
      {sections.map((sectionItems, sectionIdx) => {
        const { ref, inView } = useFadeOnScroll(sectionIdx * 150);
        const sectionTitle =
          sectionTitles[sectionIdx] || `Section ${sectionIdx + 1}`;

        return (
          <div key={sectionIdx} className="info-row-wrapper">
            <h1 className={`info-section-title ${inView ? "in-view" : ""}`}>
              {sectionTitle}
            </h1>

            <div ref={ref} className={`info-row ${inView ? "in-view" : ""}`}>
              {sectionItems.map((item, idx) => {
                const globalIndex =
                  sectionItemsIndices.slice(0, sectionIdx).flat().length + idx;

                const isExpanded = expandedIndex === globalIndex;

                return (
                  <React.Fragment key={globalIndex}>
                    <div className="info-card-wrapper">
                      <article className={`info-card `}>
                        {/* Title at the top */}
                        <div className="info-card-title-container">
                          <h3 className="info-card-title"> {item.title} </h3>
                        </div>

                        {/* Content in the middle */}
                        <div className="info-card-content-container">
                          <p
                            className={`info-card-content ${
                              !isExpanded ? "truncated" : ""
                            }`}
                          >
                            {item.content}
                          </p>
                        </div>

                        {/* Media at the bottom */}
                        <div className="info-card-media">
                          {item.images && item.images.length > 0 ? (
                            <img
                              src={getImagePath(item.images[0])}
                              alt={`${item.title} preview`}
                              className="card-preview-image"
                            />
                          ) : item.video ? (
                            <video src={item.video} controls />
                          ) : item.image ? (
                            <img src={item.image} alt={item.title} />
                          ) : null}

                          {item.mapUrl && (
                            <iframe
                              src={item.mapUrl}
                              width="100%"
                              height="200"
                              style={{
                                border: 0,
                                borderRadius: "8px",
                                marginTop: "0.5rem",
                              }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          )}
                        </div>

                        <button
                          className="expand-btn"
                          onClick={() =>
                            setExpandedIndex(isExpanded ? null : globalIndex)
                          }
                        >
                          {isExpanded ? "Close" : "Expand"}
                        </button>
                      </article>
                    </div>

                    {isExpanded && (
                      <div
                        className="card-overlay"
                        onClick={() => setExpandedIndex(null)}
                      >
                        <article
                          className="info-card modal-card"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="info-card-body">
                            <div className="info-card-text">
                              <h3 className="info-card-title">{item.title}</h3>
                              <p className="info-card-content">
                                {item.content}
                              </p>
                            </div>

                            {item.images && item.images.length > 0 && (
                              <div className="main-image-container">
                                <img
                                  src={getImagePath(item.images[0])}
                                  alt={item.title}
                                  className="main-image"
                                />
                              </div>
                            )}

                            {item.images && item.images.length > 1 && (
                              <div className="thumbnail-row">
                                {item.images.map((img, idx) => (
                                  <img
                                    key={idx}
                                    src={getImagePath(img)}
                                    alt={`${item.title} ${idx + 1}`}
                                    className="thumbnail-image"
                                    onClick={() =>
                                      document
                                        .querySelector(".main-image")
                                        ?.setAttribute("src", getImagePath(img))
                                    }
                                  />
                                ))}
                              </div>
                            )}

                            {item.mapUrl && (
                              <div
                                className={`map-container ${
                                  isExpanded ? "interactive" : "disabled"
                                }`}
                              >
                                <iframe
                                  src={item.mapUrl}
                                  title="Google Map"
                                  width="100%"
                                  height="200"
                                  style={{ border: 0, borderRadius: "8px" }}
                                  allowFullScreen
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                />
                              </div>
                            )}
                          </div>

                          <div className="info-card-footer">
                            <button
                              className="expand-btn"
                              onClick={() => setExpandedIndex(null)}
                            >
                              Close
                            </button>
                          </div>
                        </article>
                      </div>
                    )}
                  </React.Fragment>
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

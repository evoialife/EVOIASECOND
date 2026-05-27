"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Rina S., 42 tahun",
    quote:
      "Sejak bergabung dengan EVOIA, saya lebih paham cara merawat tubuh saya. EVO seperti dokter pribadi yang selalu ada.",
    rating: 5,
  },
  {
    name: "Budi H., 55 tahun",
    quote:
      "Biomarker tracking-nya luar biasa. Saya bisa lihat perkembangan saya setiap minggu.",
    rating: 5,
  },
  {
    name: "Dewi K., 38 tahun",
    quote:
      "Program longevity-nya sangat terstruktur. Saya merasa jauh lebih berenergi setelah 3 bulan bersama EVOIA.",
    rating: 5,
  },
];

function TestimonialCard({
  name,
  quote,
  rating,
  visible,
  delay,
}: {
  name: string;
  quote: string;
  rating: number;
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className="testimonial-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      <span className="stars">{"★".repeat(rating)}</span>
      <span className="opening-quote">&ldquo;</span>
      <p className="quote-text">{quote}</p>
      <p className="name">{name}</p>
    </div>
  );
}

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="testimonial-section" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Karla:wght@400;500;600&display=swap');

        :root {
          --color-primary: #27382C;
          --color-background: #FFFEE8;
          --color-accent: #C9A96E;
          --color-text-light: #FFFEE8;
          --color-text-muted: rgba(39, 56, 44, 0.65);
        }

        .testimonial-section {
          background: var(--color-background);
          padding: 96px 24px;
          border-top: 1px solid rgba(201, 169, 110, 0.3);
        }

        .testimonial-header {
          text-align: center;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .testimonial-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .testimonial-label {
          font-family: 'Karla', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: var(--color-accent);
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
        }

        .testimonial-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 500;
          color: var(--color-primary);
          margin: 0;
          line-height: 1.2;
        }

        /* Desktop: flex row */
        .testimonial-grid {
          display: flex;
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .testimonial-card {
          flex: 1;
          background: var(--color-background);
          border: 1px solid rgba(201, 169, 110, 0.30);
          padding: 32px;
          border-radius: 16px;
          box-shadow: 0 2px 20px rgba(39, 56, 44, 0.06);
          display: flex;
          flex-direction: column;
        }

        .stars {
          color: var(--color-accent);
          font-size: 14px;
          letter-spacing: 2px;
          display: block;
        }

        .opening-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          color: rgba(201, 169, 110, 0.35);
          line-height: 0.8;
          display: block;
          margin-bottom: 4px;
          margin-top: 12px;
        }

        .quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 18px;
          color: var(--color-primary);
          line-height: 1.65;
          margin-top: 8px;
          margin-bottom: 0;
          flex: 1;
        }

        .name {
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          letter-spacing: 0.1em;
          color: rgba(39, 56, 44, 0.55);
          margin-top: 20px;
          margin-bottom: 0;
        }

        /* Mobile carousel */
        .testimonial-carousel {
          display: none;
          position: relative;
          max-width: 480px;
          margin: 0 auto;
        }

        .carousel-track {
          overflow: hidden;
          border-radius: 16px;
        }

        .carousel-track .testimonial-card {
          flex: none;
          width: 100%;
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 24px;
        }

        .carousel-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(201, 169, 110, 0.5);
          background: transparent;
          color: var(--color-primary);
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          line-height: 1;
        }

        .carousel-btn:hover {
          background: var(--color-primary);
          color: var(--color-background);
        }

        .carousel-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .carousel-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(39, 56, 44, 0.2);
          transition: background 0.2s ease, transform 0.2s ease;
          cursor: pointer;
          border: none;
          padding: 0;
        }

        .carousel-dot.active {
          background: var(--color-accent);
          transform: scale(1.3);
        }

        @media (max-width: 767px) {
          .testimonial-section {
            padding: 72px 20px;
          }
          .testimonial-heading {
            font-size: 34px;
          }
          .testimonial-grid {
            display: none;
          }
          .testimonial-carousel {
            display: block;
          }
        }
      `}</style>

      <div className={`testimonial-header ${visible ? "visible" : ""}`}>
        <span className="testimonial-label">Kata Mereka</span>
        <h2 className="testimonial-heading">Dipercaya Ribuan Member</h2>
      </div>

      {/* Desktop: 3-column grid */}
      <div className="testimonial-grid">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard
            key={t.name}
            {...t}
            visible={visible}
            delay={i * 120}
          />
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="testimonial-carousel">
        <div className="carousel-track">
          <TestimonialCard
            {...TESTIMONIALS[activeIndex]}
            visible={visible}
            delay={0}
          />
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-btn"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            &#8592;
          </button>
          <div className="carousel-dots" role="tablist">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === activeIndex ? " active" : ""}`}
                onClick={() => setActiveIndex(i)}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="carousel-btn"
            onClick={next}
            aria-label="Next testimonial"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

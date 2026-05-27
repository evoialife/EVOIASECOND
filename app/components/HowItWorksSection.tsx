"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "Buat Profil Kesehatan",
    desc: "Ceritakan kondisi, tujuan, dan gaya hidup Anda kepada EVO",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Konsultasi dengan EVO",
    desc: "AI longevity kami menganalisa dan memberikan panduan personal",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Jalani Program Longevity",
    desc: "Produk, komunitas, dan tracking biomarker — semua dalam satu platform",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="how-it-works">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Karla:wght@400;500&display=swap');

        :root {
          --color-primary: #27382C;
          --color-background: #FFFEE8;
          --color-accent: #C9A96E;
          --color-text-light: #FFFEE8;
          --color-text-muted-light: rgba(255,254,232,0.65);
        }

        .how-it-works {
          background: #27382C;
          padding: 96px 24px;
          overflow: hidden;
        }

        .how-it-works__label {
          display: block;
          text-align: center;
          font-family: 'Karla', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: #C9A96E;
          text-transform: uppercase;
        }

        .how-it-works__heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 500;
          line-height: 1.2;
          color: #FFFEE8;
          text-align: center;
          max-width: 560px;
          margin: 16px auto 0;
        }

        .how-it-works__divider {
          display: block;
          width: 60px;
          height: 1px;
          background: #C9A96E;
          margin: 32px auto 64px;
        }

        .how-it-works__steps {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          gap: 0;
          position: relative;
          max-width: 760px;
          margin: 0 auto;
        }

        .how-it-works__connector {
          position: absolute;
          top: 80px;
          left: 20%;
          right: 20%;
          height: 1px;
          background: linear-gradient(to right, transparent, #C9A96E 20%, #C9A96E 80%, transparent);
          z-index: 0;
          pointer-events: none;
        }

        .how-it-works__step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 220px;
          padding: 0 24px;
          z-index: 1;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .how-it-works__step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .how-it-works__step:nth-child(2) { transition-delay: 150ms; }
        .how-it-works__step:nth-child(3) { transition-delay: 300ms; }

        .how-it-works__ghost-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 600;
          line-height: 1;
          color: rgba(201, 169, 110, 0.20);
          user-select: none;
        }

        .how-it-works__icon {
          margin-top: -16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .how-it-works__step-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 500;
          color: #FFFEE8;
          margin-top: 16px;
          line-height: 1.2;
        }

        .how-it-works__step-desc {
          font-family: 'Karla', sans-serif;
          font-size: 14px;
          color: rgba(255, 254, 232, 0.65);
          line-height: 1.6;
          max-width: 200px;
          margin-top: 8px;
        }

        @media (max-width: 767px) {
          .how-it-works__steps {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }

          .how-it-works__connector {
            display: none;
          }

          .how-it-works__heading {
            font-size: 32px;
          }
        }
      `}</style>

      <span className="how-it-works__label">CARA KERJA</span>

      <h2 className="how-it-works__heading">
        Tiga Langkah Menuju Hidup yang Lebih Berkualitas
      </h2>

      <span className="how-it-works__divider" aria-hidden="true" />

      <div className="how-it-works__steps">
        <div className="how-it-works__connector" aria-hidden="true" />

        {steps.map((step, i) => (
          <div
            key={i}
            className={`how-it-works__step${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
          >
            <span className="how-it-works__ghost-number" aria-hidden="true">
              {step.number}
            </span>
            <div className="how-it-works__icon">{step.icon}</div>
            <h3 className="how-it-works__step-title">{step.title}</h3>
            <p className="how-it-works__step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

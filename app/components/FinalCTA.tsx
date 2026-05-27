"use client";

import { useEffect, useRef } from "react";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Karla:wght@300;400;500;600&display=swap";

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`;

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("final-cta--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('${GOOGLE_FONTS_URL}');

        :root {
          --color-primary: #27382C;
          --color-background: #FFFEE8;
          --color-accent: #C9A96E;
          --color-text-light: #FFFEE8;
          --color-text-muted: rgba(39,56,44,0.65);
        }

        .final-cta {
          position: relative;
          overflow: hidden;
          background-color: #27382C;
          border-top: 1px solid rgba(201, 169, 110, 0.4);
          padding: 128px 24px;
          text-align: center;
        }

        /* Grain overlay */
        .final-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: ${GRAIN_SVG};
          background-repeat: repeat;
          background-size: 256px 256px;
          pointer-events: none;
          opacity: 0.5;
          z-index: 0;
        }

        .final-cta__inner {
          position: relative;
          z-index: 1;
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }

        /* Scroll fade-in */
        .final-cta__inner > * {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .final-cta--visible .final-cta__inner > *:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0ms; }
        .final-cta--visible .final-cta__inner > *:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 120ms; }
        .final-cta--visible .final-cta__inner > *:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 240ms; }
        .final-cta--visible .final-cta__inner > *:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 360ms; }
        .final-cta--visible .final-cta__inner > *:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 480ms; }

        /* Ornament */
        .final-cta__ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .final-cta__ornament-line {
          width: 40px;
          height: 1px;
          background-color: #C9A96E;
          flex-shrink: 0;
        }

        .final-cta__ornament-text {
          font-family: 'Karla', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: #C9A96E;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Heading */
        .final-cta__heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 500;
          color: #FFFEE8;
          line-height: 1.15;
          margin: 0;
        }

        /* Sub text */
        .final-cta__sub {
          font-family: 'Karla', sans-serif;
          font-size: 16px;
          color: rgba(255, 254, 232, 0.65);
          max-width: 400px;
          margin: 20px auto 0;
          line-height: 1.6;
        }

        /* CTA button */
        .final-cta__btn-wrap {
          margin-top: 40px;
        }

        .final-cta__btn {
          display: inline-block;
          background-color: #FFFEE8;
          color: #27382C;
          border-radius: 9999px;
          padding: 16px 48px;
          font-family: 'Karla', sans-serif;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: background-color 200ms ease;
          border: none;
          cursor: pointer;
        }

        .final-cta__btn:hover {
          background-color: rgba(255, 254, 232, 0.90);
        }

        /* Trust line */
        .final-cta__trust {
          margin-top: 16px;
          font-family: 'Karla', sans-serif;
          font-size: 12px;
          color: rgba(255, 254, 232, 0.35);
        }

        @media (max-width: 767px) {
          .final-cta {
            padding: 96px 24px;
          }

          .final-cta__heading {
            font-size: 40px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="final-cta" aria-labelledby="final-cta-heading">
        <div className="final-cta__inner">

          {/* Ornament */}
          <div className="final-cta__ornament" aria-hidden="true">
            <span className="final-cta__ornament-line" />
            <span className="final-cta__ornament-text">Indeed, Age Is Just A Number</span>
            <span className="final-cta__ornament-line" />
          </div>

          {/* Heading */}
          <h2 id="final-cta-heading" className="final-cta__heading">
            Mulai Perjalanan Longevity Anda Hari Ini.
          </h2>

          {/* Sub text */}
          <p className="final-cta__sub">
            Bergabung gratis. Konsultasi pertama langsung dengan EVO.
          </p>

          {/* CTA Button */}
          <div className="final-cta__btn-wrap">
            <a href="/signup" className="final-cta__btn">
              Daftar Gratis Sekarang
            </a>
          </div>

          {/* Trust line */}
          <p className="final-cta__trust">
            Tidak perlu kartu kredit. Mulai dalam 2 menit.
          </p>

        </div>
      </section>
    </>
  );
}

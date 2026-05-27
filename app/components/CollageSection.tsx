"use client";

import { useEffect, useRef, useState } from "react";

export default function CollageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="collage-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Karla:wght@400;500;600&display=swap');

        :root {
          --color-primary: #27382C;
          --color-background: #FFFEE8;
          --color-accent: #C9A96E;
          --color-text-light: #FFFEE8;
          --color-text-muted: rgba(39, 56, 44, 0.70);
        }

        .collage-section {
          background: var(--color-background);
          padding: 96px 24px;
        }

        .collage-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* ── Collage ── */
        .collage-photos {
          position: relative;
          height: 480px;
        }

        .collage-photo {
          position: absolute;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 8px 32px rgba(39, 56, 44, 0.18);
          display: block;
        }

        .collage-photo-1 {
          top: 0;
          left: 0;
          width: 62%;
          aspect-ratio: 4 / 3;
          transform: rotate(-2deg);
          z-index: 1;
        }

        .collage-photo-2 {
          top: 60px;
          right: 0;
          width: 52%;
          aspect-ratio: 3 / 4;
          transform: rotate(1.5deg);
          z-index: 2;
        }

        .collage-photo-3 {
          bottom: 0;
          left: 32px;
          width: 48%;
          aspect-ratio: 4 / 3;
          transform: rotate(-1deg);
          z-index: 3;
        }

        /* ── Text ── */
        .collage-text {
          display: flex;
          flex-direction: column;
        }

        .collage-label {
          font-family: 'Karla', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: var(--color-accent);
          text-transform: uppercase;
        }

        .collage-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 38px;
          font-weight: 500;
          color: var(--color-primary);
          line-height: 1.2;
          margin-top: 16px;
          text-wrap: balance;
        }

        .collage-divider {
          width: 40px;
          height: 1px;
          background: var(--color-accent);
          margin: 24px 0;
          border: none;
        }

        .collage-body {
          font-family: 'Karla', sans-serif;
          font-size: 16px;
          color: var(--color-text-muted);
          line-height: 1.75;
        }

        .collage-cta {
          display: inline-block;
          margin-top: 32px;
          padding: 12px 32px;
          border: 1px solid var(--color-primary);
          border-radius: 9999px;
          color: var(--color-primary);
          font-family: 'Karla', sans-serif;
          font-size: 15px;
          text-decoration: none;
          transition: background 200ms ease, color 200ms ease;
          align-self: flex-start;
        }

        .collage-cta:hover {
          background: var(--color-primary);
          color: var(--color-text-light);
        }

        /* ── Fade-in animation ── */
        .collage-fade {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 600ms ease, transform 600ms ease;
        }

        .collage-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .collage-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          /* collage first, text below — already the DOM order */
          .collage-photos {
            height: 360px;
          }

          .collage-heading {
            font-size: 30px;
          }
        }
      `}</style>

      <div className="collage-inner">
        {/* LEFT — Photo collage */}
        <div
          className={`collage-photos collage-fade${isVisible ? " visible" : ""}`}
          style={{ transitionDelay: "0ms" }}
        >
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop"
            alt="Meditasi dan keseimbangan hidup"
            className="collage-photo collage-photo-1"
          />
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80&fit=crop"
            alt="Latihan fisik untuk kesehatan"
            className="collage-photo collage-photo-2"
          />
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&fit=crop"
            alt="Yoga dan longevity"
            className="collage-photo collage-photo-3"
          />
        </div>

        {/* RIGHT — Text content */}
        <div className="collage-text">
          <span
            className={`collage-label collage-fade${isVisible ? " visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            Pendekatan Kami
          </span>

          <h2
            className={`collage-heading collage-fade${isVisible ? " visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            Sains. Teknologi. Kemanusiaan.
            <br />
            Semua Untuk Longevity Anda.
          </h2>

          <hr
            className={`collage-divider collage-fade${isVisible ? " visible" : ""}`}
            style={{ transitionDelay: "300ms" }}
          />

          <p
            className={`collage-body collage-fade${isVisible ? " visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            EVOIA menggabungkan kecerdasan buatan dengan pemahaman mendalam
            tentang tubuh manusia — memberikan panduan yang benar-benar
            personal, bukan generik.
          </p>

          <a
            href="/signup"
            className={`collage-cta collage-fade${isVisible ? " visible" : ""}`}
            style={{ transitionDelay: "500ms" }}
          >
            Mulai Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

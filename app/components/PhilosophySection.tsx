"use client";

import { useEffect, useRef, useState } from "react";

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Karla:wght@400;500&display=swap');

        :root {
          --color-primary:    #27382C;
          --color-background: #FFFEE8;
          --color-accent:     #C9A96E;
          --color-text-light: #FFFEE8;
          --color-text-muted: rgba(39,56,44,0.65);
        }

        .philosophy-section {
          background: var(--color-background);
          padding: 96px 24px;
        }

        .philosophy-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 720px;
          margin: 0 auto;
        }

        /* --- scroll fade-in --- */
        .philosophy-inner > * {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .philosophy-section.is-visible .philosophy-inner > *:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0ms; }
        .philosophy-section.is-visible .philosophy-inner > *:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 120ms; }
        .philosophy-section.is-visible .philosophy-inner > *:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 240ms; }
        .philosophy-section.is-visible .philosophy-inner > *:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 360ms; }
        .philosophy-section.is-visible .philosophy-inner > *:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 480ms; }

        /* --- section label --- */
        .philosophy-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Karla', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: var(--color-accent);
          text-transform: uppercase;
        }

        .philosophy-label-line {
          width: 32px;
          height: 1px;
          background: var(--color-accent);
          flex-shrink: 0;
        }

        /* --- heading --- */
        .philosophy-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 500;
          color: var(--color-primary);
          text-align: center;
          line-height: 1.2;
          margin-top: 24px;
        }

        @media (min-width: 768px) {
          .philosophy-heading {
            font-size: 56px;
          }
        }

        /* --- gold divider --- */
        .philosophy-divider {
          width: 60px;
          height: 1px;
          background: var(--color-accent);
          margin: 32px auto 0;
        }

        /* --- body text --- */
        .philosophy-body {
          font-family: 'Karla', sans-serif;
          font-size: 17px;
          line-height: 1.75;
          color: rgba(39, 56, 44, 0.72);
          text-align: center;
          max-width: 600px;
          margin-top: 32px;
        }

        /* --- CTA text link --- */
        .philosophy-cta {
          display: inline-block;
          font-family: 'Karla', sans-serif;
          font-size: 14px;
          color: var(--color-primary);
          margin-top: 32px;
          text-decoration: none;
          border-bottom: 1px solid var(--color-accent);
          padding-bottom: 2px;
          transition: color 0.2s ease;
        }

        .philosophy-cta:hover {
          color: var(--color-accent);
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`philosophy-section${visible ? " is-visible" : ""}`}
        aria-labelledby="philosophy-heading"
      >
        <div className="philosophy-inner">

          {/* Section label */}
          <div className="philosophy-label" aria-hidden="true">
            <span className="philosophy-label-line" />
            FILOSOFI KAMI
            <span className="philosophy-label-line" />
          </div>

          {/* Main heading */}
          <h2 id="philosophy-heading" className="philosophy-heading">
            Panjang Umur Bukan Soal Keberuntungan. Ini Soal Pilihan.
          </h2>

          {/* Gold divider */}
          <div className="philosophy-divider" aria-hidden="true" />

          {/* Body text */}
          <p className="philosophy-body">
            EVOIA hadir untuk menemani Anda memahami tubuh sendiri,
            membuat keputusan yang lebih baik setiap hari,
            dan menjalani hidup yang benar-benar berkualitas —
            bukan sekadar panjang.
          </p>

          {/* CTA text link */}
          <a href="/about" className="philosophy-cta">
            Kenali lebih dalam tentang EVOIA →
          </a>

        </div>
      </section>
    </>
  );
}

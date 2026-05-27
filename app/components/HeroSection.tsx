"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = elementsRef.current.filter(Boolean) as HTMLElement[];
    // Trigger fade-in staggered on mount
    els.forEach((el, i) => {
      el.style.transitionDelay = `${i * 200}ms`;
      el.classList.add("hero-fade-in--visible");
    });
  }, []);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    elementsRef.current[i] = el;
  };

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          background: linear-gradient(135deg, #27382C 0%, #1a2a1f 40%, #2d4a35 70%, #27382C 100%);
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite;
        }

        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Noise texture overlay */
        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
          z-index: 1;
        }

        /* Dark overlay */
        .hero-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.15);
          pointer-events: none;
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 24px;
        }

        /* Fade-in animation */
        .hero-fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .hero-fade-in--visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Ornament quote */
        .hero-ornament {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .hero-ornament__line {
          display: inline-block;
          width: 40px;
          height: 1px;
          background-color: #C9A96E;
        }

        .hero-ornament__text {
          font-family: 'Karla', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: #C9A96E;
          white-space: nowrap;
        }

        /* Main heading */
        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 56px;
          font-weight: 500;
          line-height: 1.1;
          color: #FFFEE8;
          text-align: center;
          margin: 0;
        }

        @media (min-width: 768px) {
          .hero-heading {
            font-size: 84px;
          }
        }

        /* Sub-tagline */
        .hero-tagline {
          font-family: 'Karla', sans-serif;
          font-size: 16px;
          color: rgba(255, 254, 232, 0.80);
          max-width: 480px;
          text-align: center;
          line-height: 1.6;
          margin-top: 24px;
        }

        /* CTA row */
        .hero-cta {
          display: flex;
          flex-direction: row;
          gap: 16px;
          margin-top: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-btn-primary {
          background: #FFFEE8;
          color: #27382C;
          border: none;
          border-radius: 9999px;
          padding: 14px 36px;
          font-family: 'Karla', sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.2s ease;
          white-space: nowrap;
        }

        .hero-btn-primary:hover {
          opacity: 0.90;
        }

        .hero-btn-outline {
          background: transparent;
          color: #FFFEE8;
          border: 1px solid #FFFEE8;
          border-radius: 9999px;
          padding: 14px 36px;
          font-family: 'Karla', sans-serif;
          font-size: 15px;
          font-weight: 400;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease;
          white-space: nowrap;
        }

        .hero-btn-outline:hover {
          background: rgba(255, 254, 232, 0.12);
        }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          color: #C9A96E;
          font-size: 20px;
          animation: scrollBounce 1.8s ease-in-out infinite;
          line-height: 1;
          user-select: none;
          aria-hidden: true;
        }

        @keyframes scrollBounce {
          0%   { transform: translateX(-50%) translateY(0); }
          50%  { transform: translateX(-50%) translateY(8px); }
          100% { transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <section className="hero-section" aria-label="Hero">
        <div className="hero-content">

          {/* Ornament quote */}
          <div
            className="hero-ornament hero-fade-in"
            ref={setRef(0)}
          >
            <span className="hero-ornament__line" aria-hidden="true" />
            <span className="hero-ornament__text">INDEED, AGE IS JUST A NUMBER</span>
            <span className="hero-ornament__line" aria-hidden="true" />
          </div>

          {/* Main heading */}
          <h1
            className="hero-heading hero-fade-in"
            ref={setRef(1) as React.RefCallback<HTMLHeadingElement>}
          >
            Sahabat Masa Mudamu,
            <br />
            Untuk Hidup yang Lebih
            <br />
            Bermakna &amp; Berkualitas.
          </h1>

          {/* Sub-tagline */}
          <p
            className="hero-tagline hero-fade-in"
            ref={setRef(2) as React.RefCallback<HTMLParagraphElement>}
          >
            Platform longevity pertama di Indonesia — dipandu AI, didukung sains, dirancang untuk Anda.
          </p>

          {/* CTA buttons */}
          <div
            className="hero-cta hero-fade-in"
            ref={setRef(3) as React.RefCallback<HTMLDivElement>}
          >
            <a href="/signup" className="hero-btn-primary">
              Mulai Perjalanan Saya
            </a>
            <a href="/about" className="hero-btn-outline">
              Kenali EVOIA
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" aria-hidden="true">&#8595;</div>
      </section>
    </>
  );
}

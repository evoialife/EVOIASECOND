"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Karla:wght@300;400;500;600;700&display=swap');

        :root {
          --color-primary: #27382C;
          --color-background: #FFFEE8;
          --color-accent: #C9A96E;
          --color-text-light: #FFFEE8;
          --color-text-muted: rgba(39, 56, 44, 0.65);
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          height: 64px;
          background-color: var(--color-background);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 0 24px;
          transition: box-shadow 0.2s ease, border-bottom 0.2s ease;
        }

        .navbar--default {
          border-bottom: 1px solid var(--color-accent);
          box-shadow: none;
        }

        .navbar--scrolled {
          border-bottom: none;
          box-shadow: 0 1px 0 rgba(39, 56, 44, 0.08);
        }

        /* LEFT */
        .navbar__left {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: flex-start;
        }

        .navbar__icon-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: var(--color-primary);
          line-height: 1;
          display: flex;
          align-items: center;
        }

        .navbar__hamburger {
          font-size: 20px;
        }

        .navbar__bag {
          font-size: 18px;
        }

        /* CENTER */
        .navbar__center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .navbar__brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0.25em;
          color: var(--color-primary);
          text-decoration: none;
          line-height: 1.1;
        }

        .navbar__tagline {
          font-family: 'Karla', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--color-accent);
          display: block;
          margin-top: 2px;
          line-height: 1;
        }

        /* RIGHT */
        .navbar__right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .navbar__cta {
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          color: var(--color-text-light);
          background-color: var(--color-primary);
          border: none;
          border-radius: 9999px;
          padding: 8px 24px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.2s ease;
          white-space: nowrap;
        }

        .navbar__cta:hover {
          opacity: 0.85;
        }

        @media (max-width: 767px) {
          .navbar {
            padding: 0 16px;
          }
        }
      `}</style>

      <nav
        className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--default"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* LEFT: hamburger + bag */}
        <div className="navbar__left">
          <button
            className="navbar__icon-btn navbar__hamburger"
            aria-label="Open menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect y="3" width="20" height="1.5" rx="0.75" fill="#27382C" />
              <rect y="9.25" width="20" height="1.5" rx="0.75" fill="#27382C" />
              <rect y="15.5" width="20" height="1.5" rx="0.75" fill="#27382C" />
            </svg>
          </button>

          <button
            className="navbar__icon-btn navbar__bag"
            aria-label="Shopping bag"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3.75 5.25H14.25L13.125 14.25H4.875L3.75 5.25Z"
                stroke="#27382C"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />
              <path
                d="M6.75 5.25V4.5C6.75 3.25736 7.75736 2.25 9 2.25C10.2426 2.25 11.25 3.25736 11.25 4.5V5.25"
                stroke="#27382C"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* CENTER: brand + tagline */}
        <div className="navbar__center">
          <a href="/" className="navbar__brand" aria-label="EVOIA homepage">
            EVOIA
          </a>
          <span className="navbar__tagline">Sahabat Masa Mudamu</span>
        </div>

        {/* RIGHT: CTA button */}
        <div className="navbar__right">
          <a href="/ai-chat" className="navbar__cta">
            Coba EVO
          </a>
        </div>
      </nav>
    </>
  );
}

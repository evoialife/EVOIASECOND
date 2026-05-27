"use client";

import Link from "next/link";

const PLATFORM_LINKS = [
  { label: "Konsultasi EVO", href: "/ai-chat" },
  { label: "Komunitas", href: "/community" },
  { label: "Shop", href: "/shop" },
  { label: "Biomarker", href: "/biomarker" },
];

const COMPANY_LINKS = [
  { label: "Tentang Kami", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Karir", href: "/karir" },
  { label: "Kontak", href: "/kontak" },
];

const LEGAL_LINKS = [
  { label: "Syarat & Ketentuan", href: "/terms" },
  { label: "Privasi", href: "/privacy" },
  { label: "Lisensi", href: "/license" },
];

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

function FooterLinkGroup({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="footer-col-heading">{heading}</p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Karla:wght@400;500&display=swap');

        :root {
          --color-primary: #27382C;
          --color-background: #FFFEE8;
          --color-accent: #C9A96E;
          --color-text-light: #FFFEE8;
          --color-text-muted: rgba(39,56,44,0.65);
        }

        .footer-root {
          background-color: #27382C;
          border-top: 1px solid rgba(201,169,110,0.20);
          padding: 64px 24px 0;
          font-family: 'Karla', sans-serif;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 639px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Column 1 — Brand */
        .footer-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 600;
          color: #FFFEE8;
          letter-spacing: 0.25em;
          line-height: 1;
        }

        .footer-brand-tagline {
          display: block;
          font-family: 'Karla', sans-serif;
          font-size: 12px;
          color: #C9A96E;
          letter-spacing: 0.18em;
          margin-top: 4px;
        }

        .footer-brand-desc {
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          color: rgba(255,254,232,0.50);
          max-width: 200px;
          line-height: 1.6;
          margin-top: 16px;
        }

        .footer-social-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          align-items: center;
        }

        .footer-social-btn {
          color: #C9A96E;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          line-height: 1;
          transition: color 200ms ease;
          display: flex;
          align-items: center;
        }

        .footer-social-btn:hover {
          color: #FFFEE8;
        }

        /* Link columns */
        .footer-col-heading {
          font-family: 'Karla', sans-serif;
          font-size: 11px;
          letter-spacing: 0.22em;
          color: #C9A96E;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .footer-link {
          display: block;
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          color: rgba(255,254,232,0.60);
          text-decoration: none;
          line-height: 2.2;
          transition: color 200ms ease;
        }

        .footer-link:hover {
          color: #FFFEE8;
        }

        /* Bottom bar */
        .footer-bottom {
          max-width: 1200px;
          margin: 48px auto 0;
          border-top: 1px solid rgba(201,169,110,0.10);
          padding: 24px 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom-text {
          font-family: 'Karla', sans-serif;
          font-size: 12px;
          color: rgba(255,254,232,0.35);
        }

        @media (max-width: 639px) {
          .footer-bottom {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-grid">
          {/* Column 1 — Brand */}
          <div>
            <span className="footer-brand-name">EVOIA</span>
            <span className="footer-brand-tagline">Sahabat Masa Mudamu</span>
            <p className="footer-brand-desc">
              Platform longevity pertama di Indonesia. Dipandu AI, didukung sains.
            </p>
            <div className="footer-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram EVOIA"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="YouTube EVOIA"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — Platform */}
          <FooterLinkGroup heading="PLATFORM" links={PLATFORM_LINKS} />

          {/* Column 3 — Company */}
          <FooterLinkGroup heading="PERUSAHAAN" links={COMPANY_LINKS} />

          {/* Column 4 — Legal */}
          <FooterLinkGroup heading="LEGAL" links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-bottom-text">
            &copy; 2026 EVOIA. Hak cipta dilindungi.
          </span>
          <span className="footer-bottom-text">
            Made with ❤️ for a longer, better life
          </span>
        </div>
      </footer>
    </>
  );
}

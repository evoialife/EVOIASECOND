"use client";

const pillars = [
  {
    label: "KONSULTASI AI",
    title: "EVO — AI Longevity Consultant",
    link: "/ai-chat",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop",
  },
  {
    label: "KOMUNITAS",
    title: "Knowledge & Sharing Bersama",
    link: "/community",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&fit=crop",
  },
  {
    label: "SHOP",
    title: "Produk Longevity Terkurasi",
    link: "/shop",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fit=crop",
  },
  {
    label: "BIOMARKER",
    title: "Tracking Kesehatan Berbasis Data",
    link: "/biomarker",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
  },
];

export default function PillarsGrid() {
  return (
    <section className="pillars-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Karla:wght@300;400;500;600&display=swap');

        :root {
          --color-primary: #27382C;
          --color-background: #FFFEE8;
          --color-accent: #C9A96E;
          --color-text-light: #FFFEE8;
          --color-text-muted: rgba(39, 56, 44, 0.65);
        }

        .pillars-section {
          background: var(--color-background);
          padding-top: 16px;
        }

        .pillars-label {
          font-family: 'Karla', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: var(--color-accent);
          text-align: center;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .pillar-card {
          position: relative;
          overflow: hidden;
          height: 360px;
          display: block;
          text-decoration: none;
          cursor: pointer;
        }

        .pillar-card__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 300ms ease;
        }

        .pillar-card:hover .pillar-card__bg {
          transform: scale(1.04);
        }

        .pillar-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(39, 56, 44, 0.88) 0%,
            rgba(39, 56, 44, 0.10) 55%,
            transparent 100%
          );
          transition: background 300ms ease;
        }

        .pillar-card:hover .pillar-card__overlay {
          background: linear-gradient(
            to top,
            rgba(39, 56, 44, 0.96) 0%,
            rgba(39, 56, 44, 0.22) 55%,
            rgba(39, 56, 44, 0.05) 100%
          );
        }

        .pillar-card__content {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 20px;
        }

        .pillar-card__label {
          font-family: 'Karla', sans-serif;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--color-accent);
          display: block;
          text-transform: uppercase;
        }

        .pillar-card__title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 500;
          color: var(--color-text-light);
          margin-top: 6px;
          line-height: 1.3;
        }

        @media (max-width: 767px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }

          .pillar-card {
            height: 280px;
          }
        }
      `}</style>

      <p className="pillars-label">APA YANG KAMI TAWARKAN</p>

      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <a
            key={pillar.label}
            href={pillar.link}
            className="pillar-card"
            aria-label={pillar.title}
          >
            <div
              className="pillar-card__bg"
              style={{ backgroundImage: `url('${pillar.image}')` }}
              role="img"
              aria-hidden="true"
            />
            <div className="pillar-card__overlay" aria-hidden="true" />
            <div className="pillar-card__content">
              <span className="pillar-card__label">{pillar.label}</span>
              <p className="pillar-card__title">{pillar.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

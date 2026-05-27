export default function AnnouncementBar() {
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

        .announcement-bar {
          width: 100%;
          height: 40px;
          background-color: var(--color-primary);
          border-bottom: 1px solid var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .announcement-bar__text {
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          letter-spacing: 0.1em;
          color: var(--color-text-light);
          white-space: nowrap;
        }

        .announcement-bar__link {
          color: var(--color-accent);
          text-decoration: underline;
          transition: opacity 0.2s ease;
        }

        .announcement-bar__link:hover {
          opacity: 0.8;
        }
      `}</style>

      <div className="announcement-bar" role="banner" aria-label="Announcement">
        <p className="announcement-bar__text">
          Konsultasi AI Longevity Pertama Anda — Gratis.{" "}
          <a href="/signup" className="announcement-bar__link">
            Mulai Sekarang &rarr;
          </a>
        </p>
      </div>
    </>
  );
}

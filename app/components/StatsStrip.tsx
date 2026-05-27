"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  raw: number;
  suffix: string;
  thousands: boolean;
  label: string;
}

const STATS: Stat[] = [
  { raw: 10000, suffix: "+", thousands: true,  label: "Member Aktif" },
  { raw: 95,    suffix: "%", thousands: false, label: "Merasakan Perubahan Positif" },
  { raw: 50,    suffix: "+", thousands: false, label: "Program Longevity Terstruktur" },
];

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

function formatNumber(value: number, thousands: boolean): string {
  if (thousands) {
    return value.toLocaleString("id-ID"); // uses "." as thousands separator
  }
  return String(Math.floor(value));
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration]);

  return count;
}

function StatBlock({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.raw, 1800, active);
  const display = formatNumber(count, stat.thousands) + stat.suffix;

  return (
    <div className="stat-block">
      <span className="stat-number" aria-live="polite">{display}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Karla:wght@400;500&display=swap');

        :root {
          --color-primary:     #27382C;
          --color-background:  #FFFEE8;
          --color-accent:      #C9A96E;
          --color-text-light:  #FFFEE8;
          --color-text-muted:  rgba(39,56,44,0.65);
        }

        .stats-strip {
          background: var(--color-primary);
          padding: 48px 0;
          border-top:    1px solid rgba(201, 169, 110, 0.3);
          border-bottom: 1px solid rgba(201, 169, 110, 0.3);
        }

        .stats-inner {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 0;
          max-width: 960px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .stats-divider {
          width: 1px;
          height: 60px;
          background: rgba(201, 169, 110, 0.20);
          align-self: center;
          flex-shrink: 0;
        }

        .stat-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 48px;
          text-align: center;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 500;
          line-height: 1;
          color: var(--color-text-light);
        }

        .stat-label {
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          color: var(--color-accent);
          letter-spacing: 0.12em;
          margin-top: 8px;
          text-transform: uppercase;
        }

        @media (max-width: 767px) {
          .stats-inner {
            flex-direction: column;
            gap: 32px;
          }

          .stats-divider {
            display: none;
          }

          .stat-block {
            padding: 0;
          }
        }
      `}</style>

      <section className="stats-strip" ref={sectionRef} aria-label="Statistics">
        <div className="stats-inner">
          {STATS.map((stat, i) => (
            <>
              <StatBlock key={stat.label} stat={stat} active={active} />
              {i < STATS.length - 1 && (
                <div key={`divider-${i}`} className="stats-divider" aria-hidden="true" />
              )}
            </>
          ))}
        </div>
      </section>
    </>
  );
}

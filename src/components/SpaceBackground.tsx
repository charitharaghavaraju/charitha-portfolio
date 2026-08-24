"use client";

import { useEffect, useState } from "react";

function makeStars(count: number, seed: number) {
  let value = seed;
  const rand = () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${rand() * 100}%`,
    top: `${rand() * 100}%`,
    size: 2 + rand() * 3,
    delay: `${rand() * 5}s`,
    opacity: 0.55 + rand() * 0.45,
  }));
}

const farStars = makeStars(48, 13);
const midStars = makeStars(24, 97);
const nearStars = makeStars(10, 41);

type Burst = {
  id: number;
  x: number;
  y: number;
  angle: number;
};

type TrailPoint = {
  id: number;
  x: number;
  y: number;
  born: number;
};

const STAR_PATH =
  "M12 2.1 14.7 8.4 21.6 9.2 16.4 13.8 17.9 20.6 12 17.3 6.1 20.6 7.6 13.8 2.4 9.2 9.3 8.4 12 2.1Z";

function CursorStar() {
  return (
    <svg className="space-cursor-star" viewBox="0 0 24 24">
      <path fill="currentColor" d={STAR_PATH} />
    </svg>
  );
}

export function SpaceBackground() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let lastX = pointerX;
    let lastY = pointerY;
    let trailId = 0;
    let points: TrailPoint[] = [];

    const render = () => {
      const now = performance.now();
      const nx = pointerX / window.innerWidth - 0.5;
      const ny = pointerY / window.innerHeight - 0.5;
      root.style.setProperty("--pointer-x", `${pointerX}px`);
      root.style.setProperty("--pointer-y", `${pointerY}px`);
      if (!reduce) {
        root.style.setProperty("--space-y", `${window.scrollY}px`);
        root.style.setProperty("--pointer-nx", nx.toFixed(4));
        root.style.setProperty("--pointer-ny", ny.toFixed(4));

        const dx = pointerX - lastX;
        const dy = pointerY - lastY;
        if (dx * dx + dy * dy > 36) {
          trailId += 1;
          points.push({
            id: trailId,
            x: pointerX,
            y: pointerY,
            born: now,
          });
          lastX = pointerX;
          lastY = pointerY;
        }
        points = points.filter((point) => now - point.born < 180).slice(-7);
        setTrail(points);
      }
      frame = 0;
      if (!reduce && points.length) {
        frame = requestAnimationFrame(render);
      }
    };

    const queue = () => {
      if (!frame) {
        frame = requestAnimationFrame(render);
      }
    };

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      queue();
    };

    const onScroll = () => queue();

    const onClick = (event: MouseEvent) => {
      if (reduce) {
        return;
      }
      const burst: Burst = {
        id: Date.now() + Math.random(),
        x: event.clientX,
        y: event.clientY,
        angle: -25 - Math.random() * 40,
      };
      setBursts((current) => [...current.slice(-4), burst]);
      window.setTimeout(() => {
        setBursts((current) => current.filter((item) => item.id !== burst.id));
      }, 900);
    };

    queue();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onClick);
    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="space-nebula space-nebula-a" />
        <div className="space-nebula space-nebula-b" />
        <div className="space-nebula space-nebula-c" />
        <div className="space-milky-way" />
        <StarLayer stars={farStars} className="space-layer-far" />
        <StarLayer stars={midStars} className="space-layer-mid" />
        <StarLayer stars={nearStars} className="space-layer-near" />
        {bursts.map((burst) => (
          <span
            key={burst.id}
            className="space-burst"
            style={{
              left: burst.x,
              top: burst.y,
              transform: `rotate(${burst.angle}deg)`,
            }}
          />
        ))}
      </div>
      {trail.map((point, index) => {
        const life = (index + 1) / trail.length;
        return (
          <div
            key={point.id}
            className="space-cursor space-cursor-trail"
            style={{
              top: point.y,
              left: point.x,
              opacity: life * 0.4,
              scale: 0.42 + life * 0.35,
            }}
          >
            <CursorStar />
          </div>
        );
      })}
      <div className="space-cursor" aria-hidden="true">
        <CursorStar />
      </div>
    </>
  );
}

function StarLayer({
  stars,
  className,
}: {
  stars: ReturnType<typeof makeStars>;
  className: string;
}) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {stars.map((star) => (
        <span
          key={star.id}
          className="space-star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            ["--star-opacity" as string]: star.opacity,
          }}
        />
      ))}
    </div>
  );
}

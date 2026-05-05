'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (hidden) setHidden(false);
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-cursor="hover"], input, textarea, select');
      setHover(!!interactive);
    };
    const leave = () => setHidden(true);

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${hover ? 1.6 : 1})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, [hover, hidden]);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(59,111,255,0.65)',
          mixBlendMode: 'difference',
          transition: 'transform 240ms var(--ease-standard), opacity 240ms ease',
          opacity: hidden ? 0 : 1
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[101] hidden md:block"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#3B6FFF',
          transition: 'opacity 240ms ease',
          opacity: hidden ? 0 : 1
        }}
      />
    </>
  );
}

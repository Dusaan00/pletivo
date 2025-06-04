"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function Scroller() {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();

    const raf = (time: number) => {
      scroller.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };

    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      scroller.destroy();
    };
  }, []);

  return null;
}

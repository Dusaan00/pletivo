"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function Scroller() {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [rafId, setRafId] = useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();
    setLenis(scroller);

    const raf = (time: number) => {
      scroller.raf(time);
      const frameId = requestAnimationFrame(raf);
      if (rafId !== frameId) {
        setRafId(frameId);
      }
    };

    const frameId = requestAnimationFrame(raf);
    setRafId(frameId);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      if (scroller) {
        scroller.destroy();
      }
    };
  }, []);

  return null;
}

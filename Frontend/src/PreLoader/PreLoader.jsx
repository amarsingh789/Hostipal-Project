import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";

const PreLoader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(()=> {
    const hasPlayed = sessionStorage.getItem("ziva_preloader_played");
    return !hasPlayed; // if it has played, we are not loading
  });

  // ── Refs ──────────────────────────────────────────────────────────
  const loaderRef    = useRef(null);
  const eyebrowRef   = useRef(null);
  const text1Ref     = useRef(null);   // "ELEVATING"
  const text2Ref     = useRef(null);   // "HEALTHCARE."
  const taglineRef   = useRef(null);
  const counterRef   = useRef(null);
  const progressRef  = useRef(null);
  const dotRef       = useRef(null);

  // ── GSAP Timeline ─────────────────────────────────────────────────
  useEffect(() => {

    // const hasPlayed = sessionStorage.getItem("ziva_preloader_played");
    // if(hasPlayed){
    //     setIsLoading(false)
    //     if(onComplete) onComplete();
    //     return;
    // }
    // setIsLoading(true);
    if(!isLoading || !loaderRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          sessionStorage.setItem("ziva_preloader_played", "true");
          if (onComplete) onComplete();
        },
      });

      // 1. Pulse dot fade in
      tl.fromTo(
        dotRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" },
        0
      );

      // 2. Eyebrow label
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.3
      );

      // 3. Main headline — staggered slide-up from overflow:hidden parent
      //    overflow:hidden on the wrapper clips the translateY so text
      //    appears to emerge from behind a mask — classic editorial reveal
      tl.fromTo(
        [text1Ref.current, text2Ref.current],
        { y: "110%", skewY: 4 },
        {
          y: "0%",
          skewY: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.12,
        },
        0.2
      );

      // 4. Tagline
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        0.9
      );

      // 5. Progress bar — scaleX trick (origin-left required on the div)
      tl.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 2.2, ease: "expo.inOut" },
        0.5  // starts early, runs in background
      );

      // 6. Counter 0 → 100 in sync with progress bar
      tl.to(
        counterRef.current,
        {
          innerText: 100,
          snap: { innerText: 1 },
          duration: 2.2,
          ease: "expo.inOut",
        },
        0.5  // same start position as bar
      );

      // 7. Breathing pause before exit
      tl.to({}, { duration: 0.4 });
    }, loaderRef);

    return () => ctx.revert(); // cleanup — no memory leaks
  }, []);

  // Awwwards cubic-bezier — buttery premium exit feel
  const cinEase = [0.76, 0, 0.24, 1];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          ref={loaderRef}
          key="ziva-preloader"
          exit={{
            y: "-100vh",
            transition: { duration: 1.0, ease: cinEase },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between
                     bg-[#021814] p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* ── Subtle grid texture ───────────────────────────────── */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.8) 40px)," +
                "repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.8) 40px)",
            }}
          />

          {/* ── Corner brackets ───────────────────────────────────── */}
          <span className="pointer-events-none absolute top-5 left-5 w-4 h-4
                           border-t border-l border-[#1D9E75] opacity-40" />
          <span className="pointer-events-none absolute bottom-5 right-5 w-4 h-4
                           border-b border-r border-[#1D9E75] opacity-40" />

          {/* ── Top bar ───────────────────────────────────────────── */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-2">
              {/* Pulse dot */}
              <span
                ref={dotRef}
                className="w-[6px] h-[6px] rounded-full bg-[#1D9E75]
                           animate-pulse opacity-0"
              />
              <span className="font-mono text-[10px] tracking-[0.22em]
                               uppercase text-[#5DCAA5]">
                Ziva Healthcare
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-[0.15em]
                             uppercase text-[#2a5a50]">
              EST. 2024 &nbsp;/&nbsp; v2.0
            </span>
          </div>

          {/* ── Center — main typography ──────────────────────────── */}
          <div className="flex flex-col justify-center flex-1 py-8 relative z-10">
            {/* Eyebrow */}
            <p
              ref={eyebrowRef}
              className="font-mono text-[10px] tracking-[0.35em] uppercase
                         text-[#1D9E75] mb-4 opacity-0"
            >
              Premium Healthcare Platform
            </p>

            {/* "ELEVATING" — overflow:hidden clips the slide-up */}
            <div className="overflow-hidden">
              <h1
                ref={text1Ref}
                className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.9]
                           tracking-[-0.03em] text-white font-serif"
              >
                ELEVATING
              </h1>
            </div>

            {/* "HEALTHCARE." — lime accent */}
            <div className="overflow-hidden">
              <h1
                ref={text2Ref}
                className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.9]
                           tracking-[-0.03em] text-[#dfff4f] font-serif"
              >
                HEALTHCARE.
              </h1>
            </div>

            {/* Tagline */}
            <p
              ref={taglineRef}
              className="mt-4 text-sm tracking-[0.08em] text-[#3a7060] opacity-0"
            >
              Caring for you — every step of the way
            </p>
          </div>

          {/* ── Bottom — counter + progress ───────────────────────── */}
          <div className="flex flex-col gap-3 relative z-10">
            <div className="flex justify-between items-end">
              <span className="font-mono text-[10px] tracking-[0.2em]
                               uppercase text-[#2a5a50]">
                Initializing system
              </span>
              {/* Counter */}
              <span className="font-mono text-[clamp(2rem,5vw,3.5rem)]
                               font-light leading-none text-[#dfff4f] flex items-baseline gap-1">
                <span ref={counterRef}>0</span>
                <span className="text-lg opacity-60">%</span>
              </span>
            </div>

            {/* Progress bar — origin-left so scaleX goes left→right */}
            <div className="w-full h-[1.5px] bg-white/[0.06] overflow-hidden">
              <div
                ref={progressRef}
                className="h-full w-full origin-left scale-x-0"
                style={{
                  background: "linear-gradient(90deg, #1D9E75, #dfff4f)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
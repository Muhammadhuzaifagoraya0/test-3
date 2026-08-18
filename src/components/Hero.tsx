"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    heading: (
      <>
        Welcome to <span className="text-brand">one</span>
        <span className="font-bold">pager</span>
      </>
    ),
    text: "we design and develop awesome websites and smart applications, impactful identities using the latest",
    button: true,
  },
  {
    heading: (
      <>
        We are great <span className="font-bold">company</span>
      </>
    ),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    button: true,
  },
  {
    heading: (
      <>
        <span className="text-brand">one</span>
        <span className="font-bold">pager</span> is very suitable
      </>
    ),
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipisicing elit",
    button: false,
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setActive((v) => (v + 1) % slides.length);

  return (
    <section
      id="home-section"
      className="relative flex h-screen min-h-[500px] items-center justify-center overflow-hidden bg-[#1b1f27]"
      style={{
        backgroundImage: "url('/upload/slide.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-700 ${
            i === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <h1 className="mx-4 max-w-4xl text-3xl uppercase leading-tight text-white md:text-[60px]">
            {slide.heading}
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-white md:text-[20px]">
            {slide.text}
          </p>
          {slide.button && (
            <a href="#" className="skew-cta mt-6 px-8 py-3.5 text-[17px] font-bold uppercase text-white">
              <span>Learn More</span>
            </a>
          )}
        </div>
      ))}

      {/* the original hides .flex-control-nav (display:none) - no dots on the real site */}

      {/* arrows - matches FlexSlider default exactly: fa-arrow-left/right glyph, no box,
          vertically centered on the slider content (original: top:50% of a container
          anchored at 50% - 100px, i.e. essentially true vertical center) */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-10 flex h-7 w-[26px] -translate-y-1/2 items-center text-white transition-transform hover:scale-[1.15] md:left-[70px]"
      >
        <svg className="h-[30px] w-[30px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12l6-6M4 12l6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-10 flex h-7 w-[26px] -translate-y-1/2 items-center justify-end text-white transition-transform hover:scale-[1.15] md:right-[70px]"
      >
        <svg className="h-[30px] w-[30px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4M20 12l-6-6M20 12l-6 6" />
        </svg>
      </button>
    </section>
  );
}

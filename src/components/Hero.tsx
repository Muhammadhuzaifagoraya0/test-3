"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      className="relative flex h-[500px] sm:h-[580px] md:h-[650px] lg:h-[750px] max-h-[85vh] w-full items-center justify-center overflow-hidden bg-[#1b1f27]"
      style={{
        backgroundImage: "url('/upload/slide.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-brightness-90" />

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-14 md:px-20 text-center transition-opacity duration-700 z-10 ${
            i === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <h1 className="max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-[56px] uppercase font-bold leading-tight text-white drop-shadow-md">
            {slide.heading}
          </h1>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed text-gray-200 drop-shadow-xs">
            {slide.text}
          </p>
          {slide.button && (
            <Link
              href="/about"
              className="skew-cta mt-6 sm:mt-8 px-6 sm:px-8 py-3 text-[14px] sm:text-[16px] font-bold uppercase tracking-wider text-white shadow-lg"
            >
              <span>Learn More</span>
            </Link>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-6 md:left-10 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-all hover:bg-brand hover:scale-110 active:scale-95"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 sm:right-6 md:right-10 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-all hover:bg-brand hover:scale-110 active:scale-95"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
}


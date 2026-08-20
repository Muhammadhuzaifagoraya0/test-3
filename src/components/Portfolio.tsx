"use client";

import { useState } from "react";

const filters = [
  { key: "*", label: "All" },
  { key: "web-design", label: "Web Design" },
  { key: "photography", label: "Photography" },
  { key: "illustration", label: "Illustration" },
  { key: "branding", label: "Branding" },
];

const items = [
  {
    src: "/upload/1.jpg",
    title: "Cool App Design",
    tags: "web-design photography",
  },
  {
    src: "/upload/2.jpg",
    title: "Cool App Design",
    tags: "branding illustration",
  },
  {
    src: "/upload/3.jpg",
    title: "Cool App Design",
    tags: "photography illustration",
  },
  {
    src: "/upload/4.jpg",
    title: "Cool App Design",
    tags: "web-design branding",
  },
  {
    src: "/upload/5.jpg",
    title: "Cool App Design",
    tags: "web-design photography",
  },
  {
    src: "/upload/6.jpg",
    title: "Cool App Design",
    tags: "branding photography",
  },
  {
    src: "/upload/7.jpg",
    title: "Cool App Design",
    tags: "web-design illustration",
  },
  {
    src: "/upload/8.jpg",
    title: "Cool App Design",
    tags: "web-design branding",
  },
  {
    src: "/upload/9.jpg",
    title: "Cool App Design",
    tags: "photography illustration",
  },
  {
    src: "/upload/10.jpg",
    title: "Cool App Design",
    tags: "web-design photography",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("*");
  const filtered =
    active === "*" ? items : items.filter((i) => i.tags.includes(active));

  return (
    <section
      id="portfolio-section"
      className="flex flex-1 flex-col justify-center bg-[#fafafa] py-16 md:py-20 lg:py-24"
    >
      <div className="container-custom my-auto">
        <div className="title-section mb-8 md:mb-12 text-center">
          <h1>Our Portfolio</h1>
          <p>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida</p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-10 border-y border-[#d2d2d2] py-3 md:py-4">
          <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
            {filters.map((f) => (
              <li key={f.key}>
                <button
                  type="button"
                  onClick={() => setActive(f.key)}
                  className={`skew-fill cursor-pointer px-3 py-1.5 text-[13px] font-bold uppercase tracking-wider transition-all sm:px-4 sm:text-[15px] md:text-[16px] ${
                    active === f.key ? "active text-white" : "text-gray-800"
                  }`}
                >
                  <span>{f.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, idx) => (
            <div
              key={`${item.src}-${idx}`}
              className="group relative overflow-hidden bg-gray-200 shadow-xs"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title}
                className="block w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand/90 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-[17px] font-bold uppercase leading-snug text-white md:text-[19px]">
                  {item.title}
                </h3>
                <span className="mt-1 text-[12px] font-medium uppercase tracking-wider text-white/90">
                  development, mobile
                </span>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View larger image"
                    className="skew-cta skew-cta-white flex h-10 w-10 items-center justify-center text-brand shadow-sm transition-transform hover:scale-110"
                  >
                    <svg
                      className="relative z-10 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="View details"
                    className="skew-cta skew-cta-white flex h-10 w-10 items-center justify-center text-brand shadow-sm transition-transform hover:scale-110"
                  >
                    <svg
                      className="relative z-10 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


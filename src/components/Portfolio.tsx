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
  const filtered = active === "*" ? items : items.filter((i) => i.tags.includes(active));

  return (
    <section
      id="portfolio-section"
      className="bg-[#fafafa] pt-16 pb-4 md:pt-[100px]"
    >
      <div className="container-custom">
        <div className="title-section mb-10 text-center">
          <h1>Our Portfolio</h1>
          <p>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida</p>
        </div>

        <ul className="mb-8 flex flex-wrap justify-center gap-1 border-y border-[#d2d2d2] py-[26px]">
          {filters.map((f) => (
            <li key={f.key}>
              <button
                type="button"
                onClick={() => setActive(f.key)}
                className={`skew-fill px-4 py-1.5 text-[18px] ${
                  active === f.key ? "active text-white" : "text-black"
                }`}
              >
                <span>{f.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {filtered.map((item) => (
            <div
              key={item.src}
              className="group relative mb-4 break-inside-avoid overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.title} className="block w-full" />
              <div className="absolute inset-0 flex scale-[1.15] flex-col items-center justify-center bg-brand/90 text-center opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                <div className="scale-125 rotate-180 transition-all duration-300 group-hover:scale-100 group-hover:rotate-0">
                  <h2 className="px-4 text-lg font-bold leading-tight text-white">
                    {item.title}
                  </h2>
                  <span className="text-[13px] font-bold text-white">
                    development, mobile
                  </span>
                </div>
                <div className="absolute -bottom-11 left-0 flex w-full justify-center transition-all duration-300 group-hover:bottom-0">
                  <a
                    href={item.src}
                    className="skew-cta skew-cta-white flex h-[43px] w-[47px] items-center justify-center text-brand"
                  >
                    <svg className="relative z-10 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="skew-cta skew-cta-white flex h-[43px] w-[47px] items-center justify-center text-brand"
                  >
                    <svg className="relative z-10 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-1.519-3.545a2.25 2.25 0 013.182 3.182L15 21l-3.75-3.75" />
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

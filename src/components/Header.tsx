"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "#home-section", id: "home-section", label: "Home" },
  { href: "#portfolio-section", id: "portfolio-section", label: "Portfolio" },
  { href: "#services-section", id: "services-section", label: "Services" },
  { href: "#team-section", id: "team-section", label: "Team" },
  { href: "#about-section", id: "about-section", label: "About" },
  { href: "#blog-section", id: "blog-section", label: "Blog" },
  { href: "#contact-section", id: "contact-section", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState("home-section");
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const stickThreshold = useRef(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
      // header's natural (static) position = end of the hero section, since
      // it sits right after it in flow; only go fixed once scrolled past that
      stickThreshold.current = headerRef.current.offsetTop;
    }
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);

    const onScroll = () => {
      setStuck(window.scrollY >= stickThreshold.current);

      const scrollPos = window.scrollY + 120;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {stuck && <div style={{ height: headerHeight }} />}
      <header
        ref={headerRef}
        className={`z-[9999] w-full border-b border-[#d1d1d1] bg-white transition-opacity duration-200 ${
          stuck ? "fixed top-0 left-0 opacity-95 shadow-md" : "relative"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <a href="#home-section" className="inline-block py-5 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="OnePager" className="h-auto max-w-[160px] lg:max-w-[220px]" />
          </a>

          <nav className="hidden md:flex items-center py-[31px]">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative ml-1 inline-block overflow-hidden px-1.5 py-3 text-[13px] uppercase first:ml-0 lg:ml-[17px] lg:px-4 lg:text-[18px]"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-0 -z-[1] bg-brand transition-all duration-150 ${
                      isActive
                        ? "-skew-x-[25deg] opacity-100"
                        : "skew-x-0 opacity-0 group-hover:-skew-x-[25deg] group-hover:opacity-100"
                    }`}
                  />
                  <span
                    className={`relative ${
                      isActive ? "text-white" : "text-[#010000] group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2 md:hidden"
          >
            <span className="block h-0.5 w-6 bg-gray-800" />
            <span className="block h-0.5 w-6 bg-gray-800" />
            <span className="block h-0.5 w-6 bg-gray-800" />
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-gray-100 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-5 py-3 text-[16px] uppercase ${
                  active === link.id ? "text-brand font-bold" : "text-gray-700"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

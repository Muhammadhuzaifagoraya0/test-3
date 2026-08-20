"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { href: "/#home-section", label: "Home", id: "home-section" },
  { href: "/#portfolio-section", label: "Portfolio", id: "portfolio-section" },
  { href: "/#services-section", label: "Services", id: "services-section" },
  { href: "/#team-section", label: "Team", id: "team-section" },
  { href: "/#about-section", label: "About", id: "about-section" },
  { href: "/#blog-section", label: "Blog", id: "blog-section" },
  { href: "/#contact-section", label: "Contact Us", id: "contact-section" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");
  const pathname = usePathname();
  const router = useRouter();

  // ScrollSpy to detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const sectionElements = navLinks
        .map((link) => ({
          id: link.id,
          element: document.getElementById(link.id),
        }))
        .filter((item) => item.element !== null);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element && item.element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof navLinks)[0]
  ) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(link.id);
        window.history.pushState(null, "", `#${link.id}`);
      }
    } else {
      router.push(`/#${link.id}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e5e5] bg-white/95 backdrop-blur-md transition-all shadow-xs">
      <div className="container-custom flex items-center justify-between py-2.5 md:py-0">
        <Link
          href="/#home-section"
          onClick={(e) => handleNavClick(e, navLinks[0])}
          className="inline-flex items-center shrink-0 py-2.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="OnePager Logo"
            className="h-auto max-h-[38px] md:max-h-[46px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center py-4 lg:py-5.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="group relative inline-block isolation-isolate px-2.5 py-2 text-[12px] uppercase font-bold tracking-wider lg:px-3.5 lg:text-[14px] xl:px-4.5 xl:text-[16px] transition-colors"
              >
                <span
                  aria-hidden
                  className={`absolute inset-0 -z-1 bg-brand transition-all duration-200 ${
                    isActive
                      ? "-skew-x-[20deg] opacity-100"
                      : "skew-x-0 opacity-0 group-hover:-skew-x-[20deg] group-hover:opacity-100"
                  }`}
                />
                <span
                  className={`relative transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-[#111111] group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md p-2 text-gray-800 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`flex items-center justify-between rounded-md px-4 py-3 text-[14px] font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-brand text-white"
                      : "text-gray-800 hover:bg-gray-50 hover:text-brand"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}



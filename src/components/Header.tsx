"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="z-[9999] w-full border-b border-[#d1d1d1] bg-white">
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="inline-block py-5 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="OnePager" className="h-auto max-w-[160px] lg:max-w-[220px]" />
        </Link>

        <nav className="hidden md:flex items-center py-[31px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative ml-1 inline-block isolation-isolate px-1.5 py-3 text-[13px] uppercase first:ml-0 lg:ml-[17px] lg:px-4 lg:text-[18px]"
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
              </Link>
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-5 py-3 text-[16px] uppercase ${
                  isActive ? "text-brand font-bold" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

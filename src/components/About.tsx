"use client";

import { useEffect, useRef, useState } from "react";

const clients = [
  "/images/client-logo1.png",
  "/images/client-logo2.png",
  "/images/client-logo3.png",
  "/images/client-logo4.png",
];

const stats = [
  {
    value: 95679,
    label: "Lines of code written",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
  },
  {
    value: 1479,
    label: "Coffe Drinked",
    icon: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6a1.125 1.125 0 011.125 1.125v3.75a3 3 0 01-3 3h-1.5a3 3 0 01-3-3v-3.75zM2.25 7.125V6a1.125 1.125 0 011.125-1.125h11.25c.621 0 1.125.504 1.125 1.125v1.125m0 0h1.5a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25h-1.5m-15.75 6h13.5",
  },
  {
    value: 578,
    label: "Happy Clients",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    value: 2178,
    label: "Projects Done",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.653v-4.34a2.18 2.18 0 00-.75-1.653m0 7.646a2.192 2.192 0 01-1.5.653H5.25a2.192 2.192 0 01-1.5-.653m16.5-7.646l-6.75-6.75a1.5 1.5 0 00-2.121 0l-6.75 6.75m16.5 0a2.18 2.18 0 01.75 1.653v4.34c0 .618-.28 1.185-.75 1.653",
  },
];

function useCountUp(target: number) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return { ref, value };
}

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div ref={ref} className="rounded-md border border-[#e4e4e4] px-2.5 py-[50px] text-center">
      <span className="mb-9 inline-block">
        <svg className="h-11 w-11 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
        </svg>
      </span>
      <p className="mb-5 text-[56px] leading-9 text-[#060606]">{value.toLocaleString()}</p>
      <p className="text-[18px] text-[#c7c7c7]">{stat.label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about-section" className="pt-16 md:pt-[100px]">
      <div className="container-custom">
        <div className="mb-12 grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-10">
              <h2 className="mb-1.5 text-[35px] font-bold uppercase text-black">
                Company Biography
              </h2>
              <span className="inline-block bg-brand px-1.5 text-[18px] uppercase text-white">
                Short story about us
              </span>
            </div>
            <p className="mb-5 text-[20px] leading-[26px] text-[#8b8b8b]">
              This is <span className="font-bold text-brand">Photoshop&apos;s</span> version of
              Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit
            </p>
            <p className="mb-5 text-[20px] leading-[26px] text-[#8b8b8b]">
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
              ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
              vitae erat consequat auctor eu in elit.{" "}
              <span className="font-bold text-brand">Class aptent taciti</span> sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p className="text-[20px] leading-[26px] text-[#8b8b8b]">
              Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non
            </p>
          </div>

          <div>
            <div className="mb-10">
              <h2 className="mb-1.5 text-[35px] font-bold uppercase text-black">Our Clients</h2>
              <span className="inline-block bg-brand px-1.5 text-[18px] uppercase text-white">
                We love our clients
              </span>
            </div>
            <div className="grid grid-cols-2 gap-[30px]">
              {clients.map((logo) => (
                <a
                  key={logo}
                  href="#"
                  className="flex h-[149px] items-center justify-center bg-brand transition-colors duration-150 hover:bg-[#6f6f6f]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo} alt="Client logo" className="max-w-[60%]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="title-section mb-10 text-center">
          <h1>Company stats</h1>
          <p>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida</p>
        </div>

        <div className="grid grid-cols-2 gap-6 pb-16 md:grid-cols-4 md:pb-[100px]">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

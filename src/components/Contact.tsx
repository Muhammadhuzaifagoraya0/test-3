"use client";

import { useState } from "react";

const fields = [
  {
    name: "name",
    placeholder: "Name",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  },
  {
    name: "mail",
    placeholder: "e-mail",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    name: "website",
    placeholder: "website",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact-section"
      className="relative flex flex-1 flex-col justify-center overflow-hidden bg-[#14181f] py-16 md:py-24 lg:py-28"
    >
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: "url('/upload/background1.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#14181f]/90 via-[#14181f]/95 to-[#14181f]" />

      <div className="container-custom relative z-10 my-auto">
        <div className="title-section mb-10 md:mb-14 text-center">
          <h1 className="!text-white">Get in touch!</h1>
          <p className="!text-[#a0a5b1]">
            This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Contact info column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="border-b border-gray-700/60 pb-6 mb-6">
              <h2 className="mb-3 text-[22px] font-bold text-white md:text-[28px] uppercase tracking-wide">
                Contact info
              </h2>
              <p className="mb-3 text-[14px] md:text-[15px] leading-relaxed text-[#c2c6cf]">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat.
              </p>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#c2c6cf]">
                Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
                non neque elit. Sed ut imperd iet nisi. Proin condimentum.
              </p>
            </div>

            <ul className="flex flex-col sm:flex-row lg:flex-col flex-wrap gap-4 text-[14px] text-white">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
                <span>lorem ipsum street</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <span>+399 (500) 321 9548</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:info@domain.com"
                  className="transition-colors hover:text-brand"
                >
                  info@domain.com
                </a>
              </li>
            </ul>
          </div>

          {/* Form column */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div className="flex flex-col gap-3">
              {fields.map((f) => (
                <div key={f.name} className="flex group">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#374151] bg-[#1e2430] text-gray-300 group-focus-within:border-brand group-focus-within:text-brand transition-colors">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={f.icon}
                      />
                    </svg>
                  </span>
                  <input
                    type={f.name === "mail" ? "email" : "text"}
                    name={f.name}
                    placeholder={f.placeholder}
                    required
                    className="h-12 w-full border border-l-0 border-[#374151] bg-[#1e2430] px-3.5 text-[14px] text-white placeholder-gray-400 outline-none focus:border-brand transition-colors"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <textarea
                name="comment"
                placeholder="Message"
                required
                className="min-h-[140px] sm:min-h-[105px] flex-1 w-full resize-none border border-[#374151] bg-[#1e2430] p-3.5 text-[14px] text-white placeholder-gray-400 outline-none focus:border-brand transition-colors"
              />
              <button
                type="submit"
                className="h-12 w-full bg-brand text-center text-[14px] font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-dark active:scale-[0.99] cursor-pointer shadow-md"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


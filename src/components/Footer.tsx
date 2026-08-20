const socials = [
  { name: "FB", label: "Facebook" },
  { name: "TW", label: "Twitter" },
  { name: "RS", label: "RSS" },
  { name: "G+", label: "Google Plus" },
  { name: "IN", label: "LinkedIn" },
  { name: "PT", label: "Pinterest" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-brand py-8 md:py-10 text-white mt-auto">
      <div className="container-custom flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left">
        <p className="text-[14px] md:text-[16px] font-medium tracking-wide">
          © {new Date().getFullYear()} OnePager, All Rights Reserved
        </p>
        <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href="#"
                aria-label={s.label}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-white text-[12px] sm:text-[13px] font-bold text-white transition-all duration-200 hover:bg-white hover:text-brand active:scale-95 shadow-xs"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}


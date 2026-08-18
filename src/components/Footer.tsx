const socials = ["FB", "TW", "RS", "G+", "IN", "PT"];

export default function Footer() {
  return (
    <footer className="bg-brand py-10">
      <div className="container-custom flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-[16px] text-white">© 2014 OnePager, All Rights Reserved</p>
        <ul className="flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <li key={s}>
              <a
                href="#"
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white text-[16px] font-bold text-white transition-colors duration-150 hover:bg-white hover:text-brand"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

const fields = [
  { name: "name", placeholder: "Name", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
  { name: "mail", placeholder: "e-mail", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
  { name: "website", placeholder: "website", icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" },
];

export default function Contact() {
  return (
    <section
      id="contact-section"
      className="relative overflow-hidden bg-[#1a1a1a] pt-16 pb-16 md:pt-[100px] md:pb-[70px]" style={{ minHeight: 'calc(100dvh - 170px)' }}
    >
      <div
        className="absolute inset-0 opacity-40 grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/85" />

      <div className="container-custom relative z-10">
        <div className="title-section mb-10 text-center">
          <h1 className="!text-white">Get in touch!</h1>
          <p className="!text-white">This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-3.5 border-b border-[#414141] pb-4">
              <h1 className="mb-2.5 text-[22px] font-normal text-white md:text-[30px]">Contact info</h1>
              <p className="mb-4 text-[15px] leading-[21px] text-white">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                consequat.
              </p>
              <p className="text-[15px] leading-[21px] text-white">
                Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque
                elit. Sed ut imperd iet nisi. Proin condimentum
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-white">
              <li className="flex items-center gap-2">
                <svg className="h-[17px] w-[17px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                lorem ipsum street
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-[17px] w-[17px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                +399 (500) 321 9548
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-[17px] w-[17px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <a href="#" className="hover:opacity-80">info@domain.com</a>
              </li>
            </ul>
          </div>

          <form className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3">
            <div className="flex flex-col gap-3">
              {fields.map((f) => (
                <div key={f.name} className="flex">
                  <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center border border-[#eaeaea] bg-white md:h-[58px] md:w-[58px]">
                    <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name={f.name}
                    placeholder={f.placeholder}
                    className="h-[50px] w-full border border-l-0 border-[#eaeaea] bg-white px-3 text-[13px] text-[#848484] outline-none md:h-[58px] md:px-4 md:text-[14px]"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <textarea
                name="comment"
                placeholder="Message"
                className="min-h-[120px] w-full resize-none border border-[#eaeaea] bg-white px-3 py-3 text-[13px] text-[#848484] outline-none md:min-h-[174px] md:px-4 md:py-[18px] md:text-[14px]"
              />
              <button
                type="button"
                className="h-[50px] w-full bg-[#1ab5b3] text-center text-[13px] font-bold uppercase text-white transition-opacity hover:opacity-80 md:h-[58px] md:text-[14px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

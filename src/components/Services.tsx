const services = [
  {
    title: "Web Design",
    icon: "M10.34 15.84c-.688-.06-1.386-.093-2.09-.093H7.5a4.5 4.5 0 01-1.242-8.83 8.965 8.965 0 018.302-5.5c-.088.667-.132 1.343-.132 2.026 0 1.126.14 2.222.362 3.267M10.34 15.84c1.11.1 2.244.153 3.401.153a24.5 24.5 0 004.164-.352M10.34 15.84a24.615 24.615 0 004.164 5.514m6.026-6.837c.386-.198.744-.407 1.076-.62-.786-.86-1.632-1.65-2.526-2.36m3.286 6.98a24.53 24.53 0 001.36-6.66m-1.36 6.66l-4.164-5.514m4.164 5.514l-2.164 2.436M14.5 21.354a24.5 24.5 0 004.164-5.514m0 0l2.164 2.436",
  },
  {
    title: "Photography",
    icon: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z|M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
  },
  {
    title: "HTML5",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z",
  },
  {
    title: "Jquery",
    icon: "M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.6.213.428-.078.917-.559.917h-.309c-.483 0-.964-.078-1.423-.23l-.723-.24c-.412-.137-.688-.523-.688-.955V11.03c0-.443.281-.836.702-.978l.723-.24c.459-.153.94-.23 1.423-.23h.31c.48 0 .77.49.559.917-.097.195-.187.395-.27.6",
  },
  {
    title: "Seo",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
  {
    title: "Css3",
    icon: "M9.53 16.122l9.37-9.37m-9.37 9.37l-3.75 3.75M9.53 16.122V12m10.125-5.25a2.25 2.25 0 11-3.182-3.182l1.205-1.204a2.25 2.25 0 013.182 0l1.2 1.2a2.25 2.25 0 010 3.181l-1.205 1.204zm-1.808-1.807l-9.37 9.37M9.53 16.122h4.125",
  },
];

export default function Services() {
  return (
    <section
      id="services-section"
      className="flex flex-1 flex-col justify-center py-16 md:py-20 lg:py-24 bg-white"
    >
      <div className="container-custom my-auto">
        <div className="title-section mb-12 md:mb-16 text-center">
          <h1>Our Services</h1>
          <p>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida</p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-start gap-5 p-2 transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="service-icon-box shrink-0">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {service.icon.split("|").map((d) => (
                    <path
                      key={d}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={d}
                    />
                  ))}
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-[17px] font-bold uppercase text-[#181818] md:text-[19px] tracking-wide">
                  {service.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#777777] md:text-[15px]">
                  Duis sed odio sit amet nibh vulputate cursus a sit amet mauris
                  morbi accumsan.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-20 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/image.png"
            alt="Responsive Devices"
            className="inline-block max-w-full h-auto drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}


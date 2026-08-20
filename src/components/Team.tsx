const team = [
  { name: "Owen Miller", img: "/upload/team1.jpg", role: "developer" },
  { name: "Mike William", img: "/upload/team2.jpg", role: "developer" },
  { name: "Besim Dauti", img: "/upload/team3.jpg", role: "developer" },
  { name: "Faton Avdiu", img: "/upload/team4.jpg", role: "developer" },
];

const socials: { label: string; d?: string }[] = [
  {
    label: "facebook",
    d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036l-.653-.008c-.955 0-1.469.13-1.881.407-.475.317-.784.867-.784 1.883v1.688h3.75l-.681 3.667h-3.069V24h-1.14a8.11 8.11 0 01-1.856-.309z",
  },
  {
    label: "twitter",
    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
  },
  { label: "rss" },
  { label: "google" },
];

export default function Team() {
  return (
    <section
      id="team-section"
      className="relative flex flex-1 flex-col justify-center overflow-hidden bg-[#2b303c] py-16 md:py-20 lg:py-24"
    >
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
        style={{
          backgroundImage: "url('/upload/background1.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#2b303c]/90" />

      <div className="container-custom relative z-10 my-auto">
        <div className="title-section mb-10 md:mb-14 text-center">
          <h1 className="!text-white">Meet The Team</h1>
          <p className="!text-gray-300">
            This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col overflow-hidden group shadow-lg"
            >
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="bg-[#1b1f27] px-5 py-4 text-left">
                <h3 className="text-[18px] font-bold text-white md:text-[20px]">
                  {member.name}
                </h3>
                <span className="text-[13px] font-medium text-[#aeaeae] uppercase tracking-wider">
                  {member.role}
                </span>
              </div>

              <ul className="flex items-center justify-start gap-2 bg-brand px-5 py-3.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href="#"
                      aria-label={s.label}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-white text-white transition-colors duration-200 hover:bg-white hover:text-brand"
                    >
                      {s.d ? (
                        <svg
                          className="h-3.5 w-3.5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d={s.d} />
                        </svg>
                      ) : s.label === "rss" ? (
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <circle
                            cx="5"
                            cy="19"
                            r="1.5"
                            fill="currentColor"
                            stroke="none"
                          />
                          <path
                            strokeLinecap="round"
                            d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16"
                          />
                        </svg>
                      ) : (
                        <span className="text-[9px] font-bold">G+</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


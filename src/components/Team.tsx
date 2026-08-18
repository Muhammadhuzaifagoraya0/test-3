const team = [
  { name: "Owen Miller", img: "/upload/team1.jpg" },
  { name: "Mike William", img: "/upload/team2.jpg" },
  { name: "Besim Dauti", img: "/upload/team3.jpg" },
  { name: "Faton Avdiu", img: "/upload/team4.jpg" },
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
      className="relative overflow-hidden bg-[#2b303c] py-16 md:pt-[100px] md:pb-[35px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(43,48,60,0.9), rgba(43,48,60,0.9)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-custom">
        <div className="title-section relative z-10 mb-10 text-center">
          <h1 className="!text-white">Meet The Team</h1>
          <p className="!text-white">This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida</p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="mb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.img} alt={member.name} className="w-full" />
              <div className="bg-black/50 px-5 py-4">
                <h5 className="text-[20px] font-bold text-white">{member.name}</h5>
                <span className="text-[14px] text-[#aeaeae]">developer</span>
              </div>
              <ul className="flex gap-2 bg-brand px-5 py-[23px]">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href="#"
                      aria-label={s.label}
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-brand"
                    >
                      {s.d ? (
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path d={s.d} />
                        </svg>
                      ) : s.label === "rss" ? (
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <circle cx="5" cy="19" r="1.5" fill="currentColor" stroke="none" />
                          <path strokeLinecap="round" d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" />
                        </svg>
                      ) : (
                        <span className="text-[10px] font-bold">G+</span>
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

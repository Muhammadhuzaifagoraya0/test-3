import Link from "next/link";

const posts = [
  {
    img: "/upload/image1.jpg",
    date: "19 oct",
    comments: "10",
    title: "Mobile Friendly Comments Dashboard now launched!",
    excerpt:
      "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu",
  },
  {
    img: "/upload/image2.jpg",
    date: "19 oct",
    comments: "10",
    title: "Mobile Friendly Comments Dashboard now launched!",
    excerpt:
      "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu",
  },
  {
    img: "/upload/image3.jpg",
    date: "19 oct",
    comments: "10",
    title: "Mobile Friendly Comments Dashboard now launched!",
    excerpt:
      "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu",
  },
  {
    img: "/upload/image4.jpg",
    date: "19 oct",
    comments: "10",
    title: "Mobile Friendly Comments Dashboard now launched!",
    excerpt:
      "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu",
  },
];

export default function Blog() {
  return (
    <section
      id="blog-section"
      className="flex flex-1 flex-col justify-center py-16 md:py-20 lg:py-24 bg-white"
    >
      <div className="container-custom my-auto">
        <div className="title-section mb-10 md:mb-14 text-center">
          <h1>Latest Posts</h1>
          <p>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <article
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full overflow-hidden shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Date & Comment badge */}
              <div className="-mt-5 mb-4 z-10">
                <div className="inline-flex items-center gap-3 bg-[#54babb] px-3.5 py-1.5 shadow-sm">
                  <span className="flex items-center gap-1.5 text-[13px] font-bold text-white uppercase tracking-wider">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {post.date}
                  </span>
                  <span className="h-3 w-px bg-white/40" />
                  <span className="flex items-center gap-1.5 text-[13px] font-bold text-white">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="mb-3 text-[17px] font-bold leading-snug text-[#3a3a3a]">
                <Link
                  href="/blog"
                  className="inline-block border-b border-[#dddddd] pb-2 transition-colors hover:text-brand hover:border-brand"
                >
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-[14px] leading-relaxed text-[#888888]">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


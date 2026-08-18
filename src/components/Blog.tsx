const posts = [
  { img: "/upload/image1.jpg", date: "19 oct", comments: "10" },
  { img: "/upload/image2.jpg", date: "19 oct", comments: "10" },
  { img: "/upload/image3.jpg", date: "19 oct", comments: "10" },
  { img: "/upload/image4.jpg", date: "19 oct", comments: "10" },
];

export default function Blog() {
  return (
    <section id="blog-section" className="pt-16 pb-10 md:pt-[80px] md:pb-10">
      <div className="container-custom">
        <div className="title-section mb-10 text-center">
          <h1>Latest Posts</h1>
          <p>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <div key={i} className="mb-8 pb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.img} alt="" className="w-full" />
              <div className="-mt-7 mb-3.5 text-center">
                <ul className="inline-flex gap-2.5 bg-[#54babb] px-4.5 py-4.5">
                  <li className="flex items-center gap-1.5 text-[15px] font-bold text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.date}
                  </li>
                  <li className="flex items-center gap-1.5 text-[15px] font-bold text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    {post.comments}
                  </li>
                </ul>
              </div>
              <h2 className="mb-4 text-center text-[19px] leading-[26px] text-[#454545]">
                <a href="#" className="inline-block border-b border-[#cccccc] pb-3.5 hover:opacity-70">
                  Mobile Friendly Comments Dashboard now launched!
                </a>
              </h2>
              <p className="text-center text-[15px] leading-[22px] text-[#919191]">
                Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti
                sociosqu
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

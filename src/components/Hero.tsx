import Image from "next/image";

export default function Hero() {
  const bullets = [
    "Chuyên sâu chỉnh nha trẻ em tiêu chuẩn Đức",
    "Đội ngũ bác sĩ giàu kinh nghiệm, am hiểu trẻ",
    "100% số hoá - ứng dụng công nghệ cao",
  ];

  const highlights = [
    {
      type: "icon",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10 fill-none stroke-brand-primary stroke-[1.8]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: "CHUYÊN SÂU CHỈNH NHA TRẺ EM",
      desc: "TIÊU CHUẨN ĐỨC",
    },
    {
      type: "text",
      value: "BÁC SĨ",
      title: "Giàu kinh nghiệm",
      desc: "AM HIỂU TRẺ",
    },
    {
      type: "text",
      value: "100%",
      title: "Số hóa",
      desc: "ỨNG DỤNG CÔNG NGHỆ CAO",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-brand-primary pt-12 pb-20 text-white lg:pt-16">
      {/* Decorative background blobs */}
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute top-28 right-1/4 h-7 w-7 rounded-full bg-brand-accent/40 anim-float anim-delay-200 pointer-events-none" />
      <div className="absolute top-48 right-[38%] h-4 w-4 rounded-full bg-white/40 anim-float anim-delay-500 pointer-events-none" />
      <div className="absolute bottom-28 left-1/4 h-5 w-5 rounded-full bg-brand-accent/25 anim-float anim-delay-700 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Left Content */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[46px] font-serif leading-tight text-white anim-slide-left anim-delay-100">
              CHỈNH NHA SỚM CHO BÉ <br />
              <span className="text-brand-accent block mt-2">
                ĐÓN TƯƠNG LAI RẠNG NGỜI
              </span>
            </h1>

            {/* Bullets — staggered entrance */}
            <div className="mt-8 space-y-4">
              {bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 anim-slide-left anim-delay-${300 + (idx + 1) * 100}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-none stroke-brand-accent stroke-[3] shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-base font-semibold text-white">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Image */}
          <div className="relative lg:col-span-5 flex justify-center anim-slide-right anim-delay-300">
            {/* Soft glow behind the image */}
            <div className="absolute inset-0 rounded-[50px] bg-brand-accent/25 blur-2xl scale-110 pointer-events-none" />
            <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] overflow-hidden rounded-[40px] shadow-2xl">
              <Image
                src="/images/hero-dentist.png"
                alt="Bác sĩ khám răng cho bé tại Nha Khoa Trẻ"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1280px) 100vw, 450px"
              />
            </div>
          </div>
        </div>

        {/* Floating Quick Stats */}
        <div className="relative mt-16 lg:mt-20 anim-slide-up anim-delay-700">
          <div className="grid gap-6 sm:grid-cols-3 bg-white p-6 sm:p-8 rounded-3xl shadow-xl relative z-20">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:bg-brand-bg-light group"
                style={{ animationDelay: `${800 + idx * 100}ms` }}
              >
                {item.type === "icon" ? (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-bg-light shadow-sm group-hover:bg-white transition-colors mb-3">
                    {item.icon}
                  </div>
                ) : (
                  <span className="text-3xl font-extrabold text-brand-primary mb-2 font-serif">
                    {item.value}
                  </span>
                )}
                <div className="flex flex-col items-center">
                  {item.type === "icon" ? (
                    <>
                      <span className="text-sm font-bold text-brand-primary leading-tight">
                        {item.title}
                      </span>
                      <span className="text-xs font-black text-brand-primary mt-1 uppercase tracking-wider">
                        {item.desc}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs font-semibold text-gray-500 leading-tight">
                        {item.title}
                      </span>
                      <span className="text-xs font-black text-brand-primary mt-1 uppercase tracking-wider">
                        {item.desc}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

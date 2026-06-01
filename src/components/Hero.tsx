import Image from "next/image";
import { Award, Users, Cpu } from "lucide-react";

export default function Hero() {
  const bullets = [
    "Chuyên sâu chỉnh nha trẻ em tiêu chuẩn Đức",
    "Đội ngũ bác sĩ giàu kinh nghiệm, am hiểu trẻ",
    "100% số hoá - ứng dụng công nghệ cao",
  ];

  const highlights = [
    {
      icon: <Award className="h-7 w-7 text-brand-primary" strokeWidth={1.8} />,
      value: "Tiêu chuẩn Đức",
      desc: "Chỉnh nha chuyên sâu trẻ em",
    },
    {
      icon: <Users className="h-7 w-7 text-brand-primary" strokeWidth={1.8} />,
      value: "Đội ngũ bác sĩ",
      desc: "Giàu kinh nghiệm, am hiểu trẻ",
    },
    {
      icon: <Cpu className="h-7 w-7 text-brand-primary" strokeWidth={1.8} />,
      value: "100% Số hóa",
      desc: "Ứng dụng công nghệ cao",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-brand-primary pt-12 pb-32 text-white lg:pt-16">
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
          <div className="relative lg:col-span-5 flex justify-center anim-slide-right anim-delay-300 items-center px-4">
            {/* Soft glow behind the image */}
            <div className="absolute inset-0 rounded-[50px] bg-brand-accent/25 blur-2xl scale-110 pointer-events-none" />
            <div className="relative w-full max-w-[450px] aspect-square overflow-hidden rounded-3xl shadow-2xl transition-transform hover:shadow-3xl">
              <Image
                src="/images/hero-dentist.png"
                alt="Bác sĩ khám răng cho bé tại Nha Khoa Trẻ"
                fill
                priority
                quality={95}
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 450px"
              />
            </div>
          </div>
        </div>

        {/* Floating highlights bar */}
        <div className="relative mt-16 lg:mt-20 anim-slide-up anim-delay-700">
          <div className="bg-white rounded-3xl shadow-xl relative z-30 overflow-hidden">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-green-800/8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-6 py-5 sm:px-8 sm:py-6 group hover:bg-brand-bg-light transition-colors duration-300"
                >
                  {/* Icon badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-bg-light group-hover:bg-white shadow-sm transition-colors duration-300">
                    {item.icon}
                  </div>
                  {/* Text */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-black text-brand-primary leading-tight font-serif">
                      {item.value}
                    </span>
                    <span className="text-sm text-gray-500 mt-0.5 leading-snug">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition → white sections below */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="block w-full"
          style={{ height: "64px" }}
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 L0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

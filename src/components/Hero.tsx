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
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#0D6B3F] via-brand-primary to-brand-dark pt-16 pb-24 sm:pb-36 text-white lg:pt-20">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-brand-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-brand-primary-light/15 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Left Content */}
          <div className="flex flex-col justify-center lg:col-span-6 order-2 lg:order-1">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl font-serif leading-[1.1] text-white anim-slide-left anim-delay-100">
              Chỉnh nha sớm cho bé <br />
              <span className="text-brand-accent block mt-3">
                Đón tương lai rạng ngời
              </span>
            </h1>

            {/* Bullets — staggered entrance */}
            <div className="mt-8 space-y-4">
              {bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 anim-slide-left anim-delay-${300 + (idx + 1) * 100}`}
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 border border-brand-accent/40 shadow-inner">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4.5 w-4.5 fill-none stroke-brand-accent stroke-[3.5]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-green-50/95 drop-shadow-sm">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="mt-10 flex flex-wrap gap-4 anim-slide-left anim-delay-700">
              <a
                href="#register"
                className="inline-flex items-center gap-2.5 rounded-full bg-brand-accent px-8 py-3.5 text-base font-bold text-brand-dark hover:bg-brand-accent-light transition-colors duration-200 shadow-lg animate-shimmer-btn"
              >
                Đặt lịch tư vấn miễn phí
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="tel:0901334334"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200"
              >
                0901.334.334
              </a>
            </div>
          </div>

          {/* Hero Right Image */}
          <div className="relative lg:col-span-6 flex justify-center anim-slide-right anim-delay-300 items-center px-4 group order-1 lg:order-2">
            {/* Ambient glow behind the image */}
            <div className="absolute inset-0 rounded-[60px_120px_60px_120px] bg-brand-accent/20 blur-3xl scale-110 pointer-events-none transition-all group-hover:scale-120 duration-700" />
            
            {/* Outer offset frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-brand-accent/30 rounded-[60px_120px_60px_120px] scale-100 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500 w-[calc(100%-32px)] mx-auto" />
            
            {/* Inner Image Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] aspect-square overflow-hidden rounded-[60px_120px_60px_120px] border-2 border-white/20 shadow-2xl transition-all duration-700 group-hover:border-brand-accent/40">
              <Image
                src="/images/hero-dentist.png"
                alt="Bác sĩ khám răng cho bé tại Nha Khoa Trẻ"
                fill
                priority
                quality={95}
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 430px"
              />
            </div>
          </div>
        </div>

        {/* Floating highlights bar - Glassmorphism */}
        <div className="relative mt-20 lg:mt-24 anim-slide-up anim-delay-700">
          <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl relative z-30 overflow-hidden">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-brand-primary/10">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-6 py-5 sm:px-8 sm:py-6 group hover:bg-brand-bg-light/40 transition-colors duration-300"
                >
                  {/* Icon badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/5 group-hover:bg-white shadow-sm border border-brand-primary/5 transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  {/* Text */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-base font-black text-brand-primary leading-tight font-serif">
                      {item.value}
                    </span>
                    <span className="text-sm text-gray-500 mt-1.5 leading-snug">
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

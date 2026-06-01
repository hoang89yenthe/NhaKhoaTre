import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function ProcessSection() {
  const steps = [
    {
      title: "Khám tư vấn:",
      details: [
        "Chụp phim 3D",
        "Scan răng với Itero",
        "Chụp ảnh thu thập dữ liệu",
        "Bác sỹ thăm khám tư vấn dựa trên kết quả thực tế",
      ],
      image: "/images/process/process_1.png",
    },
    {
      title: "Lập kế hoạch điều trị:",
      desc: "Bác sỹ đưa ra phác đồ điều trị phù hợp với từng bé và thống nhất kế hoạch, dự kiến kết quả trước khi chỉnh nha",
      image: "/images/process/process_2.png",
    },
    {
      title: "Lắp khí cụ chỉnh nha phù hợp cho bé",
      desc: "Bác sĩ lắp khí cụ được chỉ định và hướng dẫn bé cách đeo, vệ sinh đúng cách tại nhà.",
      image: "/images/process/process_3.png",
    },
    {
      title: "Tái khám định kỳ 2–4 tuần, theo dõi tiến trình",
      desc: "Mỗi lần tái khám, bác sĩ điều chỉnh lực chỉnh nha và cập nhật tiến trình cho cha mẹ.",
      image: "/images/process/process_4.png",
    },
    {
      title: "Kết thúc liệu trình, lắp hàm duy trì",
      desc: "Bác sĩ đánh giá kết quả cuối kỳ, lắp hàm duy trì và lên lịch tái khám để giữ kết quả lâu dài.",
      image: "/images/process/process_5.png",
    },
  ];

  return (
    <section id="process" className="bg-brand-bg-light/45 py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-primary-light font-semibold uppercase tracking-widest text-xs sm:text-sm block mb-3 font-sans">
            Liệu trình điều trị
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-serif">
            Quy trình chỉnh nha trẻ em
          </h2>
          <p className="mt-6 text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Quy trình niềng răng cho trẻ em được cá nhân hóa dựa trên độ tuổi và tình trạng răng, tuân thủ các bước chuẩn y khoa tiêu chuẩn Đức:
          </p>
        </AnimateIn>

        {/* Timeline Wrapper */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-accent via-brand-primary-light to-brand-primary/10 pointer-events-none" />

          {/* Steps */}
          <div className="space-y-10 md:space-y-16">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] items-center gap-4 md:gap-0"
                >
                  {/* ── Content card ──────────────────────────────── */}
                  <div className={isEven ? "md:order-1 md:pr-6" : "md:order-3 md:pl-6"}>
                    {/* Mobile: inline badge above card */}
                    <div className="flex md:hidden items-center gap-3 mb-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-dark text-sm font-black border-2 border-white shadow">
                        {idx + 1}
                      </span>
                      <div className="h-px flex-1 bg-brand-accent/25" />
                    </div>
                    <AnimateIn animation={isEven ? "slide-left" : "slide-right"} delay={80}>
                      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/5 shadow-md hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-brand-primary font-serif leading-snug">
                          {item.title}
                        </h3>
                        {item.details && (
                          <ul className="mt-4 space-y-2 text-sm text-gray-500 leading-relaxed">
                            {item.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2.5">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.desc && (
                          <p className="mt-3 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        )}
                      </div>
                    </AnimateIn>
                  </div>

                  {/* ── Center badge — desktop only ────────────────── */}
                  <div className="hidden md:flex md:order-2 items-center justify-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent text-brand-dark text-base font-black border-4 border-white shadow-lg z-10">
                      {idx + 1}
                    </span>
                  </div>

                  {/* ── Image ─────────────────────────────────────── */}
                  <div className={isEven ? "md:order-3 md:pl-6" : "md:order-1 md:pr-6"}>
                    <AnimateIn animation={isEven ? "slide-right" : "slide-left"} delay={120}>
                      <div className="relative h-48 sm:h-56 w-full rounded-3xl overflow-hidden shadow-lg border border-brand-primary/5 group">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                        <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </AnimateIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

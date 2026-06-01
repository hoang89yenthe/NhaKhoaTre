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
      image: "/images/process/process_3.png",
    },
    {
      title: "Tái khám định kỳ 2-4 tuần, theo dõi quá trình chỉnh nha của bé",
      image: "/images/process/process_4.png",
    },
    {
      title: "Kết thúc giai đoạn chỉnh nha trẻ em, tái khám duy trì.",
      image: "/images/process/process_5.png",
    },
  ];

  return (
    <section id="process" className="bg-brand-bg-light py-16 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif">
            QUY TRÌNH CHỈNH NHA TRẺ EM
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-brand-accent"></div>
          <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed font-bold">
            Quy trình niềng răng cho trẻ em sẽ có sự khác biệt ở mỗi độ tuổi và tình trạng răng, nhưng nhìn chung, bao gồm những giai đoạn cơ bản sau:
          </p>
        </AnimateIn>

        {/* Steps */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <AnimateIn
                key={idx}
                animation={isEven ? "slide-left" : "slide-right"}
                delay={80}
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-stretch bg-brand-primary text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-brand-accent/30 transition-all duration-300`}
                >
                  {/* Text Block */}
                  <div className="p-8 sm:p-10 flex flex-col justify-center flex-grow md:w-3/5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-dark text-sm font-black">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold leading-relaxed font-serif">
                      {item.title}
                    </h3>
                    {item.details && (
                      <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-green-100/90 leading-relaxed">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.desc && (
                      <p className="mt-3 text-xs sm:text-sm text-green-100/90 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {/* Image Block */}
                  <div className="relative h-56 md:h-auto md:w-2/5 shrink-0 bg-brand-dark/10 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 350px"
                    />
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

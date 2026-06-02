import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import { doctors } from "@/lib/content";

export default function DoctorsSection() {
  return (
    <section id="about" className="bg-white py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-bg-light/45 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-brand-primary-light font-semibold uppercase tracking-widest text-xs sm:text-sm block mb-3 font-sans">
            Đội ngũ chuyên gia
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-brand-primary sm:text-3xl lg:text-4xl font-serif leading-tight">
            Nha Khoa Trẻ — địa chỉ niềm tin của hàng ngàn cha mẹ
          </h2>
        </AnimateIn>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Team photo */}
          <div className="lg:col-span-6 relative group px-4">
            <div className="absolute inset-0 rounded-3xl bg-brand-accent/15 blur-2xl scale-105 pointer-events-none transition-all group-hover:scale-110 duration-700" />
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-brand-primary/10 rounded-3xl -z-10 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 duration-500" />
            <AnimateIn animation="scale-up" className="relative overflow-hidden border border-brand-primary/10 rounded-3xl shadow-xl">
              <Image
                src="/images/doctors-team.png"
                alt="Đội ngũ bác sĩ chuyên môn cao tại Nha Khoa Trẻ"
                width={1024}
                height={448}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
            </AnimateIn>
          </div>

          {/* Doctor list */}
          <div className="lg:col-span-6 space-y-6">
            <AnimateIn animation="slide-right" delay={100}>
              <div className="flex items-start gap-5 pb-6 border-b border-brand-primary/8">
                <span className="text-6xl font-black text-brand-primary font-serif leading-none shrink-0">
                  100%
                </span>
                <div className="pt-1">
                  <p className="text-base font-semibold text-brand-dark leading-snug">
                    tốt nghiệp chính quy<br />Đại học Y Hà Nội
                  </p>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Chuyên khoa Răng Hàm Mặt, đào tạo chuyên sâu chỉnh nha trẻ em và ứng dụng công nghệ số toàn diện.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <div className="space-y-4">
              {doctors.map((doc, idx) => (
                <AnimateIn key={idx} animation="slide-up" delay={150 + idx * 80}>
                  <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-l-[3px] border-brand-accent hover:border-brand-primary pl-6 group">
                    <span className="text-xs font-semibold text-brand-accent tracking-widest uppercase">
                      0{idx + 1}
                    </span>
                    <h4 className="text-base font-semibold text-brand-dark font-serif mt-1 group-hover:text-brand-primary transition-colors">
                      {doc.name}
                    </h4>
                    <p className="text-xs text-brand-primary-light mt-0.5 font-medium tracking-wide">
                      {doc.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

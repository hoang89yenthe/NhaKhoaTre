import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function DoctorsSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-bg-light/45 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-brand-primary-light font-black uppercase tracking-widest text-xs sm:text-sm block mb-3 font-sans">
            Đội Ngũ Chuyên Gia
          </span>
          <h2 className="text-2xl font-black tracking-tight text-brand-primary sm:text-3xl lg:text-4xl font-serif leading-tight">
            NHA KHOA TRẺ - ĐỊA CHỈ NIỀM TIN CỦA HÀNG NGÀN CHA MẸ
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded bg-brand-accent"></div>
        </AnimateIn>

        {/* 2 Columns Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Doctor Team Group Photo */}
          <div className="lg:col-span-6 relative group px-4">
            <div className="absolute inset-0 rounded-3xl bg-brand-accent/15 blur-2xl scale-105 pointer-events-none transition-all group-hover:scale-110 duration-700" />
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-brand-primary/10 rounded-3xl -z-10 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 duration-500" />
            
            <AnimateIn animation="scale-up" className="relative overflow-hidden border border-brand-primary/10 rounded-3xl shadow-xl">
              <div className="relative h-[280px] sm:h-[380px] md:h-[440px] w-full">
                <Image
                  src="/images/doctors-team.png"
                  alt="Đội ngũ bác sĩ chuyên môn cao tại Nha Khoa Trẻ"
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />
              </div>
            </AnimateIn>
          </div>

          {/* Right: Individual Doctor Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <AnimateIn animation="slide-right" delay={100}>
              <div className="border border-brand-primary/5 bg-brand-bg-light/45 p-6 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-black text-brand-primary font-serif leading-tight">
                  100% TỐT NGHIỆP ĐẠI HỌC Y HÀ NỘI
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed font-semibold">
                  Đội ngũ bác sĩ chính quy chuyên khoa Răng Hàm Mặt, được đào tạo chuyên sâu chỉnh nha trẻ em và ứng dụng công nghệ số toàn diện trong điều trị.
                </p>
              </div>
            </AnimateIn>

            {/* Doctor Profiles List */}
            <div className="space-y-4">
              {[
                {
                  name: "Bác sĩ Nguyễn Huy Hoàng",
                  title: "Trưởng phòng khám Nha Khoa Trẻ",
                  desc: "Chuyên gia chỉnh nha tăng trưởng, chứng chỉ Invisalign Mỹ, hơn 15 năm lâm sàng.",
                },
                {
                  name: "Bác sĩ Trịnh Thị Lệ Xuân",
                  title: "Bác sĩ Chỉnh nha Chuyên sâu trẻ em",
                  desc: "Thành viên Hiệp hội Chỉnh nha Thế giới (WFO), chuyên gia niềng răng mắc cài tự buộc và Invisalign First.",
                },
                {
                  name: "Bác sĩ Phạm Thùy Anh",
                  title: "Bác sĩ Chỉnh nha Thẩm mỹ",
                  desc: "Tốt nghiệp Đại học Y Hà Nội, chuyên sâu khay chỉnh nha sớm Essential và các khí cụ tháo lắp cho trẻ.",
                },
              ].map((doc, docIdx) => (
                <AnimateIn
                  key={docIdx}
                  animation="slide-up"
                  delay={150 + docIdx * 80}
                >
                  <div className="border border-brand-primary/5 hover:border-brand-primary/15 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4">
                    {/* Circle badge count */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-bg-light text-brand-primary font-black border border-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      0{docIdx + 1}
                    </div>
                    {/* Doctor Info */}
                    <div className="flex-grow min-w-0">
                      <h4 className="text-base font-black text-brand-dark font-serif group-hover:text-brand-primary transition-colors">
                        {doc.name}
                      </h4>
                      <p className="text-xs font-bold text-brand-accent mt-0.5 uppercase tracking-wide">
                        {doc.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>
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

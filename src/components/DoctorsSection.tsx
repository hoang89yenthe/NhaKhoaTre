"use client";

import Image from "next/image";

export default function DoctorsSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-bg-light/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-black tracking-tight text-brand-primary sm:text-3xl lg:text-4xl font-serif">
            NHA KHOA TRẺ - ĐỊA CHỈ TIN CẬY CHO CÁC BA MẸ CHỈNH NHA CHO TRẺ
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Nha Khoa Trẻ tự hào là phòng khám tiên phong công nghệ số trong điều trị mang lại sự an toàn và chính xác đến 99%, với đội ngũ bác sĩ chuyên môn cao cùng cơ sở vật chất hiện đại, không gian thân thiện, thoải mái:
          </p>
          <div className="mt-8 flex justify-center">
            <h3 className="text-xl font-bold tracking-wider text-brand-primary uppercase">
              BÁC SỸ CÓ CHUYÊN MÔN CAO
            </h3>
          </div>
        </div>

        {/* Doctor Team Group Photo */}
        <div className="relative mx-auto max-w-5xl overflow-hidden bg-white p-2">
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden">
            <Image
              src="/images/doctors-team.png"
              alt="Đội ngũ bác sĩ chuyên môn cao tại Nha Khoa Trẻ"
              fill
              className="object-contain"
              sizes="(max-w-7xl) 100vw, 1024px"
            />
          </div>
        </div>

        {/* Credentials Highlights */}
        <div className="mt-12 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-3xl sm:text-4xl md:text-[40px] font-black tracking-tight text-brand-accent font-serif leading-tight">
            100% TỐT NGHIỆP ĐẠI HỌC Y HÀ NỘI
          </h3>
          <p className="text-base sm:text-lg font-bold text-brand-dark">
            Đào tạo chuyên sâu chỉnh nha trẻ em trong nước và nước ngoài.
          </p>
        </div>
      </div>
    </section>
  );
}

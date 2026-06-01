"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif">
            KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI ?
          </h2>
        </div>

        {/* Centered Logo & Content */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="relative h-12 w-36 mb-8">
            <Image
              src="/images/logo.png"
              alt="Nha Khoa Trẻ Logo"
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>

          {/* Graphic Showcase Image (Before/After comparison) */}
          <div className="relative h-[250px] sm:h-[400px] md:h-[500px] w-full max-w-3xl overflow-hidden rounded-2xl border border-green-800/10 shadow-lg mb-8">
            <Image
              src="/images/customer_before_after.png"
              alt="Kết quả chỉnh nha thực tế tại Nha Khoa Trẻ"
              fill
              className="object-contain bg-white"
              sizes="(max-w-7xl) 100vw, 768px"
            />
          </div>

          {/* Caption */}
          <p className="text-center text-sm sm:text-base text-gray-500 font-semibold tracking-wide italic">
            Một vài ca chỉnh nha trẻ em được điều trị thành công tại Nha Khoa Trẻ
          </p>
        </div>
      </div>
    </section>
  );
}

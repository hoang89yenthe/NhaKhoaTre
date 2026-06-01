import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif">
            KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI ?
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-brand-accent"></div>
        </AnimateIn>

        {/* Centered Content */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Logo */}
          <AnimateIn animation="scale-up" className="relative h-12 w-36 mb-8">
            <Image
              src="/images/logo.png"
              alt="Nha Khoa Trẻ Logo"
              fill
              className="object-contain"
              sizes="150px"
            />
          </AnimateIn>

          {/* Before/After image */}
          <AnimateIn animation="slide-up" delay={100} className="w-full max-w-3xl">
            <div className="relative h-[250px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl border border-green-800/10 shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/customer_before_after.png"
                alt="Kết quả chỉnh nha thực tế tại Nha Khoa Trẻ"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </AnimateIn>

          {/* Caption */}
          <AnimateIn animation="slide-up" delay={200}>
            <p className="text-center text-sm sm:text-base text-gray-500 font-semibold tracking-wide italic">
              Một vài ca chỉnh nha trẻ em được điều trị thành công tại Nha Khoa Trẻ
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

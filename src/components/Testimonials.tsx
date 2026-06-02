"use client";

import * as React from "react";
import AnimateIn from "@/components/AnimateIn";
import { Star, MessageSquareQuote } from "lucide-react";
import { reviews } from "@/lib/content";

export default function Testimonials() {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;
    position = Math.max(0, Math.min(100, position));
    setSliderPosition(position);
  };

  return (
    <section className="bg-brand-bg-light/60 py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary-light font-semibold uppercase tracking-widest text-xs sm:text-sm block mb-3 font-sans">
            Kết quả điều trị
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-serif">
            Ý kiến thực tế từ phụ huynh
          </h2>
        </AnimateIn>

        <div className="grid gap-12 lg:grid-cols-12 items-stretch max-w-6xl mx-auto">

          {/* Before/After Slider */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center">
            <AnimateIn animation="scale-up" className="w-full max-w-lg relative">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block text-center mb-4">
                Kéo thanh trượt để so sánh kết quả
              </span>
              <div
                ref={containerRef}
                className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] select-none overflow-hidden rounded-3xl border border-brand-primary/10 shadow-2xl cursor-ew-resize touch-none"
                onMouseMove={(e) => { if (isDragging) handleMove(e.clientX); }}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchMove={(e) => { if (isDragging) handleMove(e.touches[0].clientX); }}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat"
                  style={{ backgroundImage: "url('/images/customer_before_after.png')", backgroundSize: "200% auto", backgroundPosition: "100% 30%" }}
                />
                <div className="absolute right-4 top-4 bg-brand-primary/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 z-20 pointer-events-none">
                  Sau điều trị
                </div>
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat border-r-2 border-brand-accent"
                  style={{ backgroundImage: "url('/images/customer_before_after.png')", backgroundSize: "200% auto", backgroundPosition: "0% 30%", clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                />
                <div className="absolute left-4 top-4 bg-brand-accent/90 text-brand-dark text-xs font-bold px-3 py-1 rounded-full z-20 pointer-events-none">
                  Trước điều trị
                </div>
                <div className="absolute top-0 bottom-0 w-[2px] bg-brand-accent z-30 pointer-events-none" style={{ left: `${sliderPosition}%` }}>
                  <div className="absolute top-1/2 -translate-y-1/2 -left-5 h-10 w-10 rounded-full bg-white text-brand-primary border-2 border-brand-accent shadow-xl flex items-center justify-center font-bold text-lg select-none">
                    ↔
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 italic mt-4">
                Hình ảnh thực tế trước và sau điều trị chỉnh nha tại Nha Khoa Trẻ
              </p>
            </AnimateIn>
          </div>

          {/* Reviews */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {reviews.map((rev, idx) => (
              <AnimateIn key={idx} animation="slide-right" delay={100 + idx * 80}>
                <div className="border border-brand-primary/5 bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                  <MessageSquareQuote className="absolute right-6 top-6 h-10 w-10 text-brand-primary/5 pointer-events-none" />
                  <div className="flex gap-1 text-brand-accent">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-accent" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed italic">
                    "{rev.review}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-brand-primary/5">
                    <h4 className="text-sm font-bold text-brand-dark font-serif">{rev.parent}</h4>
                    <p className="text-xs text-gray-400 font-medium">{rev.child}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import { Star, MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const reviews = [
    {
      parent: "Chị Mai Anh",
      child: "Mẹ bé Đức Minh (9 tuổi)",
      review: "Cháu bị hô xương hàm, được bác sĩ Hoàng tư vấn chỉnh nha bằng Invisalign First. Sau 6 tháng răng con đã dàn đều, không đau đớn gì, ăn nhai tốt. Rất tin tưởng Nha Khoa Trẻ!",
      rating: 5,
    },
    {
      parent: "Anh Tuấn Hải",
      child: "Bố bé Bảo Nam (11 tuổi)",
      review: "Con niềng răng mắc cài kim loại 3M tại đây. Các bác sĩ rất khéo léo, am hiểu tâm lý trẻ nhỏ nên con không sợ đi nha sĩ. Dịch vụ chăm sóc sau tái khám rất chu đáo.",
      rating: 5,
    },
    {
      parent: "Chị Thu Thảo",
      child: "Mẹ bé Linh Chi (8 tuổi)",
      review: "Phát hiện mầm răng ngầm nhờ phim chụp 3D của nha khoa. May mắn được bác sĩ Xuân xử lý kịp thời và niềng răng sớm. Hàm răng con nay đã đều tăm tắp.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-brand-bg-light/60 py-20 lg:py-28 relative overflow-hidden">
      {/* Sparkles */}
      <div className="absolute top-12 left-[10%] h-6 w-6 rounded-full bg-brand-accent/20 anim-float pointer-events-none" />
      <div className="absolute bottom-16 right-[8%] h-5 w-5 rounded-full bg-brand-primary-light/15 anim-float-reverse pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary-light font-black uppercase tracking-widest text-xs sm:text-sm block mb-3 font-sans">
            Kết Quả Điều Trị
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif">
            Ý KIẾN THỰC TẾ TỪ PHỤ HUYNH
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded bg-brand-accent"></div>
        </AnimateIn>

        {/* 2-Column Section: Left Slider, Right Testimonials */}
        <div className="grid gap-12 lg:grid-cols-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Before/After Interactive Slider */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center">
            <AnimateIn animation="scale-up" className="w-full max-w-lg relative">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block text-center mb-4">
                Kéo thanh trượt để so sánh kết quả
              </span>
              
              <div 
                ref={containerRef}
                className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] select-none overflow-hidden rounded-3xl border border-brand-primary/10 shadow-2xl cursor-ew-resize group"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
              >
                {/* Under Layer: After (Right side of image) */}
                <div 
                  className="absolute inset-0 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/customer_before_after.png')",
                    backgroundSize: "200% auto",
                    backgroundPosition: "100% 30%"
                  }}
                />
                <div className="absolute right-4 top-4 bg-brand-primary/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 z-20 pointer-events-none">
                  Sau điều trị
                </div>

                {/* Over Layer: Before (Left side of image, clipped) */}
                <div 
                  className="absolute inset-0 bg-cover bg-no-repeat border-r-2 border-brand-accent"
                  style={{
                    backgroundImage: "url('/images/customer_before_after.png')",
                    backgroundSize: "200% auto",
                    backgroundPosition: "0% 30%",
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                  }}
                />
                <div className="absolute left-4 top-4 bg-brand-accent/90 text-brand-dark text-xs font-bold px-3 py-1 rounded-full z-20 pointer-events-none">
                  Trước điều trị
                </div>

                {/* Handle bar with buttons */}
                <div 
                  className="absolute top-0 bottom-0 w-[2px] bg-brand-accent z-30 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
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

          {/* Right Column: Parental Reviews */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {reviews.map((rev, idx) => (
              <AnimateIn 
                key={idx} 
                animation="slide-right" 
                delay={100 + idx * 80}
              >
                <div className="border border-brand-primary/5 bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                  {/* Quote icon overlay */}
                  <MessageSquareQuote className="absolute right-6 top-6 h-10 w-10 text-brand-primary/5 pointer-events-none" />
                  
                  {/* Stars */}
                  <div className="flex gap-1 text-brand-accent">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed italic">
                    "{rev.review}"
                  </p>

                  {/* Parent Info */}
                  <div className="mt-4 pt-4 border-t border-brand-primary/5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black text-brand-dark font-serif">
                        {rev.parent}
                      </h4>
                      <p className="text-xs text-gray-400 font-medium">
                        {rev.child}
                      </p>
                    </div>
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

"use client";

import * as React from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { appliances, bracketPros, bracketCons, type Appliance } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function AppliancesSection() {
  const [selected, setSelected] = React.useState<Appliance | null>(null);

  return (
    <section id="appliances" className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-serif">
            Các phương tiện chỉnh nha trẻ em
          </h2>
          <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Nha Khoa Trẻ áp dụng đa dạng các phương tiện chỉnh nha hiện đại, phù hợp với từng độ tuổi và tình trạng răng của bé. Nhấn vào từng phương tiện để xem chi tiết.
          </p>
        </AnimateIn>

        {/* 4 method badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-16 place-items-center">
          {appliances.map((item, idx) => (
            <AnimateIn key={idx} animation="scale-up" delay={idx * 100}>
              <button
                onClick={() => setSelected(item)}
                className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 cursor-pointer group"
              >
                <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full flex items-center justify-center overflow-hidden bg-white border border-brand-primary/10 shadow-sm transition-all duration-300 hover:border-4 hover:border-brand-primary hover:shadow-lg hover:ring-4 hover:ring-brand-primary/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                    sizes="120px"
                  />
                </div>
                <h3 className="mt-4 text-sm font-bold text-brand-dark font-serif max-w-[150px] group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
              </button>
            </AnimateIn>
          ))}
        </div>

        {/* Bracket detail */}
        <AnimateIn animation="slide-up" delay={100} className="relative mx-auto max-w-4xl bg-white rounded-[32px] p-8 md:p-12 border border-brand-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center group">
          <div className="relative h-52 w-52 sm:h-60 sm:w-60 rounded-full bg-white border border-brand-primary/10 shadow-md flex items-center justify-center p-6 mb-6 transition-transform duration-500 group-hover:scale-[1.03]">
            <div className="relative w-full h-full">
              <Image
                src="/images/appliances/appliance_bracket_detail.png"
                alt="Mắc cài kim loại 3M Mỹ"
                fill
                className="object-contain"
                sizes="250px"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-brand-primary sm:text-3xl font-serif text-center mb-8">
            Mắc cài kim loại{" "}
            <span className="text-brand-dark font-sans text-xl sm:text-2xl font-semibold">(Mắc cài 3M - Mỹ)</span>
          </h3>

          <div className="grid gap-8 md:grid-cols-2 w-full border-t border-brand-primary/10 pt-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-brand-primary-light uppercase tracking-wider border-b border-brand-primary/5 pb-2 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary-light/10 text-brand-primary-light text-xs">✓</span>
                Ưu điểm nổi bật
              </h4>
              <ul className="space-y-3">
                {bracketPros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed font-semibold">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary-light/10 text-brand-primary-light text-[10px]">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-brand-accent uppercase tracking-wider border-b border-brand-primary/5 pb-2 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent text-xs">!</span>
                Nhược điểm cần lưu ý
              </h4>
              <ul className="space-y-3">
                {bracketCons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent text-[10px] font-bold">!</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-brand-primary/10 flex justify-center">
            <a
              href="#register"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-primary px-8 py-3.5 text-base font-bold text-white hover:bg-brand-dark transition-colors duration-200 shadow-md"
            >
              Tư vấn phương tiện phù hợp cho bé
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>
      </div>

      {/* Detail dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="sm:max-w-2xl md:max-w-4xl w-[92vw] sm:w-[95vw] md:w-full rounded-[32px] p-5 sm:p-6 md:p-8 border border-brand-primary/10 bg-white shadow-2xl overflow-y-auto max-h-[92vh]">
          {selected && (
            <div className="grid gap-6 md:grid-cols-12 items-start mt-4">
              <div className="md:col-span-4 flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-brand-primary/10 shadow-sm h-44 sm:h-48 md:h-64">
                <div className="relative w-full h-full max-w-[150px] md:max-w-full aspect-square">
                  <Image src={selected.image} alt={selected.title} fill className="object-contain" sizes="250px" priority />
                </div>
              </div>

              <div className="md:col-span-8 flex flex-col justify-start text-left">
                <DialogHeader className="text-left p-0">
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-brand-primary font-serif leading-tight">
                    {selected.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-2">
                  <span className="inline-block bg-brand-bg-light text-brand-primary-light font-bold text-[11px] px-3 py-1 rounded-full border border-brand-primary/5">
                    Độ tuổi phù hợp: {selected.age}
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">{selected.desc}</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 border-t border-brand-primary/5 pt-4">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-brand-primary-light uppercase tracking-wider flex items-center gap-1.5">
                      <span className="text-[10px] bg-brand-primary-light/10 text-brand-primary-light h-4 w-4 rounded-full flex items-center justify-center">✓</span>
                      Ưu điểm nổi bật
                    </h4>
                    <ul className="space-y-1.5">
                      {selected.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed font-semibold">
                          <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-brand-primary-light/10 text-brand-primary-light text-[8px]">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-brand-accent uppercase tracking-wider flex items-center gap-1.5">
                      <span className="text-[10px] bg-brand-accent/10 text-brand-accent h-4 w-4 rounded-full flex items-center justify-center">!</span>
                      Nhược điểm cần lưu ý
                    </h4>
                    <ul className="space-y-1.5">
                      {selected.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                          <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent text-[8px] font-bold">!</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

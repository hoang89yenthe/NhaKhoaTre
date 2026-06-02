import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import AnimateIn from "@/components/AnimateIn";
import { cases } from "@/lib/content";

export default function CasesSection() {
  return (
    <section id="cases" className="bg-white py-24 lg:py-32 relative overflow-hidden">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-brand-primary-light font-semibold uppercase tracking-widest text-xs sm:text-sm block mb-3 font-sans">
            Chỉ định nha khoa
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-serif">
            Nên chỉnh nha sớm khi nào?
          </h2>
          <p className="mt-5 text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
            Nhận biết sớm giúp bé điều trị đơn giản hơn, ít đau hơn và tiết kiệm hơn về lâu dài.
          </p>
        </AnimateIn>

        <div className="grid gap-10 sm:grid-cols-2">
          {cases.map((item, idx) => (
            <AnimateIn key={idx} animation="slide-up" delay={idx * 100} className="flex flex-col h-full">
              <Card className="border border-brand-primary/5 bg-white hover:border-brand-primary/15 shadow-brand hover:shadow-brand-xl transition-all duration-500 rounded-3xl overflow-hidden group flex flex-col h-full hover:-translate-y-2 py-0 gap-0">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 560px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/70 to-transparent pointer-events-none" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors font-serif leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

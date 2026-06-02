import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import AnimateIn from "@/components/AnimateIn";
import { benefits } from "@/lib/content";

export default function BenefitsSection() {
  return (
    <section className="bg-brand-bg-light py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-serif mt-2">
            Lý do nên chỉnh nha sớm cho bé
          </h2>
        </AnimateIn>

        <div className="grid gap-8 lg:grid-cols-12">
          {benefits.map((item, idx) => {
            const isWide = idx === 0 || idx === 3;
            const colSpanClass = isWide ? "lg:col-span-7" : "lg:col-span-5";
            const animDir = idx % 2 === 0 ? "slide-left" : "slide-right";

            return (
              <AnimateIn
                key={idx}
                animation={animDir}
                delay={idx * 80}
                className={`flex flex-col ${colSpanClass}`}
              >
                <Card className={`border border-brand-primary/5 bg-white text-brand-dark shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:border-brand-primary/15 transition-all duration-500 rounded-3xl overflow-hidden flex flex-col h-full py-0 gap-0 ${
                  isWide ? "lg:flex-row" : ""
                }`}>
                  <div className={`relative shrink-0 bg-white border-b lg:border-b-0 border-brand-primary/5 overflow-hidden h-72 ${
                    isWide ? "lg:w-[42%] lg:h-auto" : "w-full"
                  } ${
                    idx === 3 ? "lg:order-2 lg:border-l border-brand-primary/5" : ""
                  } ${
                    idx === 0 ? "lg:border-r border-brand-primary/5" : ""
                  }`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>

                  <CardContent className={`p-6 sm:p-8 flex flex-col justify-between flex-grow ${
                    idx === 3 ? "lg:order-1" : ""
                  }`}>
                    <div>
                      <span className="text-xs font-semibold tracking-widest text-brand-primary-light uppercase bg-brand-bg-light px-2.5 py-1 rounded-full border border-brand-primary/5">
                        Lý do 0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold leading-snug mt-4 text-brand-primary font-serif">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

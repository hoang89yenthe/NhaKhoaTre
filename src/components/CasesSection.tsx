"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CasesSection() {
  const cases = [
    {
      title: "Khi răng con bị hô",
      desc: "Khi những chiếc răng vĩnh viễn hàm trên mọc lên và chìa ra quá mức so với răng hàm dưới, làm cho tổng thể gương mặt răng bị nhô ra thì cha mẹ nên cho con đi khám với bác sĩ để được chỉnh nha sớm cho bé.",
      image: "/images/cases/case_ho.png",
    },
    {
      title: "Khi răng con bị móm",
      desc: "Ngược lại với răng hô, khi những chiếc răng hàm dưới bị chìa ra bên ngoài, khớp cắn không trùng khít với những chiếc răng cửa hàm trên. Lúc này phương pháp chỉnh nha sớm cho con sẽ giúp cho con chỉnh khớp cắn 2 hàng trùng khít, giúp con ăn nhai khỏe và cải thiện thẩm mỹ cho khuôn mặt.",
      image: "/images/cases/case_mom.png",
    },
    {
      title: "Răng mọc lộn xộn",
      desc: "Nếu thấy những chiếc răng vĩnh viễn mọc lộn xộn, chiếc thò chiếc ra, chiếc trồi lên, chiếc thụt sâu vào trong thì cha mẹ nên đưa con gặp bác sĩ niềng răng càng sớm càng tốt.",
      image: "/images/cases/case_lon_xon.png",
    },
    {
      title: "Răng thưa, kẽ răng rộng",
      desc: "Răng thưa khiến khuôn mặt của bé khi cười mất đi vẻ thẩm mỹ. Bên cạnh đó, còn khiến thức ăn dễ dắt vào kẽ răng gây ra các bệnh lý như sâu răng, viêm nướu. Hãy cho con niềng răng sớm vì điều này không những giúp bé thay đổi về mặt thẩm mỹ mà còn giúp cho khớp cắn đạt chuẩn, hỗ trợ con ăn nhai khỏe, giúp hệ tiêu hóa làm việc ổn định. Đặc biệt còn giúp bé lấy được sự tự tin và dễ dàng nắm bắt những cơ hội mới trong cuộc sống.",
      image: "/images/cases/case_thua.png",
    },
  ];

  return (
    <section id="cases" className="bg-white py-16 relative overflow-hidden">
      {/* Decorative Wave lines */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-primary stroke-[1.5]">
          <path d="M 0 50 Q 25 25 50 50 T 100 50" />
          <path d="M 0 60 Q 25 35 50 60 T 100 60" />
          <path d="M 0 70 Q 25 45 50 70 T 100 70" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="font-script text-3xl sm:text-4xl text-brand-primary-light font-bold block mb-1">
            Những trường hợp
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif">
            NÊN CHỈNH NHA SỚM
          </h2>
          <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Việc kiểm tra nha khoa định kỳ mỗi 6 tháng không chỉ giúp vệ sinh răng miệng mà còn hỗ trợ phát hiện sớm các vấn đề nhờ sử dụng hình ảnh phim chụp. Những vấn đề này có thể bao gồm tình trạng thiếu mầm răng vĩnh viễn, răng mọc ngầm, hoặc mầm răng vĩnh viễn mọc sai vị trí.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item, idx) => (
            <Card
              key={idx}
              className="border border-green-800/10 bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              {/* Image box */}
              <div className="relative h-48 w-full overflow-hidden flex items-center justify-center border-b border-green-800/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1280px) 100vw, 250px"
                />
              </div>
              {/* Content box */}
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors font-serif">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Banner Box - Clean Centered Text matching PDF */}
        <div className="mt-16 max-w-4xl mx-auto text-center px-4">
          <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed italic text-brand-dark">
            Hãy cho con niềng răng sớm vì điều này không những giúp bé thay đổi về mặt thẩm mỹ, hỗ trợ con ăn nhai khỏe, giúp hệ tiêu hóa làm việc ổn định. Đặc biệt còn giúp bé lấy được sự tự tin và dễ dàng nắm bắt những cơ hội mới trong cuộc sống.
          </p>
        </div>
      </div>
    </section>
  );
}

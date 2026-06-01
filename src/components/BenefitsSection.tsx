import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import AnimateIn from "@/components/AnimateIn";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Phát hiện sớm tình trạng răng miệng và chất lượng xương hàm của trẻ",
      desc: "Cho bé đi khám sớm cùng bác sĩ chỉnh nha, bé sẽ được chụp phim 3D, qua hình ảnh phim 3D này bác sĩ sẽ chỉ ra những sai lệch ở mầm răng hoặc xương hàm để đưa ra hướng chỉnh phù hợp cho bé mà không thể nhìn được bằng mắt thường.",
      image: "/images/reasons/reason_1.png",
    },
    {
      title: "Chỉnh nha sớm giúp khắc phục hiệu quả sai lệch",
      desc: "Điều trị sớm, khi răng sữa vẫn còn, không chỉ giúp quá trình thay răng diễn ra suôn sẻ mà còn hỗ trợ sự phát triển cân đối của xương hàm. Điều này tạo nền tảng cho trẻ có hàm răng đều đẹp và tự tin khi trưởng thành.",
      image: "/images/reasons/reason_2.png",
    },
    {
      title: "Niềng răng trẻ em giai đoạn vàng, ít gây đau và hạn chế bệnh răng miệng",
      desc: "Chỉnh răng trong giai đoạn từ 7 -12 tuổi giúp trẻ sẽ ít khó chịu hơn so với người trưởng thành trong quá trình nắn chỉnh sai lệch. Răng được nắn thẳng từ sớm giúp cải thiện khớp cắn, hỗ trợ ăn nhai tốt hơn, ngăn ngừa các bệnh lý răng miệng và tiêu hóa nhờ việc vệ sinh răng miệng trở nên dễ dàng hơn.",
      image: "/images/reasons/reason_3.png",
    },
    {
      title: "Thời gian và chi phí chỉnh nha trẻ em ít tốn kém, tiết kiệm",
      desc: "Chỉnh nha từ sớm không chỉ đơn giản hóa quá trình điều trị mà còn giảm chi phí và thời gian. Nếu sai lệch nghiêm trọng không được điều trị kịp thời, khi trẻ lớn hơn và xương hàm qua giai đoạn tăng trưởng, việc điều trị có thể phải kết hợp phẫu thuật phức tạp, gây tốn kém.",
      image: "/images/reasons/reason_4.png",
    },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif mt-2">
            LÝ DO NÊN CHỈNH NHA SỚM CHO BÉ
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-brand-accent"></div>
        </AnimateIn>

        {/* 2x2 Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {benefits.map((item, idx) => (
            <AnimateIn
              key={idx}
              animation={idx % 2 === 0 ? "slide-left" : "slide-right"}
              delay={idx < 2 ? 0 : 100}
              className="flex flex-col"
            >
              <Card className="border border-green-800/10 bg-white text-brand-dark shadow-md rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/20 transition-all duration-300 flex flex-col h-full">
                {/* Image */}
                <div className="relative h-56 w-full shrink-0 bg-white border-b border-green-800/5 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 400px"
                  />
                </div>

                {/* Text */}
                <CardContent className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black tracking-widest text-brand-primary-light uppercase">
                        Lý do {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug mt-3 text-brand-primary font-serif">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

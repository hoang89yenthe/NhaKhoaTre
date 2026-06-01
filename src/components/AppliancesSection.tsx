import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function AppliancesSection() {
  const methods = [
    {
      title: "Khay trong suốt Essential",
      image: "/images/appliances/appliance_essential.png",
    },
    {
      title: "Chỉnh nha Hàm tháo lắp",
      image: "/images/appliances/appliance_ham_thao_lap.png",
    },
    {
      title: "Mắc cài phân đoạn",
      image: "/images/appliances/appliance_mac_cai_phan_doan.png",
    },
    {
      title: "Chỉnh nha Invisalign First",
      image: "/images/appliances/appliance_invisalign_first.png",
    },
  ];

  const cons = [
    "Có mắc cài gắn trên răng làm mất thẩm mỹ.",
    "Gây vướng và khó chịu cho người sử dụng nên thời gian làm quen lâu hơn.",
    "Thời gian trở lại tái khám nhiều lần (1-2 tuần/lần).",
    "Dễ gây bung dây cung cần đến nha khoa để gắn lại.",
    "Khi ăn uống cần lưu ý và cắt nhỏ thức ăn",
  ];

  return (
    <section id="appliances" className="bg-white py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif">
            CÁC PHƯƠNG TIỆN CHỈNH NHA TRẺ EM
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-brand-accent"></div>
          <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Nha Khoa Trẻ áp dụng đa dạng các phương tiện chỉnh nha hiện đại, phù hợp với từng độ tuổi và tình trạng răng của bé, đảm bảo hiệu quả điều trị tối ưu và thoải mái nhất.
          </p>
        </AnimateIn>

        {/* 4 Methods - Circular Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-16 place-items-center">
          {methods.map((item, idx) => (
            <AnimateIn key={idx} animation="scale-up" delay={idx * 100} className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:z-10">
              <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full flex items-center justify-center overflow-hidden bg-white border border-green-800/10 shadow-sm transition-all duration-300 hover:border-4 hover:border-brand-primary hover:shadow-lg hover:ring-4 hover:ring-brand-primary/10">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                  sizes="180px"
                />
              </div>
              <h3 className="mt-4 text-sm font-bold text-brand-dark font-serif max-w-[150px]">
                {item.title}
              </h3>
            </AnimateIn>
          ))}
        </div>

        {/* Focus Detail */}
        <AnimateIn animation="slide-up" delay={100} className="relative mx-auto max-w-4xl bg-white rounded-3xl p-8 md:p-12 border border-brand-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
          <div className="relative h-60 w-60 sm:h-64 sm:w-64 overflow-hidden bg-white mb-6">
            <Image
              src="/images/appliances/appliance_bracket_detail.png"
              alt="Mắc cài kim loại 3M Mỹ"
              fill
              className="object-contain hover:scale-102 transition-transform duration-500"
              sizes="300px"
            />
          </div>

          <h3 className="text-2xl font-black text-brand-primary sm:text-3xl font-serif text-center mb-8">
            MẮC CÀI KIM LOẠI <span className="text-brand-dark font-sans text-xl sm:text-2xl font-bold">(Mắc cài 3M - Mỹ)</span>
          </h3>

          <div className="grid gap-8 md:grid-cols-2 w-full border-t border-brand-primary/10 pt-8">
            {/* Pros */}
            <div className="space-y-4">
              <h4 className="text-sm font-black text-brand-primary-light uppercase tracking-wider border-b border-brand-primary/5 pb-2 w-full flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary-light/10 text-brand-primary-light text-xs font-bold">✓</span>
                Ưu điểm nổi bật
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed font-semibold">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary-light/10 text-brand-primary-light text-[10px]">✓</span>
                  <span>Chi phí tối ưu, tiết kiệm nhất trong các phương pháp chỉnh nha.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed font-semibold">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary-light/10 text-brand-primary-light text-[10px]">✓</span>
                  <span>Hiệu quả lực kéo ổn định, giúp rút ngắn thời gian chỉnh răng.</span>
                </li>
              </ul>
            </div>

            {/* Cons */}
            <div className="space-y-4">
              <h4 className="text-sm font-black text-brand-accent uppercase tracking-wider border-b border-brand-primary/5 pb-2 w-full flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold">!</span>
                Nhược điểm cần lưu ý
              </h4>
              <ul className="space-y-3">
                {cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent text-[10px] font-bold">!</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

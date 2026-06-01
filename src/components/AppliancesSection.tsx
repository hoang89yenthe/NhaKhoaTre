import Image from "next/image";

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
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-serif">
            CÁC PHƯƠNG TIỆN CHỈNH NHA TRẺ EM
          </h2>
          <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Nha Khoa Trẻ áp dụng đa dạng các phương tiện chỉnh nha hiện đại, phù hợp với từng độ tuổi và tình trạng răng của bé, đảm bảo hiệu quả điều trị tối ưu và thoải mái nhất.
          </p>
        </div>

        {/* 4 Methods - Circular Badges Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
          {methods.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center dock-item"
            >
              <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full flex items-center justify-center overflow-hidden bg-white border border-green-800/10 shadow-sm hover:h-36 hover:w-36 md:hover:h-44 md:hover:w-44 hover:border-4 hover:border-brand-primary hover:shadow-lg hover:ring-4 hover:ring-brand-primary/10 dock-item-circle">
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
            </div>
          ))}
        </div>

        {/* Focus Detail: Mắc cài kim loại 3M Mỹ */}
        <div className="relative mx-auto max-w-4xl bg-white rounded-3xl p-6 md:p-10 border border-green-800/10 shadow-lg flex flex-col items-center">
          {/* Centered Image */}
          <div className="relative h-60 w-60 sm:h-72 sm:w-72 overflow-hidden bg-white mb-6">
            <Image
              src="/images/appliances/appliance_bracket_detail.png"
              alt="Mắc cài kim loại 3M Mỹ"
              fill
              className="object-contain"
              sizes="300px"
            />
          </div>

          {/* Centered Title */}
          <h3 className="text-2xl font-black text-brand-primary sm:text-3xl font-serif text-center mb-8">
            MẮC CÀI KIM LOẠI <span className="text-brand-dark">(Mắc cài 3m - Mỹ)</span>
          </h3>

          {/* Two-Column Grid for Pros and Cons */}
          <div className="grid gap-8 md:grid-cols-2 w-full border-t border-green-800/10 pt-8">
            {/* Pros Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-black text-brand-primary uppercase tracking-wider border-b border-green-800/10 pb-1 w-fit">
                Ưu điểm
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700 font-semibold leading-relaxed">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary shrink-0"></span>
                  <span>Giá thành rẻ hơn</span>
                </li>
              </ul>
            </div>

            {/* Cons Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-black text-brand-primary uppercase tracking-wider border-b border-green-800/10 pb-1 w-fit">
                Nhược điểm
              </h4>
              <ul className="space-y-3">
                {cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E5A93C] shrink-0"></span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AppliancesSection() {
  const methods = [
    {
      title: "Khay trong suốt Essential",
      image: "/images/appliances/appliance_essential.png",
      desc: "Khay niềng răng trong suốt Essential sử dụng chất liệu nhựa y khoa an toàn cao cấp, được thiết kế chuẩn xác theo dấu răng của bé. Khay ôm sát cung răng, dịch chuyển răng nhẹ nhàng theo từng giai đoạn phát triển.",
      age: "Trẻ từ 6 đến 12 tuổi (giai đoạn răng hỗn hợp)",
      pros: [
        "Thẩm mỹ vượt trội, gần như vô hình khi đeo.",
        "Dễ dàng tháo lắp để ăn uống và vệ sinh răng miệng sạch sẽ.",
        "Hạn chế cảm giác đau nhức và cọ xát gây tổn thương mô mềm."
      ],
      cons: [
        "Cần tính tự giác rất cao từ trẻ (đeo tối thiểu 20-22h mỗi ngày).",
        "Dễ bị thất lạc hoặc rơi vỡ khi trẻ tự ý tháo khay ngoài tầm kiểm soát của bố mẹ."
      ]
    },
    {
      title: "Chỉnh nha Hàm tháo lắp",
      image: "/images/appliances/appliance_ham_thao_lap.png",
      desc: "Hàm tháo lắp là khí cụ chỉnh nha truyền thống kết hợp giữa cung môi, lò xo và ốc nong xương. Thiết bị giúp nong rộng vòm hàm bị hẹp, tạo khoảng trống định hướng răng vĩnh viễn mọc lên đúng vị trí.",
      age: "Trẻ từ 6 đến 9 tuổi (giai đoạn tiền chỉnh nha sớm)",
      pros: [
        "Chi phí tiết kiệm, phù hợp với điều kiện kinh tế của nhiều gia đình.",
        "Khả năng nong rộng xương hàm hiệu quả, hạn chế nguy cơ phải nhổ răng khi lớn lên.",
        "Tháo lắp linh hoạt giúp trẻ thoải mái hơn khi ăn uống."
      ],
      cons: [
        "Gây nói ngọng hoặc nuốt nước bọt khó khăn trong những ngày đầu quen máy.",
        "Lực tác động không liên tục nếu trẻ thường xuyên tháo khí cụ ra."
      ]
    },
    {
      title: "Mắc cài phân đoạn",
      image: "/images/appliances/appliance_mac_cai_phan_doan.png",
      desc: "Mắc cài phân đoạn là phương pháp gắn mắc cài kim loại và dây cung lên một nhóm răng cụ thể gặp sai lệch nghiêm trọng (thường là nhóm răng cửa trước) để nắn chỉnh trục răng nhanh chóng.",
      age: "Trẻ từ 8 đến 12 tuổi (khi các răng cửa vĩnh viễn đã mọc đầy đủ)",
      pros: [
        "Lực kéo mạnh mẽ, dịch chuyển răng lệch lạc về đúng vị trí trong thời gian ngắn.",
        "Khí cụ cố định trên răng giúp đảm bảo tiến độ điều trị liên tục, không phụ thuộc vào sự tự giác của trẻ."
      ],
      cons: [
        "Khó vệ sinh răng miệng hơn, thức ăn dễ dắt vào các kẽ mắc cài.",
        "Dễ cọ xát vào má, môi gây nhiệt miệng hoặc ê ẩm trong vài ngày đầu."
      ]
    },
    {
      title: "Chỉnh nha Invisalign First",
      image: "/images/appliances/appliance_invisalign_first.png",
      desc: "Invisalign First là đỉnh cao công nghệ chỉnh nha trẻ em bằng khay trong suốt từ hãng Align Technology (Mỹ). Thiết kế chuyên biệt giúp nong hàm và sắp đều răng song song, mang lại hiệu quả vượt trội.",
      age: "Trẻ từ 6 đến 10 tuổi (giai đoạn răng hỗn hợp sớm)",
      pros: [
        "Phác đồ điều trị 3D trực quan, thấy trước sự dịch chuyển răng của trẻ trên phần mềm ClinCheck.",
        "Chất liệu nhựa SmartTrack độc quyền siêu đàn hồi, mang lại sự êm ái tối đa.",
        "Không có dây cung hay mắc cài kim loại, loại bỏ hoàn toàn nguy cơ chấn thương miệng."
      ],
      cons: [
        "Chi phí điều trị cao hơn các phương pháp chỉnh nha thông thường.",
        "Yêu cầu sự đồng hành của bố mẹ để nhắc nhở con tuân thủ thời gian đeo khay."
      ]
    },
  ];

  const cons = [
    "Có mắc cài gắn trên răng làm mất thẩm mỹ.",
    "Gây vướng và khó chịu cho người sử dụng nên thời gian làm quen lâu hơn.",
    "Thời gian trở lại tái khám nhiều lần (1-2 tuần/lần).",
    "Dễ gây bung dây cung cần đến nha khoa để gắn lại.",
    "Khi ăn uống cần lưu ý và cắt nhỏ thức ăn",
  ];

  const [selectedMethod, setSelectedMethod] = React.useState<typeof methods[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleItemClick = (item: typeof methods[0]) => {
    setSelectedMethod(item);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setSelectedMethod(null);
  };

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
            Nha Khoa Trẻ áp dụng đa dạng các phương tiện chỉnh nha hiện đại, phù hợp với từng độ tuổi và tình trạng răng của bé, đảm bảo hiệu quả điều trị tối ưu và thoải mái nhất. Click vào từng phương tiện để xem chi tiết.
          </p>
        </AnimateIn>

        {/* 4 Methods - Circular Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-16 place-items-center">
          {methods.map((item, idx) => (
            <AnimateIn key={idx} animation="scale-up" delay={idx * 100}>
              <div 
                onClick={() => handleItemClick(item)}
                className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:z-10 cursor-pointer group"
              >
                <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full flex items-center justify-center overflow-hidden bg-white border border-brand-primary/10 shadow-sm transition-all duration-300 hover:border-4 hover:border-brand-primary hover:shadow-lg hover:ring-4 hover:ring-brand-primary/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                    sizes="180px"
                  />
                </div>
                <h3 className="mt-4 text-sm font-bold text-brand-dark font-serif max-w-[150px] group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Focus Detail */}
        <AnimateIn animation="slide-up" delay={100} className="relative mx-auto max-w-4xl bg-white rounded-[32px] p-8 md:p-12 border border-brand-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center group">
          <div className="relative h-52 w-52 sm:h-60 sm:w-60 rounded-full bg-white border border-brand-primary/10 shadow-md flex items-center justify-center p-6 mb-6 transition-transform duration-500 group-hover:scale-[1.03]">
            <div className="relative w-full h-full">
              <Image
                src="/images/appliances/appliance_bracket_detail.png"
                alt="Mắc cài kim loại 3M Mỹ"
                fill
                className="object-contain transition-transform duration-700 hover:scale-105"
                sizes="250px"
              />
            </div>
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

      {/* Appliance Detail Popup (Dialog) */}
      <Dialog open={isDialogOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-2xl md:max-w-4xl w-[92vw] sm:w-[95vw] md:w-full rounded-[32px] p-5 sm:p-6 md:p-8 border border-brand-primary/10 bg-white text-brand-dark shadow-2xl overflow-y-auto max-h-[92vh]">
          {selectedMethod && (
            <div className="grid gap-6 md:grid-cols-12 items-start mt-4">
              {/* Left Column: Compact Contain Image */}
              <div className="md:col-span-4 flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-brand-primary/10 shadow-sm h-44 sm:h-48 md:h-64">
                <div className="relative w-full h-full max-w-[150px] md:max-w-full aspect-square overflow-hidden">
                  <Image
                    src={selectedMethod.image}
                    alt={selectedMethod.title}
                    fill
                    className="object-contain"
                    sizes="250px"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Text Details */}
              <div className="md:col-span-8 flex flex-col justify-start text-left">
                <DialogHeader className="text-left p-0">
                  <DialogTitle className="text-xl sm:text-2xl font-black text-brand-primary font-serif leading-tight">
                    {selectedMethod.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-2">
                  <span className="inline-block bg-brand-bg-light text-brand-primary-light font-bold text-[11px] px-3 py-1 rounded-full border border-brand-primary/5">
                    Độ tuổi phù hợp: {selectedMethod.age}
                  </span>
                </div>

                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {selectedMethod.desc}
                </p>

                {/* Pros & Cons side-by-side comparison on tablet/desktop */}
                <div className="mt-6 grid gap-6 sm:grid-cols-2 border-t border-brand-primary/5 pt-4">
                  {/* Pros */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black text-brand-primary-light uppercase tracking-wider flex items-center gap-1.5">
                      <span className="text-[10px] bg-brand-primary-light/10 text-brand-primary-light h-4 w-4 rounded-full flex items-center justify-center">✓</span>
                      Ưu điểm nổi bật
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedMethod.pros.map((pro, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed font-semibold">
                          <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-brand-primary-light/10 text-brand-primary-light text-[8px]">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black text-brand-accent uppercase tracking-wider flex items-center gap-1.5">
                      <span className="text-[10px] bg-brand-accent/10 text-brand-accent h-4 w-4 rounded-full flex items-center justify-center">!</span>
                      Nhược điểm cần lưu ý
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedMethod.cons.map((con, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
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

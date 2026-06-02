// ─── Contact ──────────────────────────────────────────────────────────────────
export const CLINIC_PHONE         = "0901334334";
export const CLINIC_PHONE_DISPLAY = "0901.334.334";
export const CLINIC_PHONE_TEL     = "tel:0901334334";
export const ZALO_LINK            = "https://zalo.me/0901334334";
export const CLINIC_EMAIL         = "cskh.nhakhoatre@gmail.com";
export const CLINIC_ADDRESS       = "Số 38 Ngụy Như Kon Tum, Phường Nhân Chính, Quận Thanh Xuân, TP.Hà Nội";
export const CLINIC_ADDRESS_SHORT = "Số 38 Ngụy Như Kon Tum, Thanh Xuân, Hà Nội";
export const FACEBOOK_URL         = "https://facebook.com/nhakhoatre";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface Doctor {
  name: string;
  title: string;
  desc: string;
}

export interface Case {
  title: string;
  desc: string;
  image: string;
}

export interface Benefit {
  title: string;
  desc: string;
  image: string;
}

export interface ProcessStep {
  title: string;
  desc?: string;
  details?: string[];
  image: string;
}

export interface Appliance {
  title: string;
  image: string;
  desc: string;
  age: string;
  pros: string[];
  cons: string[];
}

export interface Review {
  parent: string;
  child: string;
  review: string;
  rating: number;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const heroBullets = [
  "Chuyên sâu chỉnh nha trẻ em tiêu chuẩn Đức",
  "Đội ngũ bác sĩ giàu kinh nghiệm, am hiểu trẻ",
  "100% số hoá - ứng dụng công nghệ cao",
];

export const heroHighlights = [
  { value: "Tiêu chuẩn Đức",  desc: "Chỉnh nha chuyên sâu trẻ em" },
  { value: "Đội ngũ bác sĩ",  desc: "Giàu kinh nghiệm, am hiểu trẻ" },
  { value: "100% Số hóa",     desc: "Ứng dụng công nghệ cao" },
];

// ─── Cases ────────────────────────────────────────────────────────────────────
export const cases: Case[] = [
  {
    title: "Khi răng con bị hô",
    desc: "Khi những chiếc răng vĩnh viễn hàm trên mọc lên và chìa ra quá mức so với răng hàm dưới, làm cho tổng thể gương mặt răng bị nhô ra thì cha mẹ nên cho con đi khám với bác sĩ để được chỉnh nha sớm cho bé.",
    image: "/images/cases/case_ho.png",
  },
  {
    title: "Khi răng con bị móm",
    desc: "Ngược lại với răng hô, khi những chiếc răng hàm dưới bị chìa ra bên ngoài, khớp cắn không trùng khít với những chiếc răng cửa hàm trên. Chỉnh nha sớm giúp chỉnh khớp cắn 2 hàng trùng khít, cải thiện ăn nhai và thẩm mỹ khuôn mặt.",
    image: "/images/cases/case_mom.png",
  },
  {
    title: "Răng mọc lộn xộn",
    desc: "Nếu thấy những chiếc răng vĩnh viễn mọc lộn xộn, chiếc thò chiếc ra, chiếc trồi lên, chiếc thụt sâu vào trong thì cha mẹ nên đưa con gặp bác sĩ niềng răng càng sớm càng tốt.",
    image: "/images/cases/case_lon_xon.png",
  },
  {
    title: "Răng thưa, kẽ răng rộng",
    desc: "Răng thưa khiến khuôn mặt của bé khi cười mất đi vẻ thẩm mỹ và còn khiến thức ăn dễ dắt vào kẽ răng gây sâu răng, viêm nướu. Niềng răng sớm giúp bé cải thiện thẩm mỹ, khớp cắn chuẩn và tự tin hơn.",
    image: "/images/cases/case_thua.png",
  },
];

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const benefits: Benefit[] = [
  {
    title: "Phát hiện sớm tình trạng răng miệng và xương hàm",
    desc: "Phim 3D chụp từ sớm giúp bác sĩ thấy những sai lệch mầm răng, răng mọc ngầm mà mắt thường không nhìn được — đưa ra hướng chỉnh trước khi vấn đề phức tạp hơn.",
    image: "/images/reasons/reason_1.png",
  },
  {
    title: "Khắc phục sai lệch hiệu quả hơn khi còn nhỏ",
    desc: "Xương hàm đang phát triển linh hoạt, dễ định hướng. Điều trị từ sớm tạo nền tảng cho hàm răng đều đẹp — thay vì phải can thiệp phẫu thuật khi lớn.",
    image: "/images/reasons/reason_2.png",
  },
  {
    title: "Giai đoạn vàng 7–12 tuổi: ít đau, ít biến chứng",
    desc: "Trẻ em dễ thích nghi với khí cụ và ít khó chịu hơn người lớn. Răng thẳng sớm còn giúp vệ sinh dễ hơn, giảm nguy cơ sâu răng và bệnh nướu lâu dài.",
    image: "/images/reasons/reason_3.png",
  },
  {
    title: "Tiết kiệm thời gian và chi phí đáng kể",
    desc: "Điều trị sớm đơn giản hơn, ngắn hơn và rẻ hơn so với chờ xương hàm cứng lại. Can thiệp đúng lúc có thể tránh hoàn toàn việc phải phẫu thuật sau này.",
    image: "/images/reasons/reason_4.png",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    title: "Khám tư vấn:",
    details: [
      "Chụp phim 3D",
      "Scan răng với Itero",
      "Chụp ảnh thu thập dữ liệu",
      "Bác sỹ thăm khám tư vấn dựa trên kết quả thực tế",
    ],
    image: "/images/process/process_1.png",
  },
  {
    title: "Lập kế hoạch điều trị:",
    desc: "Bác sỹ đưa ra phác đồ điều trị phù hợp với từng bé và thống nhất kế hoạch, dự kiến kết quả trước khi chỉnh nha",
    image: "/images/process/process_2.png",
  },
  {
    title: "Lắp khí cụ chỉnh nha phù hợp cho bé",
    desc: "Bác sĩ lắp khí cụ được chỉ định và hướng dẫn bé cách đeo, vệ sinh đúng cách tại nhà.",
    image: "/images/process/process_3.png",
  },
  {
    title: "Tái khám định kỳ 2–4 tuần, theo dõi tiến trình",
    desc: "Mỗi lần tái khám, bác sĩ điều chỉnh lực chỉnh nha và cập nhật tiến trình cho cha mẹ.",
    image: "/images/process/process_4.png",
  },
  {
    title: "Kết thúc liệu trình, lắp hàm duy trì",
    desc: "Bác sĩ đánh giá kết quả cuối kỳ, lắp hàm duy trì và lên lịch tái khám để giữ kết quả lâu dài.",
    image: "/images/process/process_5.png",
  },
];

// ─── Doctors ──────────────────────────────────────────────────────────────────
export const doctors: Doctor[] = [
  {
    name: "Bác sĩ Nguyễn Huy Hoàng",
    title: "Trưởng phòng khám Nha Khoa Trẻ",
    desc: "Chuyên gia chỉnh nha tăng trưởng, chứng chỉ Invisalign Mỹ, hơn 15 năm lâm sàng.",
  },
  {
    name: "Bác sĩ Trịnh Thị Lệ Xuân",
    title: "Bác sĩ Chỉnh nha Chuyên sâu trẻ em",
    desc: "Thành viên Hiệp hội Chỉnh nha Thế giới (WFO), chuyên gia niềng răng mắc cài tự buộc và Invisalign First.",
  },
  {
    name: "Bác sĩ Phạm Thùy Anh",
    title: "Bác sĩ Chỉnh nha Thẩm mỹ",
    desc: "Tốt nghiệp Đại học Y Hà Nội, chuyên sâu khay chỉnh nha sớm Essential và các khí cụ tháo lắp cho trẻ.",
  },
];

// ─── Appliances ───────────────────────────────────────────────────────────────
export const appliances: Appliance[] = [
  {
    title: "Khay trong suốt Essential",
    image: "/images/appliances/appliance_essential.png",
    desc: "Khay niềng răng trong suốt Essential sử dụng chất liệu nhựa y khoa an toàn cao cấp, được thiết kế chuẩn xác theo dấu răng của bé. Khay ôm sát cung răng, dịch chuyển răng nhẹ nhàng theo từng giai đoạn phát triển.",
    age: "Trẻ từ 6 đến 12 tuổi (giai đoạn răng hỗn hợp)",
    pros: [
      "Thẩm mỹ vượt trội, gần như vô hình khi đeo.",
      "Dễ dàng tháo lắp để ăn uống và vệ sinh răng miệng sạch sẽ.",
      "Hạn chế cảm giác đau nhức và cọ xát gây tổn thương mô mềm.",
    ],
    cons: [
      "Cần tính tự giác rất cao từ trẻ (đeo tối thiểu 20–22h mỗi ngày).",
      "Dễ bị thất lạc hoặc rơi vỡ khi trẻ tự ý tháo khay ngoài tầm kiểm soát của bố mẹ.",
    ],
  },
  {
    title: "Chỉnh nha Hàm tháo lắp",
    image: "/images/appliances/appliance_ham_thao_lap.png",
    desc: "Hàm tháo lắp là khí cụ chỉnh nha truyền thống kết hợp giữa cung môi, lò xo và ốc nong xương. Thiết bị giúp nong rộng vòm hàm bị hẹp, tạo khoảng trống định hướng răng vĩnh viễn mọc lên đúng vị trí.",
    age: "Trẻ từ 6 đến 9 tuổi (giai đoạn tiền chỉnh nha sớm)",
    pros: [
      "Chi phí tiết kiệm, phù hợp với điều kiện kinh tế của nhiều gia đình.",
      "Khả năng nong rộng xương hàm hiệu quả, hạn chế nguy cơ phải nhổ răng khi lớn lên.",
      "Tháo lắp linh hoạt giúp trẻ thoải mái hơn khi ăn uống.",
    ],
    cons: [
      "Gây nói ngọng hoặc nuốt nước bọt khó khăn trong những ngày đầu quen máy.",
      "Lực tác động không liên tục nếu trẻ thường xuyên tháo khí cụ ra.",
    ],
  },
  {
    title: "Mắc cài phân đoạn",
    image: "/images/appliances/appliance_mac_cai_phan_doan.png",
    desc: "Mắc cài phân đoạn là phương pháp gắn mắc cài kim loại và dây cung lên một nhóm răng cụ thể gặp sai lệch nghiêm trọng (thường là nhóm răng cửa trước) để nắn chỉnh trục răng nhanh chóng.",
    age: "Trẻ từ 8 đến 12 tuổi (khi các răng cửa vĩnh viễn đã mọc đầy đủ)",
    pros: [
      "Lực kéo mạnh mẽ, dịch chuyển răng lệch lạc về đúng vị trí trong thời gian ngắn.",
      "Khí cụ cố định trên răng giúp đảm bảo tiến độ điều trị liên tục, không phụ thuộc vào sự tự giác của trẻ.",
    ],
    cons: [
      "Khó vệ sinh răng miệng hơn, thức ăn dễ dắt vào các kẽ mắc cài.",
      "Dễ cọ xát vào má, môi gây nhiệt miệng hoặc ê ẩm trong vài ngày đầu.",
    ],
  },
  {
    title: "Chỉnh nha Invisalign First",
    image: "/images/appliances/appliance_invisalign_first.png",
    desc: "Invisalign First là đỉnh cao công nghệ chỉnh nha trẻ em bằng khay trong suốt từ hãng Align Technology (Mỹ). Thiết kế chuyên biệt giúp nong hàm và sắp đều răng song song, mang lại hiệu quả vượt trội.",
    age: "Trẻ từ 6 đến 10 tuổi (giai đoạn răng hỗn hợp sớm)",
    pros: [
      "Phác đồ điều trị 3D trực quan, thấy trước sự dịch chuyển răng của trẻ trên phần mềm ClinCheck.",
      "Chất liệu nhựa SmartTrack độc quyền siêu đàn hồi, mang lại sự êm ái tối đa.",
      "Không có dây cung hay mắc cài kim loại, loại bỏ hoàn toàn nguy cơ chấn thương miệng.",
    ],
    cons: [
      "Chi phí điều trị cao hơn các phương pháp chỉnh nha thông thường.",
      "Yêu cầu sự đồng hành của bố mẹ để nhắc nhở con tuân thủ thời gian đeo khay.",
    ],
  },
];

export const bracketPros = [
  "Chi phí tối ưu, tiết kiệm nhất trong các phương pháp chỉnh nha.",
  "Hiệu quả lực kéo ổn định, giúp rút ngắn thời gian chỉnh răng.",
];

export const bracketCons = [
  "Có mắc cài gắn trên răng làm mất thẩm mỹ.",
  "Gây vướng và khó chịu cho người sử dụng nên thời gian làm quen lâu hơn.",
  "Thời gian trở lại tái khám nhiều lần (1–2 tuần/lần).",
  "Dễ gây bung dây cung cần đến nha khoa để gắn lại.",
  "Khi ăn uống cần lưu ý và cắt nhỏ thức ăn.",
];

// ─── Reviews ──────────────────────────────────────────────────────────────────
export const reviews: Review[] = [
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

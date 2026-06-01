# Nha Khoa Trẻ — Landing Page

Landing page cho phòng khám chỉnh nha trẻ em **Nha Khoa Trẻ**, xây dựng bằng Next.js 16, Tailwind CSS 4, và shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16.2 (App Router, Static Export)
- **Styling**: Tailwind CSS 4 + tw-animate-css
- **UI Components**: shadcn/ui (Base UI)
- **Icons**: Lucide React
- **Language**: TypeScript

## Cài đặt & Chạy

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run start     # Chạy production build
```

## Cấu trúc Project

```
src/
├── app/
│   ├── globals.css       # Tailwind config, brand colors, keyframe animations
│   ├── layout.tsx        # Root layout, fonts (Outfit, Playfair Display, Caveat)
│   └── page.tsx          # Trang chủ
└── components/
    ├── Header.tsx         # Sticky header, mobile drawer
    ├── Hero.tsx           # Hero section với entrance animations
    ├── CasesSection.tsx   # 4 trường hợp cần chỉnh nha
    ├── BenefitsSection.tsx # Lý do nên chỉnh nha sớm
    ├── DoctorsSection.tsx  # Đội ngũ bác sĩ
    ├── ProcessSection.tsx  # Quy trình chỉnh nha (5 bước)
    ├── AppliancesSection.tsx # Các phương tiện chỉnh nha
    ├── Testimonials.tsx    # Kết quả thực tế
    ├── ConsultationForm.tsx # Form đăng ký tư vấn
    ├── Footer.tsx          # Footer
    └── AnimateIn.tsx       # Scroll-triggered animation wrapper
```

## Tính năng

- Responsive toàn bộ (mobile-first)
- Scroll-triggered entrance animations (IntersectionObserver)
- Hero entrance animations (CSS-only, không cần JS)
- Wave SVG transitions giữa các sections
- Form đăng ký tư vấn kết nối Google Sheets

## Cấu hình Form Đăng Ký

Form gửi dữ liệu lên Google Sheets qua Google Apps Script. Tạo file `.env.local`:

```env
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Google Apps Script** (deploy làm Web App, quyền truy cập: Anyone):

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Thời gian", "Họ tên", "Số điện thoại", "Tình trạng răng", "Mong muốn"]);
  }
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date().toLocaleString("vi-VN"),
    data.fullName,
    data.phone,
    data.status || "",
    data.desire || "",
  ]);
  return ContentService.createTextOutput("OK");
}
```

## Brand Colors

| Tên | Hex |
|-----|-----|
| `brand-primary` | `#0F5132` |
| `brand-primary-light` | `#1C7F4A` |
| `brand-accent` | `#E5A93C` |
| `brand-accent-light` | `#FCDA6C` |
| `brand-bg-light` | `#F4F9F6` |
| `brand-dark` | `#073E23` |
| `brand-form-bg` | `#739E7D` |

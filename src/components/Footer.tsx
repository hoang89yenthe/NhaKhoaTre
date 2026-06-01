import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-green-800/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 mb-12">
          {/* Brand and licensing */}
          <div className="md:col-span-6 space-y-6">
            <Link href="#" className="flex items-center group">
              <div className="relative h-11 w-32 md:w-36 transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.png"
                  alt="Nha Khoa Trẻ Logo"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </Link>

            <div className="space-y-3.5 text-sm text-green-100/80 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Số 38 Ngụy Như Kon Tum, Phường Nhân Chính, Quận Thanh Xuân, TP.Hà Nội</span>
              </div>
              <div className="pt-2 border-t border-green-800/25">
                <p>0107743689 – UBND Quận Thanh Xuân Phòng TC-KH cấp 08/03/2017.</p>
                <p className="mt-1">Giấy phép hoạt động khám bệnh, chữa bệnh Số: 09/HNO-GPHĐ/CL1</p>
              </div>
            </div>
          </div>

          {/* Socials & contacts */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-8">
            <div className="space-y-4 md:text-right">
              <span className="text-sm font-bold text-brand-accent tracking-wider uppercase block">
                Liên hệ với chúng tôi
              </span>
              <div className="flex flex-wrap md:justify-end gap-3">
                {/* TikTok */}
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-90 shadow-md"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.06-1.39v7.76c-.01 2.37-1.39 4.77-3.77 5.37-2.61.73-5.69-.64-6.42-3.23-.78-2.61.64-5.74 3.28-6.42 1-.27 2.09-.15 3.03.3v-4.14c-1.85-.56-3.83-.43-5.59.38-2.1 1-3.6 3.12-3.77 5.48-.28 3.51 2.39 6.8 5.92 7.07 3.53.28 6.78-2.39 7.06-5.92.01-.13.01-.27.01-.4V7.85c.02-2.61.01-5.22.01-7.83H12.53z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-opacity hover:opacity-90 shadow-md"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white transition-opacity hover:opacity-90 shadow-md"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Email, hotline, and badge */}
            <div className="flex flex-col md:items-end gap-3 text-sm text-green-100/90 leading-relaxed">
              <div className="space-y-1 md:text-right">
                <span className="text-xs font-semibold text-green-200/70 block">Hỗ trợ khách hàng</span>
                <a
                  href="mailto:cskh.nhakhoatre@gmail.com"
                  className="flex items-center justify-end gap-2 hover:text-brand-accent transition-colors font-semibold"
                >
                  <Mail className="h-4 w-4 text-brand-accent" />
                  <span>cskh.nhakhoatre@gmail.com</span>
                </a>
              </div>
              
              <div className="space-y-1 md:text-right">
                <span className="text-xs font-semibold text-green-200/70 block">Hotline</span>
                <a
                  href="tel:0901334334"
                  className="flex items-center justify-end gap-2 font-bold text-base hover:text-brand-accent transition-colors"
                >
                  <Phone className="h-[18px] w-[18px] text-brand-accent" />
                  <span>0901.334.334</span>
                </a>
              </div>

              {/* Ministry badge */}
              <div className="pt-2">
                <div className="relative h-12 w-[120px]">
                  <Image
                    src="/images/bocongthuong_badge.png"
                    alt="Đã thông báo Bộ Công Thương"
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="border-t border-green-800/25 pt-6 text-center text-xs text-green-200/50 flex flex-col sm:flex-row justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Nha Khoa Trẻ. All rights reserved.</span>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-brand-accent transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

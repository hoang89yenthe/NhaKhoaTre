"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle, Loader2, User, Phone as PhoneIcon, MessageSquare, Heart, Sparkles } from "lucide-react";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";

export default function ConsultationForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    status: "",
    desire: "",
  });
  const [errors, setErrors] = React.useState({ fullName: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const validate = () => {
    const newErrors = { fullName: "", phone: "" };
    if (!formData.fullName.trim()) newErrors.fullName = "Vui lòng nhập họ tên";
    if (!formData.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      if (APPS_SCRIPT_URL) {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            fullName: formData.fullName,
            phone: formData.phone,
            status: formData.status,
            desire: formData.desire,
          }),
        });
      }
    } catch {
      // no-cors luôn trả về opaque response, lỗi mạng thật sự mới vào đây
    } finally {
      setIsSubmitting(false);
      setShowSuccess(true);
    }
  };

  const handleClose = () => {
    setShowSuccess(false);
    setFormData({ fullName: "", phone: "", status: "", desire: "" });
    setErrors({ fullName: "", phone: "" });
  };

  return (
    <section id="register" className="bg-brand-bg-light/60 pt-20 pb-36 lg:pt-28 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Card className="border border-white/10 bg-brand-form-bg text-white shadow-2xl rounded-[32px] overflow-hidden">
          <CardContent className="p-8 sm:p-12 md:p-16">
            <div className="grid gap-12 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: CTA Info */}
              <div className="lg:col-span-5 flex flex-col justify-between text-left">
                <div className="space-y-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-brand-accent">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-white leading-tight">
                    ĐĂNG KÝ HÔM NAY <br />
                    <span className="text-brand-accent drop-shadow-sm">NHẬN NGAY ƯU ĐÃI</span>
                  </h2>
                  <p className="text-base text-green-100/90 leading-relaxed">
                    Đăng ký tư vấn chỉnh nha sớm cho bé để nhận được các đặc quyền duy nhất trong tháng này:
                  </p>
                  
                  <ul className="space-y-3.5 text-sm text-green-50/90">
                    <li className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent text-xs">✓</span>
                      <span>Miễn phí 100% chụp phim 3D kiểm tra răng ngầm.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent text-xs">✓</span>
                      <span>Miễn phí thăm khám & tư vấn trực tiếp cùng Bác sĩ đầu ngành.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent text-xs">✓</span>
                      <span>Tặng phác đồ chỉnh nha tăng trưởng toàn diện.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-xs text-green-200/70">
                  <p>Hotline: 0901.334.334</p>
                  <p className="mt-1">Địa chỉ: Số 38 Ngụy Như Kon Tum, Thanh Xuân, Hà Nội</p>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-center backdrop-blur-md">
                <form onSubmit={handleSubmit} className="space-y-5 w-full">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-bold tracking-wide text-white flex items-center gap-2">
                      <User className="h-4 w-4 text-brand-accent" />
                      Họ và tên cha mẹ
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-green-200/50" />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="VD: Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        className="pl-11 bg-white/10 text-white placeholder:text-green-200/50 border-white/20 rounded-xl h-11 px-4 text-left shadow-sm focus-visible:ring-2 focus-visible:ring-brand-accent focus:border-brand-accent w-full"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-red-200 font-semibold">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold tracking-wide text-white flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4 text-brand-accent" />
                      Số điện thoại liên hệ
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-green-200/50" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="VD: 0901xxxxxx"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        className="pl-11 bg-white/10 text-white placeholder:text-green-200/50 border-white/20 rounded-xl h-11 px-4 text-left shadow-sm focus-visible:ring-2 focus-visible:ring-brand-accent focus:border-brand-accent w-full"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-200 font-semibold">{errors.phone}</p>
                    )}
                  </div>

                  {/* Status field */}
                  <div className="space-y-2">
                    <label htmlFor="status" className="text-sm font-bold tracking-wide text-white flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-brand-accent" />
                      Tình trạng răng hiện tại của bé
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-4.5 h-4.5 w-4.5 text-green-200/50" />
                      <Textarea
                        id="status"
                        placeholder="VD: Răng bé mọc lệch, thưa, hô, móm..."
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className="pl-11 bg-white/10 text-white placeholder:text-green-200/50 border-white/20 rounded-xl min-h-[80px] p-3 text-left shadow-sm focus-visible:ring-2 focus-visible:ring-brand-accent focus:border-brand-accent resize-none w-full"
                      />
                    </div>
                  </div>

                  {/* Desire field */}
                  <div className="space-y-2">
                    <label htmlFor="desire" className="text-sm font-bold tracking-wide text-white flex items-center gap-2">
                      <Heart className="h-4 w-4 text-brand-accent" />
                      Mong muốn điều trị
                    </label>
                    <div className="relative">
                      <Heart className="absolute left-3.5 top-4.5 h-4.5 w-4.5 text-green-200/50" />
                      <Textarea
                        id="desire"
                        placeholder="VD: Mong muốn răng con đều đẹp, tự tin cười..."
                        value={formData.desire}
                        onChange={(e) => setFormData({ ...formData, desire: e.target.value })}
                        className="pl-11 bg-white/10 text-white placeholder:text-green-200/50 border-white/20 rounded-xl min-h-[80px] p-3 text-left shadow-sm focus-visible:ring-2 focus-visible:ring-brand-accent focus:border-brand-accent resize-none w-full"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex justify-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 rounded-full bg-brand-accent hover:bg-brand-accent-light text-brand-dark font-black text-lg shadow-lg transition-all hover:scale-[1.02] uppercase tracking-wider h-14 flex items-center justify-center animate-shimmer-btn disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Đang xử lý dữ liệu...
                        </>
                      ) : (
                        "ĐĂNG KÝ TƯ VẤN MIỄN PHÍ!"
                      )}
                    </Button>
                  </div>
                </form>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>

      {/* Wave transition → dark footer below */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          className="block w-full"
          style={{ height: "64px" }}
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 L0,32 C240,0 480,64 720,32 C960,0 1200,64 1440,32 L1440,64 Z"
            fill="#042E19"
          />
        </svg>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={handleClose}>
        <DialogContent className="max-w-md rounded-3xl border border-brand-primary/10 bg-white p-8 text-brand-dark shadow-2xl text-center">
          <DialogHeader className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-brand-primary">
              <CheckCircle className="h-10 w-10 text-brand-primary" />
            </div>
            <DialogTitle className="text-2xl font-black font-serif text-brand-dark">
              Đăng Ký Thành Công!
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-base text-gray-500 mt-4 leading-relaxed">
            Cảm ơn ba mẹ <strong className="text-brand-primary">{formData.fullName}</strong> đã đăng ký tư vấn chỉnh nha sớm cho bé. Bác sĩ chuyên khoa của <strong>Nha Khoa Trẻ</strong> sẽ liên hệ trực tiếp qua số điện thoại <strong className="text-brand-primary">{formData.phone}</strong> trong vòng 15 phút tới.
          </DialogDescription>
          <div className="mt-8">
            <Button
              onClick={handleClose}
              className="rounded-full bg-brand-primary hover:bg-brand-dark text-white px-8 font-bold"
            >
              Đóng
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

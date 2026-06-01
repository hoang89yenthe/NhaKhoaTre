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
import { CheckCircle } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    status: "",
    desire: "",
  });
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Vui lòng điền Họ tên và Số điện thoại!");
      return;
    }
    // Simulate API call
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
    setFormData({ fullName: "", phone: "", status: "", desire: "" });
  };

  return (
    <section id="register" className="bg-brand-bg-light py-20 lg:py-28 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Card className="border border-green-800/10 bg-brand-form-bg text-white shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 sm:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl font-serif text-brand-accent drop-shadow-md">
                ĐĂNG KÝ TƯ VẤN
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
              <div className="space-y-1.5 text-center">
                <label htmlFor="fullName" className="text-sm font-bold tracking-wide text-white block">
                  Họ tên
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="VD: Trần Văn A"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-white text-brand-dark border-none rounded-xl h-11 px-4 text-center shadow-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-brand-accent"
                />
              </div>

              <div className="space-y-1.5 text-center">
                <label htmlFor="phone" className="text-sm font-bold tracking-wide text-white block">
                  SĐT
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="VD: 035xxxxxxxx"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white text-brand-dark border-none rounded-xl h-11 px-4 text-center shadow-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-brand-accent"
                />
              </div>

              <div className="space-y-1.5 text-center">
                <label htmlFor="status" className="text-sm font-bold tracking-wide text-white block">
                  Tình trạng răng
                </label>
                <Textarea
                  id="status"
                  placeholder="VD: Đau mỏi vai gáy, lệch khớp cắn,......"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="bg-white text-brand-dark border-none rounded-xl min-h-[70px] p-3 text-center shadow-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-brand-accent resize-none"
                />
              </div>

              <div className="space-y-1.5 text-center">
                <label htmlFor="desire" className="text-sm font-bold tracking-wide text-white block">
                  Mong muốn của KH
                </label>
                <Textarea
                  id="desire"
                  placeholder="VD: Giảm thiểu tình trạng đau mỏi, ...."
                  value={formData.desire}
                  onChange={(e) => setFormData({ ...formData, desire: e.target.value })}
                  className="bg-white text-brand-dark border-none rounded-xl min-h-[70px] p-3 text-center shadow-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-brand-accent resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-16 py-6 rounded-full bg-brand-dark hover:bg-brand-dark/90 text-brand-accent font-black text-xl sm:text-2xl shadow-lg border-2 border-brand-primary transition-all hover:scale-[1.03] uppercase tracking-wider h-14 flex items-center justify-center"
                >
                  ĐĂNG KÝ NGAY!
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={handleClose}>
        <DialogContent className="max-w-md rounded-3xl border border-green-800/10 bg-white p-8 text-brand-dark shadow-2xl text-center">
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

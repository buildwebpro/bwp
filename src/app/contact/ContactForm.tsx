"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "default"
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // แทนที่ด้วย Service ID ของคุณ
        'YOUR_TEMPLATE_ID', // แทนที่ด้วย Template ID ของคุณ
        templateParams,
        'YOUR_PUBLIC_KEY' // แทนที่ด้วย Public Key ของคุณ
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        service: "default"
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setError("เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 shadow-lg border">
      {success ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2">ขอบคุณครับ!</h3>
          <p className="text-muted-foreground mb-6">
            ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด
          </p>
          <Button
            onClick={() => setSuccess(false)}
            variant="outline"
          >
            ส่งข้อความใหม่
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                ชื่อ-นามสกุล *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                อีเมล *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                เบอร์โทรศัพท์
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (123) 456-7890"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                บริษัท
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">
              บริการที่สนใจ
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="default" disabled>เลือกบริการ</option>
              <option value="web-design">Web Design</option>
              <option value="web-development">Web Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="ecommerce">E-Commerce Solutions</option>
              <option value="seo-analytics">SEO & Analytics</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              เรื่องที่ติดต่อ *
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              ข้อความ *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="min-h-[150px]"
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1"
              required
            />
            <label htmlFor="privacy" className="text-sm text-muted-foreground">
             ข้าพเจ้ายอมรับ <a href='/privacy-policy' className='text-primary hover:underline'>นโยบายความเป็นส่วนตัว</a> และให้ความยินยอมในการจัดเก็บและประมวลผลข้อมูลส่วนบุคคล
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "ส่งข้อความ"}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      )}
    </Card>
  );
}

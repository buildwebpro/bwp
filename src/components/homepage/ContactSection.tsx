"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      alert("ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด!");
    } catch (error) {
      console.error('Error:', error);
      alert("เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            ติดต่อเรา
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            มีโปรเจกต์ที่ต้องการพัฒนา หรือกำลังมองหาบริการของเรา? ติดต่อเราได้เลย เราพร้อมให้คำปรึกษาและช่วยคุณสร้างเว็บไซต์ที่ตอบโจทย์ธุรกิจของคุณ
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">ติดต่อเรา</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="ชื่อ" 
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="อีเมล" 
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="หัวข้อ"
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ข้อความ" 
                    rows={4}
                    required
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full">
                    ส่งข้อความ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-md mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    buildwebpro@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-md mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    080 558 5550
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-md mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-muted-foreground">
                   3224 ถนนสุขุมวิท ต.บ้านสวน<br/>
                    อ.เมือง จ.ชลบุรี 20000
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-md mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    ให้บริการทุกวัน: 10:00 - 19:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

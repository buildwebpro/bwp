import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "บริการดูแลเว็บไซต์ | Buildweb PRO - บริการดูแลรักษาเว็บไซต์ครบวงจร",
  description: "บริการดูแลรักษาเว็บไซต์ ดูแลระบบ และดูแลโฮสติ้ง ครบวงจร พร้อมบริการแก้ไขปัญหาและอัพเดทระบบ",
  keywords: "Website Maintenance, Server Maintenance, Website Support, Hosting Support, System Updates, Security Monitoring",
  openGraph: {
    title: "บริการดูแลเว็บไซต์ | Buildweb PRO",
    description: "บริการดูแลรักษาเว็บไซต์ ดูแลระบบ และดูแลโฮสติ้ง ครบวงจร พร้อมบริการแก้ไขปัญหาและอัพเดทระบบ",
    type: "website",
  },
};

export default function WebsiteMaintenancePage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            บริการดูแลเว็บไซต์
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            บริการดูแลรักษาเว็บไซต์ ดูแลระบบ และดูแลโฮสติ้ง ครบวงจร เพื่อให้เว็บไซต์ของคุณทำงานได้อย่างมีประสิทธิภาพตลอดเวลา
          </p>
          <Button asChild size="lg">
            <Link href="/contact" className="font-sans">ขอใบเสนอราคา</Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                ดูแลเว็บไซต์ของคุณให้ทำงานได้อย่างสมบูรณ์
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ที่ Buildweb PRO เราให้บริการดูแลรักษาเว็บไซต์ครบวงจร ตั้งแต่การดูแลระบบ การแก้ไขปัญหา การอัพเดทความปลอดภัย และการดูแลโฮสติ้ง
                </p>
                <p>
                  ทีมงานของเรามีประสบการณ์ในการดูแลเว็บไซต์หลากหลายประเภท และพร้อมให้บริการตลอด 24 ชั่วโมง เพื่อให้เว็บไซต์ของคุณทำงานได้อย่างต่อเนื่อง
                </p>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/web-design3.png"
                alt="Website Maintenance"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Maintenance Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              บริการดูแลเว็บไซต์ของเรา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ดูแลระบบ",
                  description: "ตรวจสอบและดูแลระบบให้ทำงานได้อย่างมีประสิทธิภาพ รวมถึงการอัพเดทระบบและแก้ไขปัญหา"
                },
                {
                  title: "ดูแลโฮสติ้ง",
                  description: "ดูแลจัดการโฮสติ้ง การสำรองข้อมูล และการจัดการพื้นที่จัดเก็บข้อมูล"
                },
                {
                  title: "แก้ไขปัญหา",
                  description: "แก้ไขปัญหาที่เกิดขึ้นกับเว็บไซต์ และให้คำแนะนำในการป้องกันปัญหาในอนาคต"
                },
                {
                  title: "อัพเดทความปลอดภัย",
                  description: "ติดตั้งและอัพเดทระบบความปลอดภัย ป้องกันการโจมตี และรักษาข้อมูลให้ปลอดภัย"
                },
                {
                  title: "ตรวจสอบประสิทธิภาพ",
                  description: "ตรวจสอบและปรับปรุงประสิทธิภาพการทำงานของเว็บไซต์ให้เร็วและมีประสิทธิภาพ"
                },
                {
                  title: "รายงานประจำเดือน",
                  description: "จัดทำรายงานประจำเดือนเกี่ยวกับสถานะและประสิทธิภาพการทำงานของเว็บไซต์"
                }
              ].map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ขั้นตอนการดูแลรักษา
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1. ตรวจสอบระบบ",
                  description: "ตรวจสอบการทำงานของระบบและระบุจุดที่ต้องปรับปรุง"
                },
                {
                  step: "2. อัพเดทระบบ",
                  description: "อัพเดทระบบและซอฟต์แวร์ให้เป็นเวอร์ชันล่าสุด"
                },
                {
                  step: "3. ตรวจสอบความปลอดภัย",
                  description: "ตรวจสอบและปรับปรุงระบบความปลอดภัย"
                },
                {
                  step: "4. สำรองข้อมูล",
                  description: "สำรองข้อมูลและตรวจสอบความสมบูรณ์ของข้อมูล"
                },
                {
                  step: "5. รายงานผล",
                  description: "จัดทำรายงานและให้คำแนะนำในการปรับปรุง"
                }
              ].map((process, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{process.step.split(". ")[1]}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Features */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ฟีเจอร์การดูแลรักษา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "การตรวจสอบระบบ",
                  technologies: ["ตรวจสอบการทำงาน", "ตรวจสอบความเร็ว", "ตรวจสอบความปลอดภัย", "ตรวจสอบการอัพเดท"]
                },
                {
                  category: "การดูแลข้อมูล",
                  technologies: ["สำรองข้อมูล", "กู้คืนข้อมูล", "จัดการพื้นที่จัดเก็บ", "ทำความสะอาดข้อมูล"]
                },
                {
                  category: "การดูแลความปลอดภัย",
                  technologies: ["ป้องกันไวรัส", "ป้องกันการโจมตี", "SSL Certificate", "Firewall"]
                },
                {
                  category: "การแก้ไขปัญหา",
                  technologies: ["แก้ไขบั๊ก", "แก้ไขความผิดพลาด", "ปรับปรุงประสิทธิภาพ", "แก้ไขปัญหา DNS"]
                },
                {
                  category: "การรายงาน",
                  technologies: ["รายงานประจำเดือน", "รายงานปัญหา", "รายงานประสิทธิภาพ", "รายงานความปลอดภัย"]
                },
                {
                  category: "การให้คำปรึกษา",
                  technologies: ["ให้คำแนะนำ", "วางแผนการปรับปรุง", "วิเคราะห์ปัญหา", "เสนอทางเลือก"]
                }
              ].map((tech, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              พร้อมที่จะดูแลเว็บไซต์ของคุณ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ติดต่อเราวันนี้เพื่อพูดคุยว่าบริการดูแลเว็บไซต์ของเราจะช่วยให้เว็บไซต์ของคุณทำงานได้อย่างมีประสิทธิภาพตลอดเวลา
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">ติดต่อเรา</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">ดูผลงานของเรา</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Providers>
  );
} 
import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "บริการ CMS Integration | Buildweb PRO - พัฒนาเว็บไซต์ด้วย WordPress",
  description: "บริการพัฒนาเว็บไซต์ด้วย WordPress ครบวงจร ตั้งแต่การติดตั้ง ปรับแต่งธีม และเพิ่มฟีเจอร์ตามความต้องการ",
  keywords: "WordPress, CMS, Web Development, Theme Customization, Plugin Development, Website Integration",
  openGraph: {
    title: "บริการ CMS Integration | Buildweb PRO",
    description: "บริการพัฒนาเว็บไซต์ด้วย WordPress ครบวงจร ตั้งแต่การติดตั้ง ปรับแต่งธีม และเพิ่มฟีเจอร์ตามความต้องการ",
    type: "website",
  },
};

export default function CMSIntegrationPage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            บริการ CMS Integration
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            พัฒนาเว็บไซต์ด้วย WordPress ที่มีประสิทธิภาพ ใช้งานง่าย และปรับแต่งได้ตามความต้องการของคุณ
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
                พัฒนาเว็บไซต์ด้วย WordPress
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ที่ Buildweb PRO เราเชี่ยวชาญในการพัฒนาเว็บไซต์ด้วย WordPress ซึ่งเป็น CMS ที่ได้รับความนิยมสูงสุดในโลก ด้วยความยืดหยุ่นและฟีเจอร์ที่หลากหลาย
                </p>
                <p>
                  เราช่วยให้ธุรกิจของคุณมีเว็บไซต์ที่ใช้งานง่าย มีประสิทธิภาพ และสามารถปรับแต่งได้ตามความต้องการ พร้อมทั้งรองรับการเติบโตในอนาคต
                </p>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/web-design3.png"
                alt="WordPress Development"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* WordPress Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              บริการ WordPress ของเรา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ติดตั้งและตั้งค่า",
                  description: "ติดตั้ง WordPress และตั้งค่าพื้นฐานให้พร้อมใช้งาน รวมถึงการติดตั้งธีมและปลั๊กอินที่จำเป็น"
                },
                {
                  title: "ปรับแต่งธีม",
                  description: "ปรับแต่งธีมให้ตรงกับแบรนด์ของคุณ รวมถึงการเพิ่มฟีเจอร์พิเศษตามความต้องการ"
                },
                {
                  title: "พัฒนาปลั๊กอิน",
                  description: "พัฒนาปลั๊กอินเฉพาะสำหรับเว็บไซต์ของคุณ เพื่อเพิ่มฟังก์ชันการทำงานที่ต้องการ"
                },
                {
                  title: "เพิ่มประสิทธิภาพ",
                  description: "ปรับแต่งเว็บไซต์ให้โหลดเร็ว ปลอดภัย และรองรับการทำงานบนทุกอุปกรณ์"
                },
                {
                  title: "ดูแลรักษา",
                  description: "บริการดูแลรักษาเว็บไซต์ อัพเดทระบบ และแก้ไขปัญหาที่อาจเกิดขึ้น"
                },
                {
                  title: "ฝึกอบรม",
                  description: "อบรมวิธีการใช้งานและจัดการเว็บไซต์ WordPress ให้กับทีมงานของคุณ"
                }
              ].map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ขั้นตอนการพัฒนา
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1. วิเคราะห์ความต้องการ",
                  description: "ศึกษาความต้องการและเป้าหมายของธุรกิจ เพื่อกำหนดแนวทางการพัฒนา"
                },
                {
                  step: "2. ออกแบบระบบ",
                  description: "ออกแบบโครงสร้างเว็บไซต์และฟีเจอร์ที่จำเป็น"
                },
                {
                  step: "3. พัฒนาและปรับแต่ง",
                  description: "ติดตั้ง WordPress และปรับแต่งตามที่ออกแบบไว้"
                },
                {
                  step: "4. ทดสอบระบบ",
                  description: "ทดสอบการทำงานของทุกฟีเจอร์และแก้ไขข้อบกพร่อง"
                },
                {
                  step: "5. มอบงาน",
                  description: "ส่งมอบเว็บไซต์พร้อมเอกสารและคำแนะนำการใช้งาน"
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

          {/* WordPress Features */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ฟีเจอร์ที่เราพัฒนา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "ระบบจัดการเนื้อหา",
                  technologies: ["ระบบจัดการบทความ", "ระบบจัดการสินค้า", "ระบบจัดการสมาชิก", "ระบบจัดการเมนู"]
                },
                {
                  category: "การตลาดออนไลน์",
                  technologies: ["ระบบ SEO", "ระบบโฆษณา", "ระบบติดตามผู้เข้าชม", "ระบบส่งอีเมล"]
                },
                {
                  category: "การชำระเงิน",
                  technologies: ["ระบบชำระเงินออนไลน์", "ระบบใบแจ้งหนี้", "ระบบรายงานการขาย", "ระบบจัดการสต็อก"]
                },
                {
                  category: "การติดต่อสื่อสาร",
                  technologies: ["ระบบแชท", "ระบบติดต่อเรา", "ระบบแจ้งเตือน", "ระบบส่งข่าวสาร"]
                },
                {
                  category: "ความปลอดภัย",
                  technologies: ["ระบบสำรองข้อมูล", "ระบบป้องกันการโจมตี", "ระบบจัดการสิทธิ์", "SSL Certificate"]
                },
                {
                  category: "การวิเคราะห์",
                  technologies: ["ระบบรายงาน", "ระบบสถิติ", "ระบบติดตามผล", "ระบบประเมินผล"]
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
              พร้อมที่จะสร้างเว็บไซต์ WordPress ของคุณ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ติดต่อเราวันนี้เพื่อพูดคุยว่าความเชี่ยวชาญในการพัฒนา WordPress ของเราจะช่วยให้ธุรกิจของคุณเติบโตได้อย่างไร
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
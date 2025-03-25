import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "บริการให้คำปรึกษาเว็บไซต์ | Buildweb PRO - ให้คำแนะนำและแนวทางแก้ปัญหาเว็บไซต์",
  description: "บริการให้คำปรึกษาเว็บไซต์ครบวงจร ให้คำแนะนำและแนวทางแก้ปัญหาสำหรับผู้ที่ต้องการทำเว็บไซต์ ก่อนการว่าจ้างจริง",
  keywords: "Web Consulting, Website Advice, Web Development Consultation, Website Planning, Digital Strategy, Web Solutions",
  openGraph: {
    title: "บริการให้คำปรึกษาเว็บไซต์ | Buildweb PRO",
    description: "บริการให้คำปรึกษาเว็บไซต์ครบวงจร ให้คำแนะนำและแนวทางแก้ปัญหาสำหรับผู้ที่ต้องการทำเว็บไซต์ ก่อนการว่าจ้างจริง",
    type: "website",
  },
};

export default function WebConsultingPage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            บริการให้คำปรึกษาเว็บไซต์
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            ให้คำแนะนำและแนวทางแก้ปัญหาสำหรับผู้ที่ต้องการทำเว็บไซต์ ก่อนการว่าจ้างจริง
          </p>
          <Button asChild size="lg">
            <Link href="/contact" className="font-sans">นัดหมายให้คำปรึกษา</Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                ให้คำปรึกษาและแนวทางแก้ปัญหาเว็บไซต์
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ที่ Buildweb PRO เราให้บริการให้คำปรึกษาเว็บไซต์ครบวงจร โดยทีมงานผู้เชี่ยวชาญที่มีประสบการณ์ยาวนาน
                </p>
                <p>
                  เราช่วยให้คุณเข้าใจความต้องการของธุรกิจ และหาโซลูชันที่เหมาะสมที่สุดสำหรับเว็บไซต์ของคุณ
                </p>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/web-design3.png"
                alt="Web Consulting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Consulting Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              บริการให้คำปรึกษา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "วิเคราะห์ความต้องการ",
                  description: "วิเคราะห์ความต้องการของธุรกิจและผู้ใช้งาน เพื่อกำหนดแนวทางการพัฒนาเว็บไซต์ที่เหมาะสม"
                },
                {
                  title: "วางแผนกลยุทธ์",
                  description: "วางแผนกลยุทธ์การพัฒนาเว็บไซต์ที่สอดคล้องกับเป้าหมายธุรกิจ"
                },
                {
                  title: "ให้คำแนะนำเทคโนโลยี",
                  description: "ให้คำแนะนำในการเลือกใช้เทคโนโลยีและเครื่องมือที่เหมาะสมกับโครงการ"
                },
                {
                  title: "ประมาณการงบประมาณ",
                  description: "ประมาณการงบประมาณและระยะเวลาที่จำเป็นสำหรับการพัฒนาเว็บไซต์"
                },
                {
                  title: "ประเมินความเสี่ยง",
                  description: "ประเมินความเสี่ยงและหาแนวทางป้องกันปัญหาที่อาจเกิดขึ้น"
                },
                {
                  title: "ให้คำปรึกษาต่อเนื่อง",
                  description: "ให้คำปรึกษาและติดตามผลการดำเนินงานอย่างต่อเนื่อง"
                }
              ].map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Consulting Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ขั้นตอนการให้คำปรึกษา
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1. รับฟังความต้องการ",
                  description: "รับฟังความต้องการและเป้าหมายของลูกค้า"
                },
                {
                  step: "2. วิเคราะห์ข้อมูล",
                  description: "วิเคราะห์ข้อมูลและสถานการณ์ปัจจุบันของธุรกิจ"
                },
                {
                  step: "3. กำหนดแนวทาง",
                  description: "กำหนดแนวทางและแผนการดำเนินงานที่เหมาะสม"
                },
                {
                  step: "4. เสนอแนะโซลูชัน",
                  description: "เสนอแนะโซลูชันและเทคโนโลยีที่เหมาะสม"
                },
                {
                  step: "5. ติดตามผล",
                  description: "ติดตามผลและปรับปรุงแผนงานตามความเหมาะสม"
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

          {/* Consulting Features */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ประเด็นที่เราให้คำปรึกษา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "การวางแผนเว็บไซต์",
                  technologies: ["การวิเคราะห์ความต้องการ", "การกำหนดโครงสร้าง", "การออกแบบ UX/UI", "การวางแผนเนื้อหา"]
                },
                {
                  category: "เทคโนโลยี",
                  technologies: ["การเลือก CMS", "การเลือก Hosting", "การเลือก Framework", "การเลือก Database"]
                },
                {
                  category: "การตลาดออนไลน์",
                  technologies: ["SEO Strategy", "Social Media", "Content Marketing", "Digital Marketing"]
                },
                {
                  category: "ความปลอดภัย",
                  technologies: ["Security Planning", "Data Protection", "SSL Implementation", "Backup Strategy"]
                },
                {
                  category: "การวัดผล",
                  technologies: ["Analytics Setup", "Performance Metrics", "Conversion Tracking", "ROI Analysis"]
                },
                {
                  category: "การบำรุงรักษา",
                  technologies: ["Maintenance Plan", "Update Strategy", "Support System", "Monitoring Plan"]
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
              พร้อมที่จะได้รับคำปรึกษา?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ติดต่อเราวันนี้เพื่อนัดหมายการให้คำปรึกษา และหาแนวทางที่ดีที่สุดสำหรับเว็บไซต์ของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">นัดหมายให้คำปรึกษา</Link>
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
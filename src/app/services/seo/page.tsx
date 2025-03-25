import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "บริการ SEO | Buildweb PRO - เพิ่มอันดับเว็บไซต์บน Google",
  description: "บริการ SEO ครบวงจร ตั้งแต่การวิเคราะห์คีย์เวิร์ด การปรับแต่งเว็บไซต์ และการสร้างเนื้อหาที่มีประสิทธิภาพ",
  keywords: "SEO, Search Engine Optimization, Google Ranking, Keyword Research, Content Marketing, Technical SEO",
  openGraph: {
    title: "บริการ SEO | Buildweb PRO",
    description: "บริการ SEO ครบวงจร ตั้งแต่การวิเคราะห์คีย์เวิร์ด การปรับแต่งเว็บไซต์ และการสร้างเนื้อหาที่มีประสิทธิภาพ",
    type: "website",
  },
};

export default function SEOPage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            บริการ SEO
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            เพิ่มอันดับเว็บไซต์ของคุณบน Google ด้วยบริการ SEO ครบวงจร ที่ช่วยให้ลูกค้าพบคุณได้ง่ายขึ้น
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
                เพิ่มอันดับเว็บไซต์บน Google
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ที่ Buildweb PRO เราเข้าใจความสำคัญของการมีอันดับที่ดีบน Google ทีมงานของเรามีประสบการณ์ในการทำ SEO ที่ช่วยให้เว็บไซต์ของคุณติดอันดับต้นๆ ของผลการค้นหา
                </p>
                <p>
                  เราใช้กลยุทธ์ SEO ที่ทันสมัยและเป็นมาตรฐานสากล เพื่อช่วยให้เว็บไซต์ของคุณมีโอกาสถูกค้นพบมากขึ้น และดึงดูดผู้เข้าชมที่มีศักยภาพจะกลายเป็นลูกค้า
                </p>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/web-design3.png"
                alt="SEO Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* SEO Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              บริการ SEO ของเรา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "วิเคราะห์คีย์เวิร์ด",
                  description: "ค้นหาและวิเคราะห์คีย์เวิร์ดที่มีศักยภาพสูง เพื่อกำหนดกลยุทธ์ SEO ที่มีประสิทธิภาพ"
                },
                {
                  title: "ปรับแต่งเว็บไซต์",
                  description: "ปรับปรุงโครงสร้างเว็บไซต์ ความเร็วในการโหลด และการแสดงผลบนมือถือให้เป็นมิตรกับ SEO"
                },
                {
                  title: "สร้างเนื้อหา",
                  description: "ผลิตเนื้อหาที่มีคุณภาพสูง ตรงตามความต้องการของผู้ค้นหา และเหมาะสมกับ SEO"
                },
                {
                  title: "วิเคราะห์คู่แข่ง",
                  description: "ศึกษากลยุทธ์ SEO ของคู่แข่ง เพื่อหาโอกาสและจุดแข็งในการแข่งขัน"
                },
                {
                  title: "ติดตามผล",
                  description: "ติดตามและวิเคราะห์ผลการทำ SEO เพื่อปรับปรุงกลยุทธ์ให้มีประสิทธิภาพมากขึ้น"
                },
                {
                  title: "สร้างลิงก์",
                  description: "สร้างลิงก์คุณภาพจากเว็บไซต์ที่น่าเชื่อถือ เพื่อเพิ่มความน่าเชื่อถือให้กับเว็บไซต์"
                }
              ].map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ขั้นตอนการทำ SEO
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1. วิเคราะห์สถานะ",
                  description: "ตรวจสอบสถานะปัจจุบันของเว็บไซต์ และระบุจุดที่ต้องปรับปรุง"
                },
                {
                  step: "2. วิจัยคีย์เวิร์ด",
                  description: "ค้นหาและวิเคราะห์คีย์เวิร์ดที่มีศักยภาพสูงสำหรับธุรกิจของคุณ"
                },
                {
                  step: "3. ปรับปรุงเว็บไซต์",
                  description: "ปรับแต่งโครงสร้างและเนื้อหาของเว็บไซต์ให้เป็นมิตรกับ SEO"
                },
                {
                  step: "4. สร้างเนื้อหา",
                  description: "ผลิตเนื้อหาที่มีคุณภาพสูงและเหมาะสมกับ SEO"
                },
                {
                  step: "5. ติดตามผล",
                  description: "ติดตามผลการทำ SEO และปรับปรุงกลยุทธ์อย่างต่อเนื่อง"
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

          {/* SEO Tools */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              เครื่องมือที่เราใช้
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "การวิเคราะห์เว็บไซต์",
                  technologies: ["Google Search Console", "Google Analytics", "Ahrefs", "SEMrush", "Moz"]
                },
                {
                  category: "การวิจัยคีย์เวิร์ด",
                  technologies: ["Google Keyword Planner", "Ahrefs Keywords Explorer", "SEMrush Keyword Manager"]
                },
                {
                  category: "การวิเคราะห์คู่แข่ง",
                  technologies: ["Ahrefs Site Explorer", "SEMrush Competitor Analysis", "SpyFu"]
                },
                {
                  category: "การตรวจสอบประสิทธิภาพ",
                  technologies: ["Google PageSpeed Insights", "GTmetrix", "Pingdom", "Mobile-Friendly Test"]
                },
                {
                  category: "การสร้างเนื้อหา",
                  technologies: ["Grammarly", "Hemingway Editor", "Yoast SEO", "Surfer SEO"]
                },
                {
                  category: "การติดตามผล",
                  technologies: ["Google Data Studio", "Google Analytics", "Ahrefs Rank Tracker"]
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
              พร้อมที่จะเพิ่มอันดับเว็บไซต์ของคุณ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ติดต่อเราวันนี้เพื่อพูดคุยว่าความเชี่ยวชาญในการทำ SEO ของเราจะช่วยให้เว็บไซต์ของคุณติดอันดับต้นๆ ของ Google ได้อย่างไร
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
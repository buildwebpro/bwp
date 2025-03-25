import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "บริการปรับแต่งความเร็วเว็บไซต์ | Buildweb PRO - เพิ่มประสิทธิภาพเว็บไซต์ WordPress",
  description: "บริการปรับแต่งความเร็วเว็บไซต์ WordPress ครบวงจร ตั้งแต่การออปติไมซ์ระบบ การย่อรูปภาพ และการติดตั้งระบบ Caching",
  keywords: "Website Optimization, WordPress Optimization, Speed Optimization, Image Optimization, Caching, Performance Tuning",
  openGraph: {
    title: "บริการปรับแต่งความเร็วเว็บไซต์ | Buildweb PRO",
    description: "บริการปรับแต่งความเร็วเว็บไซต์ WordPress ครบวงจร ตั้งแต่การออปติไมซ์ระบบ การย่อรูปภาพ และการติดตั้งระบบ Caching",
    type: "website",
  },
};

export default function WebsiteOptimizationPage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            บริการปรับแต่งความเร็วเว็บไซต์
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            เพิ่มประสิทธิภาพและความเร็วของเว็บไซต์ WordPress ของคุณ ด้วยบริการปรับแต่งระบบครบวงจร
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
                เพิ่มความเร็วเว็บไซต์ WordPress
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ที่ Buildweb PRO เราเชี่ยวชาญในการปรับแต่งความเร็วเว็บไซต์ WordPress ด้วยวิธีการที่หลากหลาย ตั้งแต่การออปติไมซ์ระบบ การย่อรูปภาพ และการติดตั้งระบบ Caching
                </p>
                <p>
                  เราช่วยให้เว็บไซต์ของคุณโหลดเร็วขึ้น มีประสิทธิภาพมากขึ้น และประสบการณ์การใช้งานที่ดีขึ้นสำหรับผู้เข้าชม
                </p>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/web-design3.png"
                alt="Website Optimization"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Optimization Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              บริการปรับแต่งความเร็ว
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ออปติไมซ์ระบบ",
                  description: "ปรับแต่งการตั้งค่าระบบ WordPress และฐานข้อมูลให้ทำงานได้อย่างมีประสิทธิภาพสูงสุด"
                },
                {
                  title: "ย่อรูปภาพ",
                  description: "ปรับแต่งและย่อรูปภาพให้มีขนาดเหมาะสม โดยยังคงคุณภาพที่ดี"
                },
                {
                  title: "ติดตั้ง Caching",
                  description: "ติดตั้งและตั้งค่าระบบ Caching เพื่อเพิ่มความเร็วในการโหลดหน้าเว็บ"
                },
                {
                  title: "ปรับแต่งโฮสติ้ง",
                  description: "ปรับแต่งการตั้งค่าโฮสติ้งและเลือกใช้เทคโนโลยีที่เหมาะสม"
                },
                {
                  title: "ลดขนาดไฟล์",
                  description: "ลดขนาดไฟล์ CSS, JavaScript และ HTML เพื่อเพิ่มความเร็วในการโหลด"
                },
                {
                  title: "ติดตามผล",
                  description: "ติดตามและวิเคราะห์ประสิทธิภาพของเว็บไซต์อย่างต่อเนื่อง"
                }
              ].map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Optimization Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ขั้นตอนการปรับแต่ง
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1. วิเคราะห์ระบบ",
                  description: "ตรวจสอบและวิเคราะห์ประสิทธิภาพปัจจุบันของเว็บไซต์"
                },
                {
                  step: "2. กำหนดแผน",
                  description: "วางแผนการปรับแต่งที่เหมาะสมกับเว็บไซต์ของคุณ"
                },
                {
                  step: "3. ปรับแต่งระบบ",
                  description: "ดำเนินการปรับแต่งระบบและติดตั้งเทคโนโลยีที่จำเป็น"
                },
                {
                  step: "4. ทดสอบประสิทธิภาพ",
                  description: "ทดสอบความเร็วและประสิทธิภาพหลังการปรับแต่ง"
                },
                {
                  step: "5. ติดตามผล",
                  description: "ติดตามและปรับปรุงประสิทธิภาพอย่างต่อเนื่อง"
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

          {/* Optimization Features */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              เทคโนโลยีที่เราใช้
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "ระบบ Caching",
                  technologies: ["WP Super Cache", "W3 Total Cache", "Redis", "Memcached", "Browser Cache"]
                },
                {
                  category: "การย่อรูปภาพ",
                  technologies: ["WebP Format", "Image Compression", "Lazy Loading", "CDN Integration"]
                },
                {
                  category: "การออปติไมซ์โค้ด",
                  technologies: ["Minify CSS/JS", "Gzip Compression", "Code Optimization", "Database Optimization"]
                },
                {
                  category: "การปรับแต่งโฮสติ้ง",
                  technologies: ["PHP Optimization", "MySQL Tuning", "Server Configuration", "CDN Setup"]
                },
                {
                  category: "การติดตามผล",
                  technologies: ["Google PageSpeed", "GTmetrix", "Pingdom", "WebPageTest"]
                },
                {
                  category: "ความปลอดภัย",
                  technologies: ["SSL Optimization", "Security Headers", "Firewall Rules", "DDoS Protection"]
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
              พร้อมที่จะเพิ่มความเร็วเว็บไซต์ของคุณ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ติดต่อเราวันนี้เพื่อพูดคุยว่าบริการปรับแต่งความเร็วเว็บไซต์ของเราจะช่วยให้เว็บไซต์ของคุณทำงานได้เร็วขึ้นอย่างไร
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
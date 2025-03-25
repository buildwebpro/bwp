import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "บริการพัฒนาเว็บไซต์ | Buildweb PRO - พัฒนาเว็บไซต์ด้วยเทคโนโลยีที่ทันสมัย",
  description: "บริการพัฒนาเว็บไซต์ครบวงจร ด้วยเทคโนโลยีที่ทันสมัย รองรับการทำงานที่ซับซ้อน และมีประสิทธิภาพสูง",
  keywords: "พัฒนาเว็บไซต์, เว็บแอปพลิเคชัน, Full Stack Development, API Development, Database Integration",
  openGraph: {
    title: "บริการพัฒนาเว็บไซต์ | Buildweb PRO",
    description: "บริการพัฒนาเว็บไซต์ครบวงจร ด้วยเทคโนโลยีที่ทันสมัย รองรับการทำงานที่ซับซ้อน",
    type: "website",
  },
};

export default function WebDevelopmentPage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            บริการพัฒนาเว็บไซต์
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            พัฒนาเว็บไซต์และแอปพลิเคชันด้วยเทคโนโลยีที่ทันสมัย รองรับการทำงานที่ซับซ้อน และมีประสิทธิภาพสูง
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
                พัฒนาโซลูชันที่ตอบโจทย์ธุรกิจ
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ที่ Buildweb PRO เราเข้าใจว่าการพัฒนาเว็บไซต์ไม่ใช่แค่การเขียนโค้ด แต่เป็นการสร้างโซลูชันที่ตอบโจทย์ความต้องการธุรกิจของคุณ ทีมนักพัฒนาของเรามีประสบการณ์ในการสร้างเว็บแอปพลิเคชันที่ซับซ้อน ระบบจัดการข้อมูล และแพลตฟอร์มที่รองรับการทำงานหลากหลายรูปแบบ
                </p>
                <p>
                  เราใช้เทคโนโลยีที่ทันสมัยและแนวทางการพัฒนาที่เป็นมาตรฐาน เพื่อสร้างเว็บไซต์ที่มีประสิทธิภาพ ปลอดภัย และสามารถขยายตัวได้ตามความต้องการธุรกิจที่เติบโตขึ้น
                </p>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/web-design3.png"
                alt="Web Development Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              เทคโนโลยีที่เราใช้
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "SASS/SCSS"]
                },
                {
                  category: "Backend",
                  technologies: ["Node.js", "PHP", "Python", "Ruby on Rails", "Java", ".NET", "Express.js", "Laravel", "Django", "Spring Boot"]
                },
                {
                  category: "Databases",
                  technologies: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis", "SQLite", "Microsoft SQL Server", "Oracle", "Supabase"]
                },
                {
                  category: "CMS",
                  technologies: ["WordPress", "Shopify", "Drupal", "Joomla", "Magento", "Contentful", "Strapi", "Sanity"]
                },
                {
                  category: "DevOps & Hosting",
                  technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Heroku", "Netlify", "Vercel", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"]
                },
                {
                  category: "Testing & Performance",
                  technologies: ["Jest", "Cypress", "Selenium", "Lighthouse", "WebPageTest", "Mocha", "Chai", "Performance Monitoring"]
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

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              บริการพัฒนาเว็บไซต์ของเรา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Frontend Development",
                  description: "สร้างส่วนติดต่อผู้ใช้ที่ตอบสนองและโต้ตอบได้ ให้ประสบการณ์การใช้งานที่ยอดเยี่ยมบนทุกอุปกรณ์และเบราว์เซอร์"
                },
                {
                  title: "Backend Development",
                  description: "พัฒนาส่วนหลังบ้านที่แข็งแรง เพื่อจัดการตรรกะธุรกิจ การประมวลผลข้อมูล และการเชื่อมต่อกับระบบภายนอก"
                },
                {
                  title: "Full-Stack Development",
                  description: "บริการพัฒนาแบบครบวงจรครอบคลุมทั้งส่วนหน้าและส่วนหลังของโปรเจกต์เว็บของคุณ"
                },
                {
                  title: "E-Commerce Development",
                  description: "สร้างร้านค้าออนไลน์พร้อมระบบชำระเงินที่ปลอดภัย การจัดการสินค้าคงคลัง และประสบการณ์การช้อปปิ้งที่ราบรื่น"
                },
                {
                  title: "CMS Implementation",
                  description: "ติดตั้งและปรับแต่งระบบจัดการเนื้อหาที่ให้คุณควบคุมเนื้อหาเว็บไซต์ได้อย่างเต็มที่"
                },
                {
                  title: "API Development & Integration",
                  description: "สร้าง API เฉพาะและเชื่อมต่อบริการจากภายนอก เพื่อเพิ่มฟังก์ชันการทำงานของเว็บแอปพลิเคชันของคุณ"
                },
                {
                  title: "Web Application Development",
                  description: "พัฒนาเว็บแอปพลิเคชันเฉพาะที่ช่วยอัตโนมัติกระบวนการ เพิ่มประสิทธิภาพ และแก้ไขความท้าทายทางธุรกิจ"
                },
                {
                  title: "Maintenance & Support",
                  description: "ให้บริการสนับสนุนทางเทคนิค การอัปเดต และการปรับปรุงอย่างต่อเนื่อง เพื่อให้เว็บไซต์ของคุณปลอดภัย ทันสมัย และทำงานได้อย่างเหมาะสม"
                }
              ].map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ขั้นตอนการพัฒนาเว็บไซต์ของเรา
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1. วิเคราะห์ความต้องการ",
                  description: "เราเริ่มต้นด้วยการทำความเข้าใจเป้าหมายธุรกิจ กลุ่มเป้าหมาย และความต้องการเฉพาะของคุณ เพื่อสร้างแผนงานที่ชัดเจนสำหรับโปรเจกต์"
                },
                {
                  step: "2. วางแผนและออกแบบสถาปัตยกรรม",
                  description: "เราพัฒนาแผนโปรเจกต์และสถาปัตยกรรมทางเทคนิคที่อธิบายโครงสร้าง ฟังก์ชันการทำงาน และเทคโนโลยีสำหรับโซลูชันเว็บของคุณ"
                },
                {
                  step: "3. พัฒนา",
                  description: "นักพัฒนาของเราเขียนโค้ดที่สะอาดและมีประสิทธิภาพตามแนวทางปฏิบัติที่ดีที่สุดในอุตสาหกรรมและมาตรฐานการเขียนโค้ด เพื่อให้แน่ใจว่าผลลัพธ์มีคุณภาพสูง"
                },
                {
                  step: "4. ทดสอบและตรวจสอบคุณภาพ",
                  description: "เราทำการทดสอบอย่างครอบคลุมบนอุปกรณ์และเบราว์เซอร์ต่างๆ เพื่อระบุและแก้ไขปัญหาก่อนเปิดตัว"
                },
                {
                  step: "5. ติดตั้งและสนับสนุน",
                  description: "เราจัดการกระบวนการติดตั้งและให้บริการบำรุงรักษาและสนับสนุนอย่างต่อเนื่อง เพื่อให้เว็บไซต์ของคุณทำงานได้อย่างเหมาะสม"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              พร้อมที่จะพัฒนาโปรเจกต์เว็บไซต์ของคุณ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ติดต่อเราวันนี้เพื่อพูดคุยว่าความเชี่ยวชาญในการพัฒนาเว็บไซต์ของเราจะช่วยคุณสร้างการมีอยู่บนโลกออนไลน์ที่ทรงพลังได้อย่างไร
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

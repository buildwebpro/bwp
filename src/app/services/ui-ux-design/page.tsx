import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "บริการออกแบบ UI/UX | Buildweb PRO - ออกแบบประสบการณ์ผู้ใช้ที่ยอดเยี่ยม",
  description: "บริการออกแบบ UI/UX ที่เน้นประสบการณ์ผู้ใช้ ใช้งานง่าย สวยงาม และมีประสิทธิภาพสูง",
  keywords: "UI Design, UX Design, User Interface, User Experience, Wireframe, Prototype, Design System",
  openGraph: {
    title: "บริการออกแบบ UI/UX | Buildweb PRO",
    description: "บริการออกแบบ UI/UX ที่เน้นประสบการณ์ผู้ใช้ ใช้งานง่าย สวยงาม และมีประสิทธิภาพสูง",
    type: "website",
  },
};

export default function UIUXDesignPage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            บริการออกแบบ UI/UX
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            สร้างประสบการณ์ผู้ใช้ที่ยอดเยี่ยม ด้วยการออกแบบที่สวยงาม ใช้งานง่าย และตอบโจทย์ความต้องการของผู้ใช้
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
                ออกแบบประสบการณ์ผู้ใช้ที่ยอดเยี่ยม
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ที่ Buildweb PRO เราเชื่อว่าการออกแบบ UI/UX ที่ดีไม่ใช่แค่ความสวยงาม แต่ต้องสร้างประสบการณ์ที่ผู้ใช้ต้องการและใช้งานได้อย่างมีประสิทธิภาพ ทีมนักออกแบบของเรามีประสบการณ์ในการสร้างประสบการณ์ผู้ใช้ที่โดดเด่นสำหรับแพลตฟอร์มหลากหลายรูปแบบ
                </p>
                <p>
                  เราใช้กระบวนการออกแบบที่เน้นผู้ใช้เป็นศูนย์กลาง ร่วมกับเทคโนโลยีที่ทันสมัย เพื่อสร้างโซลูชันที่ตอบโจทย์ความต้องการของผู้ใช้และธุรกิจของคุณ
                </p>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/web-design3.png"
                alt="UI/UX Design Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Design Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ขั้นตอนการออกแบบ UI/UX
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1. วิจัยและวิเคราะห์",
                  description: "ทำความเข้าใจผู้ใช้ เป้าหมายธุรกิจ และบริบทการใช้งาน เพื่อกำหนดแนวทางการออกแบบที่เหมาะสม"
                },
                {
                  step: "2. วางแผนและออกแบบ Wireframe",
                  description: "สร้างโครงร่างการออกแบบและ User Flow เพื่อกำหนดโครงสร้างและลำดับการทำงานของระบบ"
                },
                {
                  step: "3. ออกแบบ UI",
                  description: "ออกแบบส่วนติดต่อผู้ใช้ที่สวยงาม ใช้งานง่าย และสอดคล้องกับแบรนด์ของคุณ"
                },
                {
                  step: "4. สร้าง Prototype",
                  description: "สร้างต้นแบบที่ใช้งานได้เพื่อทดสอบการทำงานและประสบการณ์ผู้ใช้"
                },
                {
                  step: "5. ทดสอบและปรับปรุง",
                  description: "ทดสอบกับผู้ใช้จริง เก็บข้อมูล และปรับปรุงการออกแบบให้สมบูรณ์ยิ่งขึ้น"
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

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              บริการออกแบบ UI/UX ของเรา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "User Research",
                  description: "วิจัยและวิเคราะห์พฤติกรรมผู้ใช้ ความต้องการ และความคาดหวัง เพื่อสร้างการออกแบบที่ตอบโจทย์"
                },
                {
                  title: "Wireframing & Prototyping",
                  description: "สร้างโครงร่างการออกแบบและต้นแบบที่ใช้งานได้ เพื่อทดสอบและปรับปรุงก่อนการพัฒนา"
                },
                {
                  title: "UI Design",
                  description: "ออกแบบส่วนติดต่อผู้ใช้ที่สวยงาม ใช้งานง่าย และสอดคล้องกับแบรนด์ของคุณ"
                },
                {
                  title: "UX Design",
                  description: "ออกแบบประสบการณ์ผู้ใช้ที่ราบรื่น มีประสิทธิภาพ และสร้างความประทับใจที่ดี"
                },
                {
                  title: "Design System",
                  description: "สร้างระบบการออกแบบที่เป็นมาตรฐาน เพื่อความสม่ำเสมอและประสิทธิภาพในการพัฒนา"
                },
                {
                  title: "Usability Testing",
                  description: "ทดสอบการใช้งานกับผู้ใช้จริง เพื่อปรับปรุงและพัฒนาประสบการณ์ผู้ใช้ให้ดียิ่งขึ้น"
                },
                {
                  title: "Mobile App Design",
                  description: "ออกแบบแอปพลิเคชันมือถือที่ใช้งานง่าย สวยงาม และตอบโจทย์ความต้องการของผู้ใช้"
                },
                {
                  title: "Web Interface Design",
                  description: "ออกแบบส่วนติดต่อเว็บไซต์ที่ทันสมัย ใช้งานง่าย และรองรับการใช้งานบนทุกอุปกรณ์"
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

          {/* Design Tools */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              เครื่องมือที่เราใช้ในการออกแบบ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Design Tools",
                  technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Adobe Photoshop", "Adobe Illustrator"]
                },
                {
                  category: "Prototyping",
                  technologies: ["Figma", "InVision", "Axure RP", "ProtoPie", "Marvel", "Principle"]
                },
                {
                  category: "User Research",
                  technologies: ["Google Analytics", "Hotjar", "UserTesting", "Maze", "Optimal Workshop"]
                },
                {
                  category: "Design Systems",
                  technologies: ["Figma", "Storybook", "Zeroheight", "Fractal", "Lingo"]
                },
                {
                  category: "Collaboration",
                  technologies: ["Figma", "Miro", "Notion", "Slack", "Microsoft Teams"]
                },
                {
                  category: "Development Handoff",
                  technologies: ["Figma", "Zeplin", "Avocode", "Abstract", "InVision Inspect"]
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
              พร้อมที่จะสร้างประสบการณ์ผู้ใช้ที่ยอดเยี่ยม?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ติดต่อเราวันนี้เพื่อพูดคุยว่าความเชี่ยวชาญในการออกแบบ UI/UX ของเราจะช่วยคุณสร้างประสบการณ์ผู้ใช้ที่โดดเด่นได้อย่างไร
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
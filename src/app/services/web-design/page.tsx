import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "บริการออกแบบเว็บไซต์ | Buildweb PRO - ออกแบบเว็บไซต์มืออาชีพ",
  description: "บริการออกแบบเว็บไซต์ครบวงจร เน้นความสวยงามและใช้งานง่าย รองรับทุกอุปกรณ์ ด้วยเทคโนโลยีที่ทันสมัย",
  keywords: "ออกแบบเว็บไซต์, เว็บไซต์มืออาชีพ, Responsive Design, UI/UX Design, SEO",
  openGraph: {
    title: "บริการออกแบบเว็บไซต์ | Buildweb PRO",
    description: "บริการออกแบบเว็บไซต์ครบวงจร เน้นความสวยงามและใช้งานง่าย รองรับทุกอุปกรณ์",
    type: "website",
  },
};

export default function WebDesignPage() {
  return (
    <Providers>
      {/* Hero section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            บริการออกแบบเว็บไซต์
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            สร้างเว็บไซต์ที่สวยงามและใช้งานง่าย ด้วยการออกแบบที่ทันสมัยและรองรับทุกอุปกรณ์
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
            <div className="relative aspect-video">
              <Image
                src="/images/web-design1.jpg"
                alt="บริการออกแบบเว็บไซต์"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                สร้างประสบการณ์ผู้ใช้ที่โดดเด่น
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ที่ Buildweb PRO เราเชื่อว่าเว็บไซต์ของคุณไม่ใช่แค่โบรชัวร์ออนไลน์ แต่เป็นตัวแทนธุรกิจของคุณในโลกดิจิทัล และมักจะเป็นความประทับใจแรกที่ลูกค้าจะได้รับ บริการออกแบบเว็บไซต์ของเราเน้นการสร้างเว็บไซต์ที่สวยงาม ใช้งานง่าย และมีประสิทธิภาพสูง
                </p>
                <p>
                  เราใช้ศิลปะและฟังก์ชันการทำงานร่วมกันเพื่อออกแบบเว็บไซต์ที่ดึงดูดผู้เข้าชม สื่อสารแบรนด์ของคุณได้อย่างมีประสิทธิภาพ และนำไปสู่การแปลงผู้เข้าชมเป็นลูกค้า จากเว็บไซต์องค์กรไปจนถึงแพลตฟอร์มอีคอมเมิร์ซ ทีมนักออกแบบที่มีประสบการณ์ของเราจะสร้างโซลูชันที่เหมาะกับเป้าหมายธุรกิจของคุณ
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              แนวทางการออกแบบเว็บไซต์ของเรา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "ออกแบบเน้นผู้ใช้",
                  description: "เราเน้นการออกแบบที่คำนึงถึงผู้ใช้เป็นหลัก ปรับแต่งเลย์เอาท์และการนำทางเพื่อให้ประสบการณ์การใช้งานดีที่สุด"
                },
                {
                  title: "เน้นการใช้งานบนมือถือ",
                  description: "ด้วยการใช้งานบนมือถือที่เพิ่มขึ้นอย่างต่อเนื่อง การออกแบบของเรารองรับการทำงานที่สมบูรณ์บนทุกอุปกรณ์และขนาดหน้าจอ"
                },
                {
                  title: "สอดคล้องกับแบรนด์",
                  description: "เราใส่ใจในการผสมผสานสี ตัวอักษร และรูปภาพของแบรนด์คุณ เพื่อสร้างตัวตนออนไลน์ที่สอดคล้องและจดจำได้"
                },
                {
                  title: "จัดวางเนื้อหาอย่างมีกลยุทธ์",
                  description: "เราจัดวางเนื้อหาอย่างเป็นระบบเพื่อนำทางผู้เข้าชมไปสู่ข้อมูลสำคัญและการกระทำที่ต้องการ"
                },
                {
                  title: "เพิ่มประสิทธิภาพการแปลง",
                  description: "การออกแบบของเรามุ่งเน้นการแปลงผู้เข้าชมเป็นลูกค้า โดยใช้จิตวิทยาและสัญญาณทางภาพเพื่อกระตุ้นการกระทำที่ต้องการ"
                },
                {
                  title: "ยืดหยุ่นรองรับการเติบโต",
                  description: "เราสร้างเว็บไซต์โดยคำนึงถึงการเติบโต ทำให้สามารถปรับตัวได้ง่ายตามความต้องการธุรกิจที่เปลี่ยนแปลงไป"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ขั้นตอนการออกแบบเว็บไซต์ของเรา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "วิจัยและค้นพบ",
                  description: "เราวิเคราะห์ธุรกิจ อุตสาหกรรม คู่แข่ง และกลุ่มเป้าหมายของคุณ เพื่อรวบรวมข้อมูลที่ใช้ในการกำหนดกลยุทธ์การออกแบบ"
                },
                {
                  step: "สร้าง Wireframe และ Prototype",
                  description: "เราสร้าง wireframe และ prototype แบบโต้ตอบเพื่อแสดงโครงสร้างและฟังก์ชันการทำงานของเว็บไซต์"
                },
                {
                  step: "ออกแบบภาพ",
                  description: "นักออกแบบของเราพัฒนาองค์ประกอบภาพของเว็บไซต์ รวมถึงสี ตัวอักษร และรูปภาพ ให้สอดคล้องกับเอกลักษณ์แบรนด์"
                },
                {
                  step: "ทดสอบและปรับปรุง",
                  description: "เราทดสอบการออกแบบอย่างละเอียดบนทุกอุปกรณ์และเบราว์เซอร์ ปรับแต่งองค์ประกอบเพื่อให้แน่ใจว่าผู้ใช้ได้รับประสบการณ์ที่ดีที่สุด"
                }
              ].map((process, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{process.step}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies We Use */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              เครื่องมือและเทคโนโลยีที่เราใช้
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Figma",
                "Adobe XD",
                "Sketch",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "InVision",
                "Webflow",
                "HTML5/CSS3"
              ].map((tool, index) => (
                <div key={index} className="px-4 py-2 border rounded-full bg-background">
                  {tool}
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
              พร้อมที่จะสร้างเว็บไซต์ที่น่าประทับใจ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              มาแลกเปลี่ยนความคิดเห็นกันว่าเราจะช่วยคุณออกแบบเว็บไซต์ที่ไม่เพียงแต่สวยงาม แต่ยังช่วยขับเคลื่อนผลลัพธ์สำหรับธุรกิจของคุณ
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

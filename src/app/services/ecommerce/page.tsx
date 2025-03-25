import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "บริการพัฒนา E-commerce | Buildweb PRO - สร้างร้านค้าออนไลน์ที่ขับเคลื่อนธุรกิจ",
  description: "บริการพัฒนา E-commerce ครบวงจร ตั้งแต่การออกแบบ UI/UX การพัฒนาเว็บไซต์ และระบบจัดการร้านค้าออนไลน์",
  keywords: "E-commerce, Online Store, Shopping Cart, Payment Gateway, Product Management, Order Management, Inventory System",
  openGraph: {
    title: "บริการพัฒนา E-commerce | Buildweb PRO",
    description: "บริการพัฒนา E-commerce ครบวงจร ตั้งแต่การออกแบบ UI/UX การพัฒนาเว็บไซต์ และระบบจัดการร้านค้าออนไลน์",
    type: "website",
  },
};

export default function EcommercePage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            บริการพัฒนา E-commerce
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            สร้างร้านค้าออนไลน์ที่ขับเคลื่อนธุรกิจของคุณ ด้วยระบบที่ทันสมัย ใช้งานง่าย และรองรับการขยายตัวในอนาคต
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
                พัฒนาร้านค้าออนไลน์ที่ขับเคลื่อนธุรกิจ
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ที่ Buildweb PRO เราเข้าใจความสำคัญของการมีร้านค้าออนไลน์ในยุคดิจิทัล ทีมงานของเรามีประสบการณ์ในการพัฒนา E-commerce ที่ตอบโจทย์ความต้องการของธุรกิจหลากหลายรูปแบบ
                </p>
                <p>
                  เราใช้เทคโนโลยีที่ทันสมัยและแนวทางการพัฒนาที่เป็นมาตรฐาน เพื่อสร้างร้านค้าออนไลน์ที่มีประสิทธิภาพ ปลอดภัย และสามารถขยายตัวได้ตามความต้องการธุรกิจที่เติบโตขึ้น
                </p>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/web-design3.png"
                alt="E-commerce Development Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ฟีเจอร์หลักของร้านค้าออนไลน์
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ระบบจัดการสินค้า",
                  description: "จัดการสินค้า สต็อก และหมวดหมู่สินค้าได้อย่างมีประสิทธิภาพ พร้อมระบบค้นหาและกรองสินค้าที่ใช้งานง่าย"
                },
                {
                  title: "ระบบตะกร้าสินค้า",
                  description: "ระบบตะกร้าสินค้าที่ใช้งานง่าย รองรับการแก้ไขจำนวน และคำนวณราคาอัตโนมัติ"
                },
                {
                  title: "ระบบชำระเงิน",
                  description: "รองรับช่องทางการชำระเงินหลากหลาย ทั้งบัตรเครดิต บัญชีธนาคาร และระบบชำระเงินออนไลน์"
                },
                {
                  title: "ระบบจัดการคำสั่งซื้อ",
                  description: "ติดตามสถานะคำสั่งซื้อ จัดการการจัดส่ง และสร้างรายงานการขายได้อย่างครบถ้วน"
                },
                {
                  title: "ระบบสมาชิก",
                  description: "ระบบสมาชิกที่ปลอดภัย พร้อมระบบสะสมแต้มและโปรโมชั่นต่างๆ"
                },
                {
                  title: "ระบบรายงาน",
                  description: "วิเคราะห์ข้อมูลการขาย สินค้าขายดี และพฤติกรรมผู้ซื้อ เพื่อพัฒนาธุรกิจ"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              ขั้นตอนการพัฒนา E-commerce
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1. วิเคราะห์ความต้องการ",
                  description: "ทำความเข้าใจความต้องการธุรกิจ กลุ่มเป้าหมาย และฟีเจอร์ที่จำเป็น"
                },
                {
                  step: "2. ออกแบบระบบ",
                  description: "ออกแบบโครงสร้างฐานข้อมูล ระบบจัดการสินค้า และส่วนติดต่อผู้ใช้"
                },
                {
                  step: "3. พัฒนาระบบ",
                  description: "พัฒนาเว็บไซต์และระบบจัดการร้านค้าออนไลน์ตามที่ออกแบบไว้"
                },
                {
                  step: "4. ทดสอบระบบ",
                  description: "ทดสอบการทำงานของระบบทั้งหมด รวมถึงการชำระเงินและการจัดการสินค้า"
                },
                {
                  step: "5. ติดตั้งและส่งมอบ",
                  description: "ติดตั้งระบบบนเซิร์ฟเวอร์ พร้อมให้คำแนะนำการใช้งานและการบำรุงรักษา"
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

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              เทคโนโลยีที่เราใช้
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Material-UI"]
                },
                {
                  category: "Backend",
                  technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "GraphQL"]
                },
                {
                  category: "Payment Gateway",
                  technologies: ["Stripe", "PayPal", "2C2P", "PromptPay", "Line Pay", "Shopee Pay"]
                },
                {
                  category: "E-commerce Platform",
                  technologies: ["Shopify", "WooCommerce", "Magento", "OpenCart", "PrestaShop"]
                },
                {
                  category: "Cloud & Hosting",
                  technologies: ["AWS", "Google Cloud", "DigitalOcean", "Vercel", "Netlify"]
                },
                {
                  category: "Analytics & Marketing",
                  technologies: ["Google Analytics", "Facebook Pixel", "SEO Tools", "Email Marketing"]
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
              พร้อมที่จะสร้างร้านค้าออนไลน์ของคุณ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ติดต่อเราวันนี้เพื่อพูดคุยว่าความเชี่ยวชาญในการพัฒนา E-commerce ของเราจะช่วยคุณสร้างร้านค้าออนไลน์ที่ขับเคลื่อนธุรกิจได้อย่างไร
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
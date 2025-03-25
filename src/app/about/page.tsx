import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | Buildweb PRO - บริการพัฒนาเว็บไซต์ครบวงจร",
  description: "เรียนรู้เกี่ยวกับ Buildweb PRO ทีมงาน ค่านิยม และแนวทางการพัฒนาเว็บไซต์ของเรา เราสร้างประสบการณ์ดิจิทัลที่โดดเด่น",
  keywords: "About Us, Web Development Company, Digital Solutions, Web Design Agency, Thailand Web Development",
  openGraph: {
    title: "เกี่ยวกับเรา | Buildweb PRO",
    description: "เรียนรู้เกี่ยวกับ Buildweb PRO ทีมงาน ค่านิยม และแนวทางการพัฒนาเว็บไซต์ของเรา",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <Providers>
      {/* Hero section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            เราคือทีมงานที่มีความหลงใหลในการออกแบบและพัฒนาเว็บไซต์ สร้างประสบการณ์ดิจิทัลที่โดดเด่น
          </p>
        </div>
      </section>

      {/* Our story section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                ประวัติของเรา
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ก่อตั้งขึ้นในปี 2015 Buildweb PRO เริ่มต้นด้วยพันธกิจง่ายๆ: ช่วยให้ธุรกิจบรรลุเป้าหมายผ่านการออกแบบและพัฒนาเว็บไซต์ที่โดดเด่น 
                  จากทีมเล็กๆ ของนักออกแบบและนักพัฒนาที่มีความหลงใหล ได้เติบโตเป็นบริษัทให้บริการดิจิทัลแบบครบวงจร
                </p>
                <p>
                  ตลอดหลายปีที่ผ่านมา เราได้รับเกียรติที่ได้ทำงานกับลูกค้าในอุตสาหกรรมต่างๆ ตั้งแต่สตาร์ทอัพไปจนถึงองค์กรขนาดใหญ่ 
                  ทุกโปรเจคได้เพิ่มพูนความเชี่ยวชาญและเสริมสร้างความมุ่งมั่นของเราในการนำเสนอโซลูชันดิจิทัลคุณภาพสูง
                </p>
                <p>
                  วันนี้ เรายังคงผลักดันขีดจำกัดของความเป็นไปได้บนเว็บไซต์ โดยผสมผสานความคิดสร้างสรรค์เข้ากับความเป็นเลิศทางเทคนิค 
                  เพื่อสร้างเว็บไซต์และแอปพลิเคชันที่โดดเด่นในโลกดิจิทัลที่คับคั่ง
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Company image */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                <Image
                  src="/images/web-design2.jpg"
                  alt="ทีมงาน Buildweb PRO กำลังทำงาน"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats overlay */}
              <div className="grid grid-cols-2 gap-4 absolute -bottom-6 left-6 right-6">
                <div className="bg-background shadow-lg rounded-lg p-4 border">
                  <p className="text-3xl font-bold text-primary">200+</p>
                  <p className="text-sm text-muted-foreground">โปรเจคที่เสร็จสิ้น</p>
                </div>
                <div className="bg-background shadow-lg rounded-lg p-4 border">
                  <p className="text-3xl font-bold text-primary">8+</p>
                  <p className="text-sm text-muted-foreground">ปีแห่งประสบการณ์</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our values section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              ค่านิยมของเรา
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              หลักการหลักเหล่านี้ชี้นำการทำงานและความสัมพันธ์ของเรากับลูกค้าและทีมงาน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "ความเป็นเลิศ",
                description: "เราแสวงหาความเป็นเลิศในทุกด้านของงานของเรา ตั้งแต่การออกแบบและการพัฒนาไปจนถึงการสื่อสารและการสนับสนุนลูกค้า"
              },
              {
                title: "นวัตกรรม",
                description: "เราเปิดรับเทคโนโลยีและแนวทางใหม่ๆ เพื่อนำเสนอโซลูชันล้ำสมัยที่ช่วยให้ลูกค้าของเราอยู่เหนือคู่แข่ง"
              },
              {
                title: "การทำงานร่วมกัน",
                description: "เราเชื่อว่าผลลัพธ์ที่ดีที่สุดมาจากการทำงานร่วมกันอย่างใกล้ชิดระหว่างทีมของเราและลูกค้าตลอดวงจรชีวิตของโปรเจค"
              },
              {
                title: "ความซื่อสัตย์",
                description: "เรายึดมั่นในมาตรฐานสูงสุดของความซื่อสัตย์ ความโปร่งใส และพฤติกรรมทางจริยธรรมในการดำเนินธุรกิจทั้งหมดของเรา"
              }
            ].map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              กระบวนการทำงานของเรา
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              แนวทางที่พิสูจน์แล้วของเรารับประกันว่าเราจะนำเสนอผลลัพธ์ที่โดดเด่นสำหรับทุกโปรเจค
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                step: "01",
                title: "ค้นพบ",
                description: "เราเริ่มต้นด้วยการทำความเข้าใจธุรกิจ เป้าหมาย และกลุ่มเป้าหมายของคุณ เพื่อให้แน่ใจว่าโซลูชันของเราสอดคล้องกับความต้องการของคุณ"
              },
              {
                step: "02",
                title: "วางแผน",
                description: "เราสร้างแผนโปรเจคโดยละเอียดที่กำหนดขอบเขต ระยะเวลา และผลลัพธ์สำหรับโปรเจคของคุณ"
              },
              {
                step: "03",
                title: "ออกแบบ",
                description: "นักออกแบบของเราสร้างอินเตอร์เฟซที่สวยงาม ใช้งานง่าย ซึ่งสะท้อนแบรนด์ของคุณและดึงดูดผู้ชม"
              },
              {
                step: "04",
                title: "พัฒนา",
                description: "นักพัฒนาของเรานำการออกแบบมาสู่ชีวิต สร้างเว็บไซต์และแอปพลิเคชันที่แข็งแกร่ง ขยายขนาดได้ และมีประสิทธิภาพสูง"
              },
              {
                step: "05",
                title: "ทดสอบ",
                description: "เราทดสอบทุกแง่มุมของโปรเจคของคุณอย่างละเอียด เพื่อให้แน่ใจว่าทำงานได้อย่างสมบูรณ์บนทุกอุปกรณ์และเบราว์เซอร์"
              },
              {
                step: "06",
                title: "เปิดตัว",
                description: "เราจัดการกระบวนการติดตั้ง รับประกันการเปิดตัวที่ราบรื่น และให้การฝึกอบรมหรือการสนับสนุนที่จำเป็น"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-4xl font-bold text-primary/30">{step.step}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              พร้อมที่จะทำงานกับเรา?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              มาแลกเปลี่ยนความคิดเห็นกันว่าคุณต้องการให้เราช่วยนำวิสัยทัศน์ดิจิทัลของคุณมาสู่ชีวิตอย่างไร ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">ติดต่อเรา</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">ดูบริการของเรา</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Providers>
  );
}

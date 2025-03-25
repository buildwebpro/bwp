import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Globe, ShoppingCart, Building2, Briefcase, Wrench, Heart, Palette, Database, Truck, Store, Home } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ผลงานของเรา | Buildweb PRO",
  description: "ดูผลงานการออกแบบและพัฒนาเว็บไซต์ของเรา ครอบคลุมทุกอุตสาหกรรม",
};

const projects = [
  // E-commerce
  {
    title: "Matchazuki",
    description: "ร้านค้าออนไลน์สินค้าชาญี่ปุ่นและอุปกรณ์",
    category: "ecommerce",
    image: "/projects/matchazuki.jpg",
    url: "https://matchazuki.com/",
    icon: ShoppingCart,
  },
  {
    title: "Hispeed Motor",
    description: "ร้านค้าออนไลน์อะไหล่มอเตอร์ไซค์",
    category: "ecommerce",
    image: "/projects/hispeed.jpg",
    url: "https://shop.hispeedmotor.com",
    icon: ShoppingCart,
  },
  {
    title: "The VisionOptic",
    description: "ร้านค้าออนไลน์แว่นตา กรอบและเลนส์",
    category: "ecommerce",
    image: "/projects/visionoptic.jpg",
    url: "https://shop.thevisionoptic.com",
    icon: ShoppingCart,
  },
  {
    title: "108Home Suppl",
    description: "ร้านค้าออนไลน์สินค้าวัสดุก่อสร้าง",
    category: "ecommerce",
    image: "/projects/108home.jpg",
    url: "https://xn--108-lll4fasl0a9f9ap4r.com/",
    icon: ShoppingCart,
  },
  {
    title: "Anitech Online",
    description: "ร้านค้าออนไลน์สินค้าเทคโนโลยี ไอที",
    category: "ecommerce",
    image: "/projects/anitech.jpg",
    url: "https://anitechonline.com/",
    icon: ShoppingCart,
  },
  {
    title: "Glossyy Crazy",
    description: "ร้านค้าออนไลน์ ผลิตภัณฑ์บำรุงรักษารถยนต์",
    category: "ecommerce",
    image: "/projects/glossy.jpg",
    url: "https://glossycrazy.com/",
    icon: ShoppingCart,
  },
  {
    title: "Mali Good",
    description: "ร้านค้าออนไลน์ผ้าไหม ผลิตภัณฑ์สำหรับคุณภาพสูง",
    category: "ecommerce",
    image: "/projects/maligood.jpg",
    url: "https://maligood.co/",
    icon: ShoppingCart,
  },

  // Business
  {
    title: "Green8 Japan",
    description: "เว็บไซต์บริษัทญี่ปุ่น",
    category: "business",
    image: "/projects/green8.jpg",
    url: "https://green8.co.jp/home/",
    icon: Building2,
  },
  {
    title: "IQ Lab Image Quality Lab",
    description: "เว็บไซต์ บริษัท IQ Lab Image Quality Lab",
    category: "business",
    image: "/projects/iqlab.jpg",
    url: "https://iqlab.co.th/",
    icon: Building2,
  },
  {
    title: "BL Forklift",
    description: "เว็บไซต์บริษัทรถยกให้เช่า",
    category: "business",
    image: "/projects/blforklift.jpg",
    url: "https://blforklift.com/",
    icon: Building2,
  },
  {
    title: "Young8",
    description: "เว็บไซต์ ผลิตภัณฑ์บำรุงผิวหน้า",
    category: "business",
    image: "/projects/young8.jpg",
    url: "https://www.y8-thai.com/",
    icon: Building2,
  },
  {
    title: "Arneja Estates",
    description: "เว็บไซต์อสังหาริมทรัพย์",
    category: "business",
    image: "/projects/arneja.jpg",
    url: "https://arnejaestates.com/",
    icon: Building2,
  },
  {
    title: "Jet8Cargo Thailand",
    description: "เว็บไซต์บริษัทขนส่ง",
    category: "business",
    image: "/projects/jet8cargo.jpg",
    url: "https://jet8cargoth.com/",
    icon: Building2,
  },

  // Healthcare
  {
    title: "Saldraartua Clinic",
    description: "เว็บไซต์คลินิกกายภาพบำบัด",
    category: "healthcare",
    image: "/projects/saldraartua.jpg",
    url: "https://saldraartuaclinic.com/",
    icon: Heart,
  },
  {
    title: "Lagrace Clinic",
    description: "เว็บไซต์คลินิกความงาม",
    category: "healthcare",
    image: "/projects/lagrace.jpg",
    url: "https://lagraceclinic.com/",
    icon: Heart,
  },
  {
    title: "Stan Balance",
    description: "เว็บไซต์รองเท้าสุขภาพ",
    category: "healthcare",
    image: "/projects/stanbalance.jpg",
    url: "https://standbalance.com/",
    icon: Heart,
  },

  // Logistics
  {
    title: "SangCargo",
    description: "เว็บไซต์บริษัทขนส่ง",
    category: "logistics",
    image: "/projects/sangcargo.jpg",
    url: "https://www.sangcargo.com/",
    icon: Truck,
  },

  // Art & Design
  {
    title: "Kraft Art",
    description: "เว็บไซต์ศิลปะและดีไซน์",
    category: "art",
    image: "/projects/kraftart.jpg",
    url: "https://kraft.art/",
    icon: Palette,
  },
  {
    title: "The Mixx",
    description: "เว็บไซต์อสังหาริมทรัพย์",
    category: "business",
    image: "/projects/themixx.jpg",
    url: "https://themixx.in.th/",
    icon: Palette,
  },

  // Management Systems
  {
    title: "Patient Management",
    description: "ระบบจัดการผู้ป่วยคนไข้กายภาพบำบัด",
    category: "management",
    image: "/projects/patient.jpg",
    url: "https://app.saldraartuaclinic.com/login",
    icon: Database,
  },
  {
    title: "Order Management",
    description: "ระบบจัดการคำสั่งซื้อ",
    category: "management",
    image: "/projects/order.jpg",
    url: "https://memom.buildweb.pro/login",
    icon: Database,
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">ผลงานของเรา</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ดูผลงานการออกแบบและพัฒนาเว็บไซต์ของเรา ครอบคลุมทุกอุตสาหกรรม
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            ทั้งหมด
          </TabsTrigger>
          <TabsTrigger value="ecommerce" className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            E-commerce
          </TabsTrigger>
          <TabsTrigger value="business" className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            ธุรกิจ
          </TabsTrigger>
          <TabsTrigger value="healthcare" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            สุขภาพ
          </TabsTrigger>
          <TabsTrigger value="logistics" className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            ขนส่ง
          </TabsTrigger>
          <TabsTrigger value="art" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            ศิลปะ
          </TabsTrigger>
          <TabsTrigger value="management" className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            ระบบจัดการ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <project.icon className="w-5 h-5 text-primary" />
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      ดูเว็บไซต์ <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {["ecommerce", "business", "healthcare", "logistics", "art", "management"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <Card key={project.title} className="group hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <project.icon className="w-5 h-5 text-primary" />
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          ดูเว็บไซต์ <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

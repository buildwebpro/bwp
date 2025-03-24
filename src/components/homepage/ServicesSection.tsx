import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Palette, Code, Layout, ShoppingCart, LineChart, Globe } from "lucide-react";

const services = [
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Web Design",
    description: "Creative and responsive designs that capture your brand's essence and engage your audience across all devices.",
    link: "/services"
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Robust, scalable websites and web applications built with the latest technologies and best coding practices.",
    link: "/services"
  },
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "User-centered design approaches that create intuitive, accessible, and delightful digital experiences.",
    link: "/services"
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "E-Commerce Solutions",
    description: "Custom online store development with secure payment processing and seamless shopping experiences.",
    link: "/services"
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "SEO & Analytics",
    description: "Strategic optimization and data-driven insights to improve your website's visibility and performance.",
    link: "/services"
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "CMS Integration",
    description: "User-friendly content management systems that give you full control over your website content.",
    link: "/services"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sans">
            บริการของเรา
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl font-sans">
             พัฒนาเว็บไซต์คุณภาพ ด้วยดีไซน์ทันสมัยและฟังก์ชันครบครัน เพื่อขับเคลื่อนธุรกิจของคุณให้เติบโตและประสบความสำเร็จในโลกดิจิทัล
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border border-border h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
              <CardHeader className="flex items-start gap-4 pb-2">
                <div className="p-2 rounded-md bg-primary/10 inline-flex">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all">
                  <Link href={service.link}>
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

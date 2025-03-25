import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Palette, Code, Layout, ShoppingCart, LineChart, Globe, BarChart, Smartphone, Layers, Database, Zap, Clock } from "lucide-react";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Services | Buildweb PRO - Web Design & Development",
  description: "Comprehensive web design and development services including responsive website design, UI/UX design, e-commerce solutions, and more.",
};

const services = [
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Web Design",
    description: "Creative and responsive designs that capture your brand's essence and engage your audience across all devices.",
    features: [
      "Custom website design",
      "Responsive layouts",
      "Brand integration",
      "Visual storytelling",
      "Interactive elements"
    ],
    link: "/services/web-design"
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Robust, scalable websites and web applications built with the latest technologies and best coding practices.",
    features: [
      "Frontend development",
      "Backend development",
      "API integration",
      "Database design",
      "Performance optimization"
    ],
    link: "/services/web-development"
  },
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "User-centered design approaches that create intuitive, accessible, and delightful digital experiences.",
    features: [
      "User research",
      "Information architecture",
      "Wireframing & prototyping",
      "Usability testing",
      "Interface design"
    ],
    link: "/services/ui-ux-design"
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "E-Commerce Solutions",
    description: "Custom online store development with secure payment processing and seamless shopping experiences.",
    features: [
      "Custom shop development",
      "Payment gateway integration",
      "Inventory management",
      "Mobile shopping experience",
      "Checkout optimization"
    ],
    link: "/services/ecommerce"
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "SEO & Analytics",
    description: "Strategic optimization and data-driven insights to improve your website's visibility and performance.",
    features: [
      "SEO audit & strategy",
      "On-page optimization",
      "Technical SEO",
      "Analytics setup",
      "Performance monitoring"
    ],
    link: "/services/seo"
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "CMS Integration",
    description: "User-friendly content management systems that give you full control over your website content.",
    features: [
      "WordPress development",
      "Custom CMS solutions",
      "Content migration",
      "User training",
      "Ongoing support"
    ],
    link: "/services/cms-integration"
  },
  
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Website Maintenance",
    description: "Regular updates, security checks, and technical support to keep your website secure and up-to-date.",
    features: [
      "Security monitoring",
      "Performance tuning",
      "Content updates",
      "Technical support",
      "Backup management"
    ],
    link: "/services/website-maintenance"
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Website Optimization",
    description: "Technical improvements to enhance website speed, performance, and overall user experience.",
    features: [
      "Speed optimization",
      "Mobile optimization",
      "Core Web Vitals",
      "Accessibility improvements",
      "Conversion optimization"
    ],
    link: "/services/website-optimization"
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Web Consulting",
    description: "Expert guidance on web strategy, technology choices, and digital transformation initiatives.",
    features: [
      "Technology assessment",
      "Digital strategy",
      "Platform selection",
      "Growth planning",
      "Competitive analysis"
    ],
    link: "/services/web-consulting"
  }
];

export default function ServicesPage() {
  return (
    <Providers>
      {/* Hero section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
             ครบทุกโซลูชันออกแบบและพัฒนาเว็บไซต์ครบวงจร ตอบโจทย์ทุกความต้องการทางธุรกิจของคุณ
          </p>
          <Button asChild size="lg">
            <Link href="/contact">ติดต่อเรา</Link>
          </Button>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-background border h-full transition-all hover:shadow-lg hover:border-primary/20">
                <CardHeader className="flex items-start gap-4 pb-2">
                  <div className="p-2 rounded-md bg-primary/10 inline-flex">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="mr-2 h-4 w-4 mt-0.5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.link}>
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today for a free consultation and quote. We're here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Providers>
  );
}

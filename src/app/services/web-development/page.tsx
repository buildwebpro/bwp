import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "Web Development Services | Buildweb PRO",
  description: "Professional web development services building robust, scalable, and high-performance websites and web applications.",
};

export default function WebDevelopmentPage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Web Development Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Robust, scalable websites and web applications built with the latest technologies and best coding practices.
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
                Building Digital Solutions That Perform
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At WebCraft Studio, we specialize in developing custom web solutions that not only look great but also function flawlessly. Our team of experienced developers combines technical expertise with creative problem-solving to build websites and applications that deliver exceptional user experiences.
                </p>
                <p>
                  Whether you need a simple corporate website, a complex e-commerce platform, or a custom web application, we have the skills and experience to bring your vision to life. We focus on creating clean, efficient code that ensures your website is fast, secure, and scalable.
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
              Technologies We Work With
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
              Our Web Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Frontend Development",
                  description: "Creating responsive, interactive user interfaces that provide exceptional user experiences across all devices and browsers."
                },
                {
                  title: "Backend Development",
                  description: "Building robust server-side applications that handle business logic, data processing, and integration with external systems."
                },
                {
                  title: "Full-Stack Development",
                  description: "End-to-end development services covering both frontend and backend aspects of your web project."
                },
                {
                  title: "E-Commerce Development",
                  description: "Building online stores with secure payment processing, inventory management, and seamless shopping experiences."
                },
                {
                  title: "CMS Implementation",
                  description: "Setting up and customizing content management systems that give you full control over your website content."
                },
                {
                  title: "API Development & Integration",
                  description: "Creating custom APIs and integrating third-party services to enhance the functionality of your web applications."
                },
                {
                  title: "Web Application Development",
                  description: "Building custom web applications that automate processes, improve efficiency, and solve specific business challenges."
                },
                {
                  title: "Maintenance & Support",
                  description: "Ongoing technical support, updates, and improvements to keep your website secure, up-to-date, and performing optimally."
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
              Our Development Process
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1. Requirements Analysis",
                  description: "We start by understanding your business goals, target audience, and specific requirements to create a clear roadmap for your project."
                },
                {
                  step: "2. Planning & Architecture",
                  description: "We develop a detailed project plan and technical architecture that outlines the structure, functionality, and technologies for your web solution."
                },
                {
                  step: "3. Development",
                  description: "Our developers write clean, efficient code following industry best practices and coding standards to ensure high-quality output."
                },
                {
                  step: "4. Testing & QA",
                  description: "We conduct thorough testing across different devices and browsers to identify and fix any issues before launch."
                },
                {
                  step: "5. Deployment & Support",
                  description: "We handle the deployment process and provide ongoing maintenance and support to ensure your website continues to perform optimally."
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
              Ready to Build Your Next Web Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss how our web development expertise can help you create a powerful online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
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

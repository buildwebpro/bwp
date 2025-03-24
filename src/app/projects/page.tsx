import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Providers } from "../providers";
import { Image } from "@/components/ui/custom-image";

export const metadata: Metadata = {
  title: "Projects | Buildweb PRO - Web Design & Development",
  description: "Explore our web design and development portfolio. View our latest websites, applications, and digital experiences.",
};

// Project category filter types
type Category = "all" | "web-design" | "web-development" | "ui-ux" | "ecommerce" | "branding";

// Projects data
const projects = [
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Platform",
    client: "FashionTrend",
    category: "ecommerce",
    tags: ["E-Commerce", "Web Development", "UI/UX Design"],
    image: "https://ext.same-assets.com/1999999999/9999999999.jpg", // Placeholder image
    description: "A fully responsive e-commerce platform with advanced filtering and search capabilities, built for a fashion retailer with integration to inventory management systems.",
    featured: true
  },
  {
    id: "financial-services",
    title: "Financial Services Website",
    client: "WealthWise Advisors",
    category: "web-design",
    tags: ["Web Design", "Corporate", "Fintech"],
    image: "https://ext.same-assets.com/1999999999/9999999998.jpg", // Placeholder image
    description: "Sleek, professional design with integrated calculators, client portals, and advisor scheduling for a financial services firm.",
    featured: true
  },
  {
    id: "restaurant-app",
    title: "Restaurant Ordering System",
    client: "Urban Bistro",
    category: "web-development",
    tags: ["Web Application", "UI/UX Design", "Mobile-First"],
    image: "https://ext.same-assets.com/1999999999/9999999997.jpg", // Placeholder image
    description: "Intuitive mobile-first ordering system with seamless payment processing and real-time order tracking for a high-end restaurant chain.",
    featured: true
  },
  {
    id: "healthcare-portal",
    title: "Healthcare Patient Portal",
    client: "MediCare Group",
    category: "web-development",
    tags: ["Web Application", "Healthcare", "Secure Portal"],
    image: "https://ext.same-assets.com/1999999999/9999999996.jpg", // Placeholder image
    description: "Secure patient portal with appointment scheduling, medical records access, and telemedicine integration for a healthcare provider.",
    featured: false
  },
  {
    id: "realestate-platform",
    title: "Real Estate Listing Platform",
    client: "Prime Properties",
    category: "web-design",
    tags: ["Web Design", "Property Listings", "Search Engine"],
    image: "https://ext.same-assets.com/1999999999/9999999995.jpg", // Placeholder image
    description: "Feature-rich property listing platform with advanced search filters, virtual tours, and agent profiles for a real estate company.",
    featured: false
  },
  {
    id: "fitness-app",
    title: "Fitness Tracking Application",
    client: "FitLife",
    category: "ui-ux",
    tags: ["UI/UX Design", "Wellness", "Dashboard"],
    image: "https://ext.same-assets.com/1999999999/9999999994.jpg", // Placeholder image
    description: "Comprehensive fitness tracking application with personalized workout plans, progress visualization, and social sharing capabilities.",
    featured: false
  },
  {
    id: "travel-blog",
    title: "Travel Blog & Booking Platform",
    client: "Wanderlust Explorers",
    category: "web-design",
    tags: ["Blog Design", "Content Management", "Booking Engine"],
    image: "https://ext.same-assets.com/1999999999/9999999993.jpg", // Placeholder image
    description: "Visually engaging travel blog with integrated booking functionality for destinations featured in the blog content.",
    featured: false
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    client: "MetricsMaster",
    category: "ui-ux",
    tags: ["Dashboard Design", "Data Visualization", "SaaS"],
    image: "https://ext.same-assets.com/1999999999/9999999992.jpg", // Placeholder image
    description: "Intuitive analytics dashboard for a SaaS platform with customizable widgets, real-time data, and detailed reporting features.",
    featured: false
  },
  {
    id: "nonprofit-redesign",
    title: "Nonprofit Organization Redesign",
    client: "Global Relief Initiative",
    category: "web-design",
    tags: ["Nonprofit", "Donation Platform", "Accessibility"],
    image: "https://ext.same-assets.com/1999999999/9999999991.jpg", // Placeholder image
    description: "Complete website redesign for a nonprofit organization with donation processing, volunteer management, and event scheduling.",
    featured: false
  }
];

export default function ProjectsPage() {
  return (
    <Providers>
      {/* Hero section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our portfolio of web design and development projects that showcase our expertise and creativity.
          </p>
        </div>
      </section>

      {/* Filter section */}
      <section className="py-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: "all", label: "All Projects" },
              { value: "web-design", label: "Web Design" },
              { value: "web-development", label: "Web Development" },
              { value: "ui-ux", label: "UI/UX Design" },
              { value: "ecommerce", label: "E-Commerce" },
              { value: "branding", label: "Branding" }
            ].map((category) => (
              <Button
                key={category.value}
                variant={category.value === "all" ? "default" : "outline"}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-10">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>

          <div className="grid grid-cols-1 gap-10">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                <div className="lg:col-span-2 h-[300px] bg-muted rounded-lg overflow-hidden relative">
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-600/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-medium text-white">Project Image</span>
                  </div>

                  {/* Image would be here in a real project */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> */}
                </div>

                <div className="lg:col-span-3">
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {project.client}
                      </span>
                      <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                    </div>

                    <p className="text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-block text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button asChild>
                      <Link href={`/projects/${project.id}`}>
                        View Case Study
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All projects grid */}
      <section className="py-10 pb-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8">All Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project) => (
              <Card key={project.id} className="overflow-hidden border hover:shadow-lg transition-all">
                <div className="h-56 bg-muted relative">
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-600/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-medium text-white">Project Image</span>
                  </div>

                  {/* Image would be here in a real project */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> */}
                </div>

                <div className="p-6">
                  <span className="text-sm font-medium text-muted-foreground">
                    {project.client}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="inline-block text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded-full">
                        +{project.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/projects/${project.id}`}>
                      View Project
                    </Link>
                  </Button>
                </div>
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
              Let's discuss how we can help you create a standout digital presence for your business.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Providers>
  );
}

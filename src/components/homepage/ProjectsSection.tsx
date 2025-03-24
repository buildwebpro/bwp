import { Image } from "@/components/ui/custom-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Modern E-Commerce Platform",
    category: "Web Development",
    image: "/images/web-design1.jpg",
    description: "A fully responsive e-commerce platform with advanced filtering and search capabilities.",
    link: "/projects/ecommerce-platform"
  },
  {
    id: 2,
    title: "Financial Services Website",
    category: "Web Design",
    image: "/images/web-design2.jpg",
    description: "Sleek, professional design with integrated calculators and advisor scheduling.",
    link: "/projects/financial-services"
  },
  {
    id: 3,
    title: "Restaurant Ordering System",
    category: "UI/UX Design",
    image: "/images/web-design4.jpg",
    description: "Intuitive ordering system with seamless payment processing and order tracking.",
    link: "/projects/restaurant-app"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Take a look at some of our recent work that showcases our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border transition-all hover:shadow-lg"
            >
              <div className="aspect-video w-full overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href={project.link}>
                    {project.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.link}>
                    View Project
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "About Us | Buildweb PRO - Web Design & Development",
  description: "Learn about Buildweb PRO, our team, values, and approach to web design and development. We create exceptional digital experiences.",
};

// Team member data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & Creative Director",
    bio: "With over 15 years of experience in web design and development, Alex founded Buildweb PRO with a passion for creating exceptional digital experiences that drive business growth.",
    avatar: "AJ",
    image: "/images/team1.jpg"
  },
  {
    name: "Sarah Chen",
    role: "Lead UI/UX Designer",
    bio: "Sarah brings her expertise in user experience and interface design to create intuitive, accessible, and visually stunning digital products that delight users.",
    avatar: "SC",
    image: "/images/team2.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Web Developer",
    bio: "Michael's technical expertise in full-stack development enables him to build robust, scalable, and high-performance websites and web applications.",
    avatar: "MR",
    image: "/images/team3.jpg"
  },
  {
    name: "Emily Taylor",
    role: "Project Manager",
    bio: "Emily ensures all projects are delivered on time and within budget while maintaining clear communication between the team and clients throughout the process.",
    avatar: "ET",
    image: "/images/team4.jpg"
  }
];

export default function AboutPage() {
  return (
    <Providers>
      {/* Hero section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate designers and developers creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Our story section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, Buildweb PRO began with a simple mission: to help businesses achieve their goals through exceptional web design and development. What started as a small team of passionate designers and developers has grown into a full-service digital agency.
                </p>
                <p>
                  Over the years, we've had the privilege of working with clients across various industries, from startups to established enterprises. Each project has added to our expertise and reinforced our commitment to delivering high-quality digital solutions.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible on the web, combining creativity with technical excellence to create websites and applications that stand out in a crowded digital landscape.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Company image */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                <Image
                  src="/images/web-design2.jpg"
                  alt="Buildweb PRO team at work"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats overlay */}
              <div className="grid grid-cols-2 gap-4 absolute -bottom-6 left-6 right-6">
                <div className="bg-background shadow-lg rounded-lg p-4 border">
                  <p className="text-3xl font-bold text-primary">200+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="bg-background shadow-lg rounded-lg p-4 border">
                  <p className="text-3xl font-bold text-primary">8+</p>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
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
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide our work and relationships with clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every aspect of our work, from design and development to client communication and support."
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve."
              },
              {
                title: "Collaboration",
                description: "We believe the best results come from close collaboration between our team and our clients throughout the project lifecycle."
              },
              {
                title: "Integrity",
                description: "We maintain the highest standards of honesty, transparency, and ethical behavior in all our business practices."
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

      {/* Team section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented individuals behind Buildweb PRO who bring creativity, expertise, and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven approach ensures we deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and target audience to ensure our solution aligns with your needs."
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed project plan that outlines the scope, timeline, and deliverables for your project."
              },
              {
                step: "03",
                title: "Design",
                description: "Our designers create visually stunning, user-friendly interfaces that reflect your brand and engage your audience."
              },
              {
                step: "04",
                title: "Development",
                description: "Our developers bring the designs to life, building robust, scalable, and high-performance websites and applications."
              },
              {
                step: "05",
                title: "Testing",
                description: "We thoroughly test every aspect of your project to ensure it works flawlessly across all devices and browsers."
              },
              {
                step: "06",
                title: "Launch",
                description: "We handle the deployment process, ensuring a smooth launch and providing any necessary training or support."
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help bring your digital vision to life. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Providers>
  );
}

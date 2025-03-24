import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "Web Design Services | Buildweb PRO",
  description: "Custom and responsive web design services that captivate audiences and enhance your brand's online presence.",
};

export default function WebDesignPage() {
  return (
    <Providers>
      <>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Web Design Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Creative and responsive designs that capture your brand's essence and engage your audience across all devices.
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
                  alt="Web Design Services"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Creating Exceptional User Experiences
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At WebCraft Studio, we believe your website is more than just an online brochure—it's the digital face of your business and often the first impression for potential customers. Our web design services focus on creating visually stunning, user-friendly websites that not only look great but also perform exceptionally.
                  </p>
                  <p>
                    We combine aesthetics with functionality to design websites that engage visitors, communicate your brand message effectively, and drive conversions. From corporate websites to e-commerce platforms, our team of experienced designers crafts tailored solutions that meet your specific business goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
                Our Web Design Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "User-Centered Design",
                    description: "We create websites with your users in mind, optimizing the layout and navigation to provide the best possible user experience."
                  },
                  {
                    title: "Mobile-First Approach",
                    description: "With mobile traffic continually increasing, our designs ensure flawless functionality across all devices and screen sizes."
                  },
                  {
                    title: "Brand Alignment",
                    description: "We carefully incorporate your brand's colors, typography, and imagery to create a consistent and recognizable online presence."
                  },
                  {
                    title: "Strategic Content Layout",
                    description: "We strategically arrange content to guide visitors toward key information and calls to action."
                  },
                  {
                    title: "Conversion Optimization",
                    description: "Our designs are created with conversion in mind, using psychological triggers and visual cues to encourage desired actions."
                  },
                  {
                    title: "Future-Proof Flexibility",
                    description: "We build websites with growth in mind, ensuring they can easily adapt to your evolving business needs."
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
                Our Web Design Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "Research & Discovery",
                    description: "We analyze your business, industry, competitors, and target audience to gather insights that inform our design strategy."
                  },
                  {
                    step: "Wireframing & Prototyping",
                    description: "We create wireframes and interactive prototypes to visualize the structure and functionality of your website."
                  },
                  {
                    step: "Visual Design",
                    description: "Our designers develop the visual elements of your website, including colors, typography, and imagery, aligning with your brand identity."
                  },
                  {
                    step: "Testing & Refinement",
                    description: "We thoroughly test the design across devices and browsers, refining elements to ensure an optimal user experience."
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
                Design Tools & Technologies We Use
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
                Ready to Create an Impressive Website?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help you design a website that not only looks great but also drives results for your business.
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
      </>
    </Providers>
  );
}

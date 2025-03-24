import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "Top Web Design Trends to Watch in 2025 | Buildweb PRO Blog",
  description: "Explore the cutting-edge design trends that are shaping the web in 2025, from 3D elements to micro-interactions and more.",
};

export default function BlogPostPage() {
  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="inline-block text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
                Web Design
              </span>
              <span className="text-sm text-muted-foreground">
                March 15, 2025 • 8 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Top Web Design Trends to Watch in 2025
            </h1>

            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/team2.jpg"
                    alt="Sarah Chen"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Sarah Chen</p>
                  <p className="text-xs text-muted-foreground">Lead UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] w-full relative rounded-lg overflow-hidden">
              <Image
                src="/images/web-design2.jpg"
                alt="Web Design Trends"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <p className="lead">
              As we move further into 2025, the web design landscape continues to evolve with innovative approaches and technologies that are reshaping how we experience the digital world. In this article, we'll explore the most significant web design trends that are defining the year and revolutionizing user experiences across the web.
            </p>

            <h2>1. Immersive 3D Elements</h2>
            <p>
              Three-dimensional design elements are becoming increasingly sophisticated and accessible. Thanks to advancements in browser capabilities and design tools, designers are incorporating realistic 3D objects, scenes, and interactions that add depth and engagement to websites. These elements are no longer just decorative but serve functional purposes in product showcases, educational content, and interactive storytelling.
            </p>
            <p>
              The key to successful 3D implementation is balance. The most effective designs use 3D elements purposefully without overwhelming the user or hindering performance. Subtle animations and transitions with 3D elements can create memorable experiences that distinguish brands in a crowded digital space.
            </p>

            <h2>2. Advanced Micro-interactions</h2>
            <p>
              Micro-interactions have evolved from simple hover effects to sophisticated response systems that provide immediate feedback, guide users through processes, and add personality to interfaces. These small animations and functional responses create a sense of direct manipulation that makes digital interfaces feel more intuitive and responsive.
            </p>
            <p>
              In 2025, we're seeing micro-interactions become more contextual and personalized, adapting to user behavior patterns and preferences. These subtle details significantly enhance usability while adding moments of delight throughout the user journey.
            </p>

            <h2>3. Dynamic Color Systems</h2>
            <p>
              Static color palettes are giving way to dynamic color systems that respond to various factors including user preferences, time of day, content context, and even environmental conditions detected via device sensors. These adaptive color schemes enhance accessibility, reduce eye strain, and create more personalized experiences.
            </p>
            <p>
              Gradients continue to evolve with more complex color transitions and mesh gradients that mimic natural color blending. The strategic use of color is becoming more sophisticated, with designs leveraging color psychology to influence user behavior and emotional responses.
            </p>

            <h2>4. Horizontal Scrolling Experiences</h2>
            <p>
              While vertical scrolling remains the standard navigation pattern, horizontal scrolling is making a significant comeback for specific content types. Story-based narratives, product showcases, portfolios, and timeline presentations benefit from the linear progression that horizontal scrolling provides.
            </p>
            <p>
              Modern horizontal scrolling implementations are more intuitive than their predecessors, with clear visual cues and smooth transitions that make navigation feel natural. When combined with parallax effects and responsive design principles, horizontal scrolling creates engaging storytelling opportunities.
            </p>

            <h2>5. AI-Enhanced Personalization</h2>
            <p>
              Artificial intelligence is transforming web design from static one-size-fits-all experiences to dynamic interfaces that adapt to individual users. AI-driven personalization now extends beyond content recommendations to include layout adjustments, interface element prioritization, and even visual design tailored to user preferences and behavior patterns.
            </p>
            <p>
              Websites are becoming more conversational and predictive, anticipating user needs and streamlining journeys through intelligent defaults and suggestions. This level of personalization creates more relevant experiences while respecting user privacy through transparent data practices.
            </p>

            <h2>6. Voice User Interfaces (VUI)</h2>
            <p>
              Voice interaction is becoming a standard component of web interfaces, complementing traditional visual and touch interactions. Voice search, navigation, and content consumption are being seamlessly integrated into websites, improving accessibility and offering hands-free alternatives for interaction.
            </p>
            <p>
              The most successful implementations combine voice interfaces with visual feedback and confirmation, creating multimodal experiences that accommodate different user preferences and contexts of use. As natural language processing continues to improve, we're seeing more sophisticated voice interactions with greater accuracy and contextual understanding.
            </p>

            <h2>7. Sustainability-Focused Design</h2>
            <p>
              Environmental consciousness is influencing web design practices through "digital sustainability" approaches that reduce the carbon footprint of digital products. This trend includes optimizing performance, reducing unnecessary animations and features, implementing efficient code, and using sustainable hosting providers.
            </p>
            <p>
              Beyond the technical aspects, sustainability is also reflected in design aesthetics that celebrate natural elements, organic shapes, and earthy color palettes. Brands are increasingly communicating their environmental values through their digital presence, with transparency about sustainable practices becoming a design priority.
            </p>

            <h2>Conclusion</h2>
            <p>
              The web design trends of 2025 reflect a maturation of digital experiences, with greater emphasis on purposeful innovation rather than novelty for its own sake. The most successful designs balance aesthetic appeal with functionality, performance, and inclusivity.
            </p>
            <p>
              As these trends continue to evolve, the boundaries between digital and physical experiences will continue to blur, creating more intuitive, immersive, and human-centered web experiences. For designers and businesses alike, staying informed about these trends provides valuable inspiration and strategic direction for creating digital experiences that resonate with today's users.
            </p>

            <div className="flex items-center justify-between mt-12 pt-8 border-t">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Share:</span>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Link
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Author */}
      <section className="py-12 border-t border-b">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">About the Author</h3>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/team2.jpg"
                  alt="Sarah Chen"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Sarah Chen</h4>
                <p className="text-primary mb-2">Lead UI/UX Designer</p>
                <p className="text-muted-foreground">
                  Sarah brings her expertise in user experience and interface design to create intuitive, accessible, and visually stunning digital products that delight users. With over 8 years of experience in the industry, she specializes in creating user-centered designs that balance aesthetics with functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "7 UX Design Principles Every Website Should Follow",
                  category: "UX Design",
                  date: "March 5, 2025",
                  image: "/images/web-design4.jpg",
                  link: "/blog/user-experience-design-principles"
                },
                {
                  title: "Responsive Web Design: Best Practices for 2025",
                  category: "Web Design",
                  date: "February 20, 2025",
                  image: "/images/web-design1.jpg",
                  link: "/blog/responsive-web-design-best-practices"
                }
              ].map((post, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border transition-all hover:shadow-lg">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <div className="relative h-full w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold group-hover:text-primary transition-colors">
                      <Link href={post.link}>
                        {post.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest web design and development insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Providers>
  );
}

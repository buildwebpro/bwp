import { Metadata } from "next";
import Link from "next/link";
import { Image } from "@/components/ui/custom-image";
import { Button } from "@/components/ui/button";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Blog | Buildweb PRO - Web Design & Development",
  description: "Insights, tips, and trends in web design and development from our expert team at Buildweb PRO.",
};

// Blog post data
const blogPosts = [
  {
    id: "web-design-trends-2025",
    title: "Top Web Design Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge design trends that are shaping the web in 2025, from 3D elements to micro-interactions and more.",
    author: "Sarah Chen",
    role: "Lead UI/UX Designer",
    category: "Web Design",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "/images/web-design2.jpg",
    featured: true
  },
  {
    id: "choosing-right-tech-stack",
    title: "How to Choose the Right Tech Stack for Your Web Project",
    excerpt: "A comprehensive guide to selecting the appropriate technologies for your next web development project based on your specific requirements.",
    author: "Michael Rodriguez",
    role: "Senior Web Developer",
    category: "Web Development",
    date: "March 10, 2025",
    readTime: "12 min read",
    image: "/images/web-design3.png",
    featured: true
  },
  {
    id: "user-experience-design-principles",
    title: "7 UX Design Principles Every Website Should Follow",
    excerpt: "Learn the fundamental UX design principles that can dramatically improve user engagement and conversion rates on your website.",
    author: "Sarah Chen",
    role: "Lead UI/UX Designer",
    category: "UX Design",
    date: "March 5, 2025",
    readTime: "10 min read",
    image: "/images/web-design4.jpg",
    featured: false
  },
  {
    id: "seo-optimization-guide",
    title: "The Ultimate Guide to SEO Optimization for Websites",
    excerpt: "Discover proven strategies and techniques to improve your website's search engine rankings and drive more organic traffic.",
    author: "Alex Johnson",
    role: "Founder & Creative Director",
    category: "SEO",
    date: "February 28, 2025",
    readTime: "15 min read",
    image: "/images/web-design5.jpg",
    featured: false
  },
  {
    id: "responsive-web-design-best-practices",
    title: "Responsive Web Design: Best Practices for 2025",
    excerpt: "Explore the latest approaches and techniques for creating websites that provide an optimal viewing experience across all devices.",
    author: "Emily Taylor",
    role: "Project Manager",
    category: "Web Design",
    date: "February 20, 2025",
    readTime: "9 min read",
    image: "/images/web-design1.jpg",
    featured: false
  },
  {
    id: "website-security-essentials",
    title: "Website Security Essentials: Protecting Your Online Presence",
    excerpt: "Learn about the critical security measures every website should implement to protect against common vulnerabilities and threats.",
    author: "Michael Rodriguez",
    role: "Senior Web Developer",
    category: "Web Development",
    date: "February 15, 2025",
    readTime: "11 min read",
    image: "/images/web-design3.png",
    featured: false
  }
];

export default function BlogPage() {
  // Extract featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  // Get unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <Providers>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tips, and trends in web design and development from our expert team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b">
        <div className="container px-4 mx-auto">
          <div className="flex overflow-auto pb-2 md:pb-0 md:justify-center gap-2">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/blog">All Posts</Link>
            </Button>
            {categories.map((category, index) => (
              <Button key={index} variant="ghost" className="rounded-full whitespace-nowrap" asChild>
                <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>{category}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="group relative overflow-hidden rounded-lg border transition-all hover:shadow-lg">
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

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date} • {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <p className="font-medium">{post.author}</p>
                      <p className="text-muted-foreground">{post.role}</p>
                    </div>

                    <Button asChild variant="outline">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-10 pb-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <div key={post.id} className="group relative overflow-hidden rounded-lg border transition-all hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <div className="relative h-full w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{post.readTime}</span>
                    <Button asChild variant="ghost" className="p-0 h-auto font-medium">
                      <Link href={`/blog/${post.id}`}>
                        Read Article
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest trends and insights in web design and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
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

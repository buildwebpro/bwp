import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <img src="/images/logo-bwp-web.png" height={64} width={64} /> 
              <span className="font-bold text-xl">Buildweb PRO</span>
            </div>
            <p className="text-sm text-muted-foreground">
               สร้างประสบการณ์ดิจิทัลที่เหนือระดับ ด้วยนวัตกรรมการออกแบบและพัฒนาเว็บ
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/buildwebpro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com/buildwebpro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com/buildwebpro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com/company/buildwebpro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/buildwebpro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
       
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-design" className="text-muted-foreground hover:text-primary">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-primary">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-muted-foreground hover:text-primary">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-muted-foreground hover:text-primary">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-muted-foreground hover:text-primary">
                  SEO & Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>3224 ถนนสุขุมวิท ต.บ้านสวน
                อ.เมือง จ.ชลบุรี 20000</span>
              </li>
              <li>
                <Link href="tel:+11234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Phone className="h-4 w-4" />
                  <span>080 558 5550</span>
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@buildwebpro.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Mail className="h-4 w-4" />
                  <span>buildwebpro@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-t border-border/60" />

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground pt-4 pb-2">
          <p>© 2025 Buildweb PRO. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

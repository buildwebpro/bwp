import { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Contact Us | Buildweb PRO - Web Design & Development",
  description: "Get in touch with our web design and development team. We're here to help bring your digital vision to life.",
};

export default function ContactPage() {
  return (
    <Providers>
      {/* Hero section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
           ติดต่อเรา
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          มีโปรเจกต์ในใจหรืออยากรู้เพิ่มเติมเกี่ยวกับบริการของเรา?
          เรายินดีให้คำปรึกษา
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Get in Touch
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Our Info
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      3224 ถนนสุขุมวิท ต.บ้านสวน<br />
                      อ.เมือง จ.ชลบุรี 20000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email Us</h3>
                    <a href="mailto:hello@webcraft.studio" className="text-muted-foreground hover:text-primary">
                       buildwebpro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Call Us</h3>
                    <a href="tel:+0805585550" className="text-muted-foreground hover:text-primary">
                      0-8055-85550
                    </a><br />
                    <a href="" className="text-muted-foreground hover:text-primary">
                      Line:0805585550
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      เปิดทุกวัน ตั้งแต่ 10:00 - 19:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="font-medium text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/buildwebprowp/" target="_blank" rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://x.com/buildwebpro" target="_blank" rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </Providers>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle the form submission
    console.log("Form submitted with:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    // Show success message (would be implemented with a toast in a real app)
    alert("Your message has been sent. We'll get back to you soon!");
  };

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 lg:p-8 shadow-lg border">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and requirements..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Office</h4>
                    <p className="text-muted-foreground">
                      123 Design Street, Creative City<br />
                      California, CA 94103, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-muted-foreground">
                      hello@webcraft.studio<br />
                      support@webcraft.studio
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-muted-foreground">
                      +1 (123) 456-7890<br />
                      +1 (987) 654-3210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <h4 className="font-medium mb-4">Business Hours</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Need an urgent response?</h4>
                <p className="text-muted-foreground mb-4">
                  For urgent inquiries or fast-track project discussions,
                  schedule a quick call with our team.
                </p>
                <Button variant="outline">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

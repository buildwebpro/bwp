import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "GrowthFirst",
    content: "WebCraft Studio transformed our outdated website into a modern, user-friendly platform that perfectly captures our brand. The team was professional, responsive, and delivered beyond our expectations. Our conversion rates have increased by 40% since the redesign!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "David Chen",
    role: "CEO",
    company: "Innovate Tech",
    content: "Working with WebCraft Studio was a game-changer for our e-commerce business. Their development expertise and attention to detail resulted in a seamless online shopping experience for our customers. Our sales have doubled within three months of launch.",
    avatar: "DC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Artisan Collective",
    content: "The UI/UX design from WebCraft Studio is simply outstanding. They took the time to understand our creative business and delivered a website that showcases our work beautifully. Their ongoing support has been exceptional as well.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "Michael Patel",
    role: "Operations Manager",
    company: "GlobalServe",
    content: "WebCraft Studio redesigned our complex service platform with remarkable efficiency. The new interface is intuitive for both our staff and clients, streamlining operations significantly. Their technical expertise and business understanding set them apart.",
    avatar: "MP"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Don't just take our word for it. Here's what our clients have to say about our web design and development services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background border h-full relative">
              {/* Quotation mark decoration */}
              <div className="absolute -top-2 -left-2 text-primary/10 text-7xl font-serif">
                "
              </div>

              <CardContent className="p-6 pt-8">
                <p className="text-muted-foreground mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

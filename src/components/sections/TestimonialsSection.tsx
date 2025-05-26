import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Jane Doe",
    title: "Project Manager, Tech Solutions Inc.",
    avatar: "JD",
    avatarImage: "https://placehold.co/100x100.png?text=JD",
    imageHint: "person avatar",
    quote: "Moses is a highly skilled engineer who consistently delivers quality work. His expertise in cloud technologies was invaluable to our project's success. He's a true asset to any team.",
  },
  {
    name: "John Smith",
    title: "Lead Developer, Innovate Hub",
    avatar: "JS",
    avatarImage: "https://placehold.co/100x100.png?text=JS",
    imageHint: "person avatar",
    quote: "Working with Moses was a pleasure. He's a great communicator, a proactive problem-solver, and his technical abilities are top-notch. Highly recommend!",
  },
  {
    name: "Alice Brown",
    title: "CEO, Startup Next",
    avatar: "AB",
    avatarImage: "https://placehold.co/100x100.png?text=AB",
    imageHint: "person avatar",
    quote: "Moses quickly understood our complex requirements and delivered an exceptional product. His dedication and innovative thinking were key to our launch.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-secondary/50 dark:bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Others Say</h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Hear from colleagues and clients I&apos;ve had the pleasure to work with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatarImage} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow relative pt-4">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/30 transform -translate-x-2 -translate-y-2" />
                <p className="text-muted-foreground italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

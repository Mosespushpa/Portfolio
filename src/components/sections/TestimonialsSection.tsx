
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Quote, Linkedin } from 'lucide-react';

const testimonials = [
  {
    name: "Tuge Venkatesam",
    title: "Project Manager, Tech Solutions Inc.",
    avatarFallbackText: "TV",
    profilePhotoUrl: "/testimonial_images/tuge_venkatesam.jpg", 
    imageHint: "Tuge Venkatesam professional headshot",
    quote: "Moses is a highly skilled engineer who consistently delivers quality work. His expertise in cloud technologies was invaluable to our project's success. He's a true asset to any team.",
    linkedinUrl: "https://www.linkedin.com/in/janedoe-example/", // Replace with actual LinkedIn URL
  },
  {
    name: "John Smith",
    title: "Lead Developer, Innovate Hub",
    avatarFallbackText: "JS",
    profilePhotoUrl: "/testimonial_images/john_smith.jpg",
    imageHint: "John Smith professional headshot",
    quote: "Working with Moses was a pleasure. He's a great communicator, a proactive problem-solver, and his technical abilities are top-notch. Highly recommend!",
    linkedinUrl: "https://www.linkedin.com/in/johnsmith-example/", // Replace with actual LinkedIn URL
  },
  {
    name: "Alice Brown",
    title: "CEO, Startup Next",
    avatarFallbackText: "AB",
    profilePhotoUrl: "/testimonial_images/alice_brown.jpg",
    imageHint: "Alice Brown professional headshot",
    quote: "Moses quickly understood our complex requirements and delivered an exceptional product. His dedication and innovative thinking were key to our launch.",
    linkedinUrl: "https://www.linkedin.com/in/alicebrown-example/", // Replace with actual LinkedIn URL
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
            <Card key={index} className="shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage 
                      src={testimonial.profilePhotoUrl} 
                      alt={testimonial.name} 
                      data-ai-hint={testimonial.imageHint} 
                    />
                    <AvatarFallback>{testimonial.avatarFallbackText}</AvatarFallback>
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
              {testimonial.linkedinUrl && testimonial.linkedinUrl !== "https://www.linkedin.com/in/placeholder/" && ( // Updated this condition slightly for clarity
                 <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="hover:scale-105 transform transition-transform duration-200">
                      <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center">
                        <Linkedin className="mr-2 h-4 w-4" /> View LinkedIn Profile
                      </a>
                    </Button>
                 </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

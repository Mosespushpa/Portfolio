
'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Label } from '@/components/ui/label';

// Simple LeetCode SVG Icon Component (reused from HeroSection for consistency)
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M13.483 4.497l-2.4-1.483-7.566 4.666v7.42h2.048V9.917l5.518-3.399v10.8l-2.444-1.483-.99.611 3.434 2.113 3.434-2.113-.99-.611-2.444 1.483V6.199l5.518 3.399v6.583h2.048V9.083l-7.566-4.586z" />
  </svg>
);

// User's actual Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrbkpdlb';

const contactDetails = {
  email: "chinnappanmoses21@gmail.com",
  phone: "+91 9247104605",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/moses-chinnappan-b96640219",
  github: "https://github.com/Mosespushpa",
  leetcode: "https://leetcode.com/u/moses_21/",
};

export function ContactSection() { // Renamed component
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // This check is no longer needed as the actual endpoint is set.
    // if (FORMSPREE_ENDPOINT === 'https://formspree.io/f/YOUR_FORMSPREE_FORM_ID') {
    //   toast({
    //     title: 'Configuration Error',
    //     description: 'Please replace YOUR_FORMSPREE_FORM_ID in ContactSection.tsx with your actual Formspree form ID.',
    //     variant: 'destructive',
    //   });
    //   setIsSubmitting(false);
    //   return;
    // }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.ok) {
          toast({
            title: 'Message Sent!',
            description: 'Your message has been sent successfully. I will get back to you soon.',
          });
          setName('');
          setEmail('');
          setMessage('');
        } else {
          let errorMessage = 'Failed to send message.';
          if (result.errors && result.errors.length > 0) {
            errorMessage = result.errors.map((err: any) => err.message || String(err.field).replace("_", " ")).join(', ');
          }
          toast({
            title: 'Submission Error',
            description: errorMessage,
            variant: 'destructive',
          });
        }
      } else {
        toast({
          title: 'Error',
          description: 'Failed to send message due to a network or server issue. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        I&apos;m open to opportunities and to discuss projects or collaborations. Let&apos;s connect!
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Details Section */}
        <div className="space-y-8">
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle>Contact Me Directly</CardTitle>
              <CardDescription>Feel free to reach out through these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <a href={`mailto:${contactDetails.email}`} className="flex items-center space-x-3 group">
                <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">{contactDetails.email}</span>
              </a>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">{contactDetails.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">{contactDetails.location}</span>
              </div>
              
              <div className="pt-4">
                <h3 className="text-md font-semibold mb-3 text-foreground">Find me on:</h3>
                <div className="flex space-x-4">
                  <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Button variant="outline" size="icon" className="transform transition-transform duration-200 hover:scale-110 hover:shadow-md"><Linkedin className="h-5 w-5" /></Button>
                  </a>
                  <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Button variant="outline" size="icon" className="transform transition-transform duration-200 hover:scale-110 hover:shadow-md"><Github className="h-5 w-5" /></Button>
                  </a>
                  <a href={contactDetails.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
                    <Button variant="outline" size="icon" className="transform transition-transform duration-200 hover:scale-110 hover:shadow-md"><LeetCodeIcon className="h-5 w-5" /></Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Form Section */}
        <div>
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5} 
                    className="min-h-[120px]"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

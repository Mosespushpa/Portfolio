
'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import { Label } from '@/components/ui/label';

// IMPORTANT: Replace this with your own Formspree endpoint URL
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_FORM_ID';

export function ContactFormSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    if (FORMSPREE_ENDPOINT === 'https://formspree.io/f/YOUR_FORMSPREE_FORM_ID') {
      toast({
        title: 'Configuration Error',
        description: 'Please replace YOUR_FORMSPREE_FORM_ID in ContactFormSection.tsx with your actual Formspree form ID.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

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
          // Formspree returned an error (e.g., validation error)
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
        // Network error or server error from Formspree
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
        Have a question or want to work together? Fill out the form below.
      </p>
      <Card className="max-w-xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>I&apos;ll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name" // Formspree uses the 'name' attribute
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
                name="email" // Formspree uses the 'name' attribute
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
                name="message" // Formspree uses the 'name' attribute
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="min-h-[150px]"
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
    </section>
  );
}

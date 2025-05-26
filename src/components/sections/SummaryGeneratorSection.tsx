'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { summarizeLinkedInExperience, type LinkedInSummaryInput } from '@/ai/flows/linkedin-summary';

export function SummaryGeneratorSection() {
  const [linkedinUrl, setLinkedinUrl] = useState('https://www.linkedin.com/in/moses-chinnappan-b96640219');
  const [workExperience, setWorkExperience] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkedinUrl || !workExperience) {
      toast({
        title: 'Missing Information',
        description: 'Please provide both LinkedIn URL and work experience.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setSummary('');

    try {
      const input: LinkedInSummaryInput = {
        linkedinProfileUrl: linkedinUrl,
        workExperienceSection: workExperience,
      };
      const result = await summarizeLinkedInExperience(input);
      setSummary(result.summary);
      toast({
        title: 'Summary Generated!',
        description: 'Your professional summary is ready.',
      });
    } catch (error) {
      console.error('Error generating summary:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate summary. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="summary-generator" className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">AI-Powered Summary</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Generate a concise professional summary from your LinkedIn work experience.
      </p>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>LinkedIn Summary Generator</CardTitle>
          <CardDescription>
            Paste your LinkedIn profile URL and work experience below to generate an "About Me" summary.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
              <Input
                id="linkedinUrl"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workExperience">Work Experience Section</Label>
              <Textarea
                id="workExperience"
                placeholder="Copy and paste your work experience section from LinkedIn here..."
                value={workExperience}
                onChange={(e) => setWorkExperience(e.target.value)}
                required
                rows={10}
                className="min-h-[200px]"
              />
              <p className="text-xs text-muted-foreground">
                Tip: For best results, copy the full text of your 'Experience' section from your LinkedIn profile.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Generate Summary
            </Button>
            {summary && (
              <div className="mt-6 p-4 border rounded-md bg-muted/50">
                <h4 className="font-semibold mb-2 text-lg">Generated Summary:</h4>
                <p className="text-sm whitespace-pre-wrap">{summary}</p>
              </div>
            )}
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}

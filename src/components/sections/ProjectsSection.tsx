import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A dynamic dashboard providing real-time data analytics and visualizations, leveraging AI for predictive insights.",
    image: "https://placehold.co/600x400.png",
    imageHint: "data analytics dashboard",
    tags: ["Next.js", "Python", "AWS", "AI/ML"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Scalable E-commerce Platform",
    description: "A robust e-commerce solution with features like product management, user authentication, and payment gateway integration.",
    image: "https://placehold.co/600x400.png",
    imageHint: "e-commerce online store",
    tags: ["React", "Node.js", "GCP", "Microservices"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "DevOps Automation Pipeline",
    description: "CI/CD pipeline for automated building, testing, and deployment of applications, significantly improving development velocity.",
    image: "https://placehold.co/600x400.png",
    imageHint: "devops pipeline code",
    tags: ["Terraform", "Kubernetes", "Jenkins", "Docker"],
    liveLink: "#",
    repoLink: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50 dark:bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          A selection of projects I&apos;ve worked on, showcasing my skills and passion for technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button variant="ghost" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="link" asChild>
            <a href="https://github.com/mosesC29" target="_blank" rel="noopener noreferrer">
              View More on GitHub <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}


import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Yield Forecast: Weather & Pesticides",
    description: "This project forecasts crop yields using meteorological and pesticide data with machine learning models like Random Forest and XGBoost. It supports data-driven agricultural planning.",
    image: "/project_images/crop.jpg", // Path relative to the public folder
    imageHint: "Predictive Analysis agricultural technology",
    tags: ["Python","React.js", "FastAPI", "AI/ML"],
    liveLink: "#", // Replace with actual live link if available
    repoLink: "https://github.com/Mosespushpa/crop_yield_predictor",
  },
  {
    title: "Feature Specific Sentiment Analysis",
    description: "Developed a sentiment analysis model using NLP to classify iPhone reviews by features, with results visualized through an interactive dashboard for better insights.",
    image: "/project_images/sentiment.jpg", // Path relative to the public folder
    imageHint: "Sentiment Analysis NLP data visualization",
    tags: ["Python","NLP", "Jupyter Notebook","Sentiment Analysis"],
    liveLink: "#", // Replace with actual live link if available
    repoLink: "https://github.com/Mosespushpa/Sentiment-Analysis-of-product-reviews",
  },
  {
    title: "MTY SHOP-WHEELS",
    description: "Developed a service-based website showcasing vehicle services and sales, featuring interactive sections like Services, Gallery, Sales, and team profiles to enhance user engagement.",
    image: "/project_images/mty.jpg", // Path relative to the public folder
    imageHint: "Service Network automotive website",
    tags: ["Frontend", "HTML", "CSS"],
    liveLink: "https://mosespushpa.github.io/mty/",
    repoLink: "https://github.com/Mosespushpa/mty",
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
                <Button variant="ghost" asChild disabled={project.liveLink === "#"}>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild disabled={project.repoLink === "#"}>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" /> Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="link" asChild>
            <a href="https://github.com/Mosespushpa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              View More on GitHub <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

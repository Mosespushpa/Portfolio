import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, Database, Cloud, Code, Cpu, Brain, Palette, Terminal } from 'lucide-react'; // Added Palette and Terminal for more categories

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Palette className="h-6 w-6 text-primary" />,
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend Development",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["Node.js", "Python", "Java", "Express.js", "REST APIs"],
  },
  {
    title: "Full Stack Expertise",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: ["Full Stack Development", "Application Architecture", "Microservices"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB, Firebase)"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "DevOps Practices"],
  },
  {
    title: "Languages",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: ["TypeScript", "JavaScript", "Python", "Java", "Go"],
  },
  {
    title: "Generative AI",
    icon: <Brain className="h-6 w-6 text-primary" />,
    skills: ["Genkit", "LLM Integration", "Prompt Engineering"],
  },
  {
    title: "Other Technologies",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    skills: ["Git", "Agile Methodologies", "Problem Solving"],
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Skills</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        A comprehensive overview of my technical capabilities and expertise.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                {category.icon}
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

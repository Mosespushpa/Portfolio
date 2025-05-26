
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { GraduationCap, School, BookOpen } from 'lucide-react'; // Example icons

const educationHistory = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    date: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on Natural Language Processing.",
    imageHint: "university campus stanford"
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Anna University",
    date: "2014 - 2018",
    description: "Focus on software development, database management, and web technologies. Graduated with Honors.",
    imageHint: "university campus generic"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    degree: "Advanced Full Stack Web Development Bootcamp",
    institution: "Online Coding Academy",
    date: "2021",
    description: "Intensive program covering modern frontend and backend technologies including React, Node.js, and cloud deployment.",
    imageHint: "online course certificate"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="bg-secondary/50 dark:bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Education & Qualifications</h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          My academic background and relevant qualifications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationHistory.map((edu, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
               <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="p-2 bg-primary/10 rounded-full">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-sm">{edu.institution} - {edu.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

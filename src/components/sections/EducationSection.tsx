
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { GraduationCap, School } from 'lucide-react';

const educationHistory = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    degree: "Bachelor of Engineering in Computer Science",
    institution: "ACE Engineering College",
    date: "2021 - 2025",
    description: "Specialized in Data Science.",
    grade: "CGPA: 8.7/10 (Until 3rd Year)", // Example, replace with actual
    imageHint: "university campus generic"
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    degree: "Telangana State Board of Intermediate Education",
    institution: "Sri Medha V Junior College",
    date: "2019 - 2021",
    description: "MPC - (Mathematics, Physics, Chemistry).",
    grade: "Percentage: 96%", // Example, replace with actual
    imageHint: "Intermediate college building"
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    degree: "Board of Secondary Education, Telangana State",
    institution: "Fr. Bendel E.M High School",
    date: "2019",
    description: "Secondary School Certificate (SSC).",
    grade: "GPA: 9.7/10", // Example, replace with actual
    imageHint: "school building classroom"
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
              <CardContent className="flex-grow space-y-2">
                <p className="text-sm text-muted-foreground">{edu.description}</p>
                {edu.grade && <p className="text-sm font-semibold text-primary">{edu.grade}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Award, Star, Zap, Trophy } from 'lucide-react'; // Example icons

const achievements = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Innovator of the Year Award",
    issuer: "Tech Solutions Inc.",
    date: "2023",
    description: "Recognized for developing an AI-powered analytics dashboard that significantly improved data processing efficiency.",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Top Performer - Q3",
    issuer: "Internal Company Recognition",
    date: "2022",
    description: "Achieved highest performance metrics for project delivery and client satisfaction in the third quarter.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2021",
    description: "Validated cloud fluency and foundational AWS knowledge.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Hackathon Winner - AI Challenge",
    issuer: "Innovate Hub",
    date: "2020",
    description: "Led a team to victory in a 24-hour hackathon focused on innovative AI solutions for e-commerce.",
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Achievements & Recognition</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        A showcase of my professional accomplishments and certifications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
              <div className="p-2 bg-primary/10 rounded-full">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
                <CardDescription className="text-sm">{achievement.issuer} - {achievement.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

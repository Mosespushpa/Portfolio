
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Star, Zap, Trophy, ExternalLink, FileText } from 'lucide-react'; 

const achievements = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "2023",
    description: "Proficient in Python programming with expertise in variables, data structures, algorithms, OOP, and best practices. Skilled in working with modules, files, and advanced Python features like generators and closures.",
    certificateUrl: "https://www.credly.com/badges/3f48b538-f1bb-4188-9b68-0e9a22f013f4/public_url", // Replace with actual URL
  },{
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Completed Cisco Networking Academy’s Cybersecurity Essentials course, gaining knowledge in cyber threats, data protection principles, and network defense strategies. Learned to apply technologies, processes, and legal frameworks to safeguard systems and information.",
    certificateUrl: "https://www.credly.com/badges/c528ef0b-a674-4f1f-9822-83c21844cde0/public_url", // Replace with actual URL
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Certificate of Contribution - WJARR",
    issuer: "World Journal of Advanced Research and Reviews (WJARR)",
    date: "2024",
    description: "Published a research article titled ''Feature-Specific Sentiment Analysis of iPhone Reviews'' in WJARR, Vol. 25, Issue 2, 2025. Contributed as the corresponding author, demonstrating expertise in sentiment analysis and NLP.",
    certificateUrl: "#", // Replace with actual URL
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Certificate of Contribution - WJAETS",
    issuer: "World Journal of Advanced Engineering Technology and Sciences (WJAETS)",
    date: "2025",
    description: "Published a research article titled ''Incorporating Meteorological Data and Pesticide Information to Forecast Crop Yields Using Machine Learning'' in WJAETS, Vol. 15, Issue 2, 2025. Contributed as the corresponding author.",
    certificateUrl: "#", // Replace with actual URL
  },
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
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
              <div className="p-2 bg-primary/10 rounded-full">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
                <CardDescription className="text-sm">{achievement.issuer} - {achievement.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </CardContent>
            {achievement.certificateUrl && achievement.certificateUrl !== "#" && (
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

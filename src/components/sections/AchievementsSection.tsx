
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Award, Star, Zap, Trophy } from 'lucide-react'; // Example icons

const achievements = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "2023",
    description: "Proficient in Python programming with expertise in variables, data structures, algorithms, OOP, and best practices. Skilled in working with modules, files, and advanced Python features like generators and closures.",
  },{
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Completed Cisco Networking Academy’s Cybersecurity Essentials course, gaining knowledge in cyber threats, data protection principles, and network defense strategies. Learned to apply technologies, processes, and legal frameworks to safeguard systems and information.",
  },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Certificate of Contribution",
      issuer: " World Journal of Advanced Research and Reviews (WJARR)",
      date: "2024",
      description: "Certificate of Contribution — Corresponding Author Published a research article titled ''Feature-Specific Sentiment Analysis of iPhone Reviews'' in the World Journal of Advanced Research and Reviews (WJARR), Vol. 25, Issue 2, 2025. Contributed as the corresponding author, demonstrating expertise in sentiment analysis and natural language processing (NLP) applied to product reviews.",
    },
    {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Certificate of Contribution",
    issuer: " World Journal of Advanced Engineering Technology and Sciences (WJAETS)",
    date: "2025",
    description: "Corresponding Author Published a research article titled ''Incorporating Meteorological Data and Pesticide Information to Forecast Crop Yields Using Machine Learning'' in the World Journal of Advanced Engineering Technology and Sciences (WJAETS), Vol. 15, Issue 2, 2025. Contributed as the corresponding author, showcasing expertise in applying machine learning techniques to real-world agricultural forecasting problems.",
  },
  
  // {
  //   icon: <Trophy className="h-8 w-8 text-primary" />,
  //   title: "Hackathon Winner - AI Challenge",
  //   issuer: "Innovate Hub",
  //   date: "2020",
  //   description: "Led a team to victory in a 24-hour hackathon focused on innovative AI solutions for e-commerce.",
  // }
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

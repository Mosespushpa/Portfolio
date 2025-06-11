
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Award, Star, Zap, FileText, X } from 'lucide-react'; 

const achievements = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "2023",
    description: "Proficient in Python programming with expertise in variables, data structures, algorithms, OOP, and best practices. Skilled in working with modules, files, and advanced Python features like generators and closures.",
    certificateUrl: "https://drive.google.com/file/d/1njV_Br39h8ELuV9_uHSil-SorJqYHf-U/view?usp=drive_link",
  },{
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Completed Cisco Networking Academy’s Cybersecurity Essentials course, gaining knowledge in cyber threats, data protection principles, and network defense strategies. Learned to apply technologies, processes, and legal frameworks to safeguard systems and information.",
    certificateUrl: "https://drive.google.com/file/d/1oPB7dtcgO-CXYZ0_4LiFKB7dSLcYbg1w/view?usp=drive_link",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Certificate of Contribution - WJARR",
    issuer: "World Journal of Advanced Research and Reviews (WJARR)",
    date: "2024",
    description: "Published a research article titled ''Feature-Specific Sentiment Analysis of iPhone Reviews'' in WJARR, Vol. 25, Issue 2, 2025. Contributed as the corresponding author, demonstrating expertise in sentiment analysis and NLP.",
    certificateUrl: "https://drive.google.com/file/d/1Zb64reeRlquCI9TPQaB-lihFXHbnVdWA/view?usp=drive_link", 
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Certificate of Contribution - WJAETS",
    issuer: "World Journal of Advanced Engineering Technology and Sciences (WJAETS)",
    date: "2025",
    description: "Published a research article titled ''Incorporating Meteorological Data and Pesticide Information to Forecast Crop Yields Using Machine Learning'' in WJAETS, Vol. 15, Issue 2, 2025. Contributed as the corresponding author.",
    certificateUrl: "https://drive.google.com/file/d/1hadnf9HM4lppLbeiqtDR-QaXfqsce8MA/view?usp=drive_link",
  },
];

export function AchievementsSection() {
  const [selectedCertificateUrl, setSelectedCertificateUrl] = useState<string | null>(null);

  // Function to transform Google Drive link for embedding
  const getEmbedUrl = (url: string | null) => {
    if (!url) return '';
    // Check if it's already a preview link
    if (url.includes("/preview")) return url;
    // Replace /view with /preview for better embedding
    return url.replace("/view?usp=drive_link", "/preview").replace("/view", "/preview");
  };

  return (
    <section id="achievements" className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Achievements & Recognition</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        A showcase of my professional accomplishments and certifications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex flex-col">
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
                <Dialog open={selectedCertificateUrl === achievement.certificateUrl} onOpenChange={(isOpen) => {
                  if (!isOpen) {
                    setSelectedCertificateUrl(null);
                  }
                }}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:scale-105 transform transition-transform duration-200"
                      onClick={() => setSelectedCertificateUrl(achievement.certificateUrl)}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      {selectedCertificateUrl && (
        <Dialog open={!!selectedCertificateUrl} onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedCertificateUrl(null);
        }}>
          <DialogContent className="w-[90vw] h-[85vh] max-w-4xl p-0 flex flex-col">
            <DialogHeader className="p-4 border-b flex flex-row justify-between items-center">
              <DialogTitle>Certificate Preview</DialogTitle>
              {/* The X close button is part of DialogContent by default in shadcn/ui */}
            </DialogHeader>
            <div className="flex-grow overflow-hidden">
              <iframe
                src={getEmbedUrl(selectedCertificateUrl)}
                className="w-full h-full border-0"
                title={achievements.find(a => a.certificateUrl === selectedCertificateUrl)?.title || 'Certificate'}
                allow="fullscreen"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

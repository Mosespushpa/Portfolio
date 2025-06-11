
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { GraduationCap, Sparkles, UserCircle } from 'lucide-react';

export function AboutMeSection() {
  const academicDetails = {
    degree: "Bachelor of Engineering in Computer Science",
    specialization: "Data Science",
    institution: "ACE Engineering College, Hyderabad",
    duration: "2021 - 2025 (Expected)",
    cgpa: "8.7/10 (Until 3rd Year)",
  };

  return (
    <section id="about-me" className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-muted-foreground">
          A Glimpse into My Journey and Aspirations
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur-md opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="/moses2.jpg" // Assuming the same profile image is used
              alt="Moses Chinnappan"
              width={420} // Increased image size
              height={420} // Increased image size
              priority
              className="rounded-lg shadow-xl relative z-10 border-4 border-background"
              data-ai-hint="professional headshot"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <UserCircle className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Moses Chinnappan</CardTitle>
              </div>
              <CardDescription>Aspiring Data Scientist & Full-Stack Developer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Moses, a passionate and driven student currently navigating the exciting world of Computer Science with a keen focus on Data Science. I thrive on transforming complex data into actionable insights and building intelligent solutions that make a tangible impact. My journey is fueled by a relentless curiosity and a desire to innovate at the intersection of technology and purpose.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Academic Snapshot
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                  <li><strong>Degree:</strong> {academicDetails.degree}</li>
                  <li><strong>Specialization:</strong> {academicDetails.specialization}</li>
                  <li><strong>Institution:</strong> {academicDetails.institution}</li>
                  <li><strong>Expected Graduation:</strong> {academicDetails.duration.split(' - ')[1]}</li>
                  <li><strong>Current CGPA:</strong> {academicDetails.cgpa}</li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Beyond academics, I am dedicated to continuous learning, exploring new technologies, and applying my skills to solve real-world problems. I believe in the power of collaboration and am always eager to connect with like-minded individuals and contribute to meaningful projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

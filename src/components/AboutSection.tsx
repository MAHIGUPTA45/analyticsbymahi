import { Brain, Target, Users, Clock, MessageCircle, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const softSkills = [
    { icon: Brain, title: "Analytical Thinking", description: "Breaking down complex problems into manageable components" },
    { icon: Target, title: "Problem-Solving", description: "Finding innovative solutions to data challenges" },
    { icon: MessageCircle, title: "Communication", description: "Translating technical insights into clear business language" },
    { icon: Users, title: "Collaboration", description: "Working effectively in team environments" },
    { icon: Clock, title: "Time Management", description: "Delivering projects on schedule with attention to detail" },
    { icon: Lightbulb, title: "Adaptability", description: "Learning new technologies and methodologies quickly" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-primary mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Designing Solutions, Not Just Visuals
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-coffee to-primary mx-auto"></div>
          </div>

          {/* Bio Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing my <strong className="text-foreground">Master of Computer Applications (MCA)</strong> at 
                Pranveer Singh Institute of Technology (2024–2026), building on my strong foundation in mathematics 
                from Amity University Lucknow where I earned my BSc (2020–2023).
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in <strong className="text-foreground">logical reasoning and data analytics</strong>, 
                where I excel at transforming raw data into meaningful insights. With expertise in Python, SQL, 
                Excel, and Power BI, I've successfully improved data reliability by up to 95% in my projects.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm driven by continuous learning and the challenge of solving complex problems through 
                <strong className="text-foreground"> analytical thinking and innovative approaches</strong>. 
                My academic achievements include maintaining a CGPA of 8.55 and SGPA of 8.39, 
                reflecting my commitment to excellence.
              </p>
            </div>
            
            <div className="bg-card border border-sand rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-foreground mb-4">Academic Highlights</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current CGPA</span>
                  <span className="font-medium text-primary">8.55</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current SGPA</span>
                  <span className="font-medium text-primary">8.39</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Degree</span>
                  <span className="font-medium text-primary">MCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Graduation</span>
                  <span className="font-medium text-primary">2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <Card key={index} className="border-sand hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/50 rounded-xl mb-4">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
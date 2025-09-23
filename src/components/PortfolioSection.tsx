import { ExternalLink, Github, BarChart3, Smartphone, Globe, FileText, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import iphoneDashboard from "@/assets/iphone-sales-dashboard.png";

const PortfolioSection = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const projects = [
    {
      icon: Smartphone,
      title: "iPhone Sales Data Analysis",
      description: "Comprehensive analysis of iPhone sales data using Python, SQL, and Excel to identify market trends and improve data reliability by 95%.",
      technologies: ["Python", "SQL", "Excel", "Pandas", "Matplotlib"],
      metrics: "95% Data Reliability Improvement",
      category: "Data Analysis",
      githubUrl: "https://github.com/MAHIGUPTA45",
      liveUrl: "#",
      highlights: [
        "Sales trend analysis across multiple quarters",
        "Market segment identification",
        "Predictive insights for inventory management",
        "Interactive data visualizations"
      ]
    },
    {
      icon: BarChart3,
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn patterns with 70-75% accuracy using Python, Pandas, and Matplotlib for data-driven retention strategies.",
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "NumPy"],
      metrics: "70-75% Prediction Accuracy",
      category: "Machine Learning",
      githubUrl: "https://github.com/MAHIGUPTA45",
      liveUrl: "#",
      highlights: [
        "Customer behavior analysis",
        "Feature engineering and selection",
        "Model optimization and validation",
        "Business impact assessment"
      ]
    },
    {
      icon: Globe,
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website showcasing technical skills and projects. Built with modern web technologies and optimized for performance.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      metrics: "100% Mobile Responsive",
      category: "Web Development",
      githubUrl: "https://github.com/MAHIGUPTA45",
      liveUrl: "#",
      highlights: [
        "Modern UI/UX design",
        "Cross-browser compatibility",
        "SEO optimization",
        "Performance optimization"
      ]
    },
    {
      icon: FileText,
      title: "SmartScribe: Real-time Classroom Notetaker",
      description: "Innovative group project developing an AI-powered real-time note-taking solution for educational environments. Currently in development phase.",
      technologies: ["React", "Node.js", "AI/ML", "Real-time Processing"],
      metrics: "In Progress - Team Project",
      category: "AI Application",
      githubUrl: "https://github.com/MAHIGUPTA45",
      liveUrl: "#",
      highlights: [
        "Real-time speech-to-text conversion",
        "Collaborative note editing",
        "Smart content summarization",
        "Integration with learning platforms"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-primary mb-4">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Digital Product Showcases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my latest projects demonstrating expertise in data analysis, machine learning, 
              and web development with measurable business impact.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-sand hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/50 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <project.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="bg-accent/30">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="bg-accent/20 rounded-lg p-3">
                    <div className="text-sm font-medium text-primary">{project.metrics}</div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-sand bg-card hover:bg-accent/20 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Project Highlights */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Key Features:</div>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-muted-foreground">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-sand hover:bg-accent/20 transition-all duration-200"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    {project.title === "iPhone Sales Data Analysis" ? (
                      <Dialog open={showDashboard} onOpenChange={setShowDashboard}>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm"
                            className="flex-1 bg-primary hover:bg-coffee text-primary-foreground transition-all duration-200"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-[90vw] h-[80vh] p-0">
                          <div className="relative w-full h-full">
                            <img
                              src={iphoneDashboard}
                              alt="iPhone Sales Analysis Dashboard"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button 
                        size="sm"
                        className="flex-1 bg-primary hover:bg-coffee text-primary-foreground transition-all duration-200"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card border border-sand rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center p-6 bg-card border border-sand rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Data Accuracy</div>
            </div>
            <div className="text-center p-6 bg-card border border-sand rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">75%</div>
              <div className="text-muted-foreground">ML Accuracy</div>
            </div>
            <div className="text-center p-6 bg-card border border-sand rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "SQL", level: 85, category: "Database" },
    { name: "Excel", level: 95, category: "Analytics" },
    { name: "Power BI", level: 80, category: "Visualization" },
    { name: "Pandas", level: 85, category: "Data Processing" },
    { name: "NumPy", level: 80, category: "Data Processing" },
    { name: "MySQL", level: 75, category: "Database" },
    { name: "Matplotlib", level: 75, category: "Visualization" },
    { name: "Java", level: 70, category: "Programming" },
    { name: "JavaScript", level: 65, category: "Programming" },
    { name: "HTML/CSS", level: 70, category: "Web Development" },
    { name: "GitHub", level: 75, category: "Version Control" }
  ];

  const tools = [
    "VS Code", "Jupyter Notebook", "GitHub", "Overleaf", "MySQL Workbench"
  ];

  const categories = ["Programming", "Database", "Analytics", "Visualization", "Data Processing", "Web Development", "Version Control"];
  
  const getSkillsByCategory = (category: string) => {
    return technicalSkills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-sand/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-primary mb-4">
              Skills & Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Proficiency
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set spanning data analysis, programming, and visualization tools
            </p>
          </div>

          {/* Technical Skills by Category */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => {
              const categorySkills = getSkillsByCategory(category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={index} className="bg-card border border-sand rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-6">{category}</h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Development Tools */}
          <div className="bg-card border border-sand rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Development Tools & Platforms</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-accent/50 hover:bg-accent transition-colors duration-200"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card border border-sand rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground">Technical Skills</div>
            </div>
            <div className="text-center p-6 bg-card border border-sand rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Development Tools</div>
            </div>
            <div className="text-center p-6 bg-card border border-sand rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
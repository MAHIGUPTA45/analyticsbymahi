import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import mahiProfile from "@/assets/mahi-profile-new.png";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-beige via-background to-sand">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-primary">
                Data Analytics Expert
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-coffee to-mocha bg-clip-text text-transparent">
                  Mahi Gupta
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-primary font-medium">
                Data Analyst | Insight Creator
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transforming raw data into actionable insights through Python, SQL, Excel, and Power BI. 
                Passionate about logical reasoning, analytics, and continuous learning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToPortfolio}
                size="lg"
                className="bg-primary hover:bg-coffee text-primary-foreground font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Intro
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8.55</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Data Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-700">
            <div className="relative mt-8">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-sand/40 rounded-full blur-2xl"></div>
              
              {/* Portrait */}
              <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-none overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-sand/30">
                  <img
                    src={mahiProfile}
                    alt="Mahi Gupta - Data Analyst and MCA Student"
                    className="w-full h-full object-cover mask-square"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    }}
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-2 -right-2 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
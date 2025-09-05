import { Database, BarChart3, PieChart, TrendingUp, Search, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Data Cleaning & Preparation",
      description: "Transform messy data into clean, structured datasets ready for analysis. Expertise in handling missing values, outliers, and data validation.",
      features: ["Data Validation", "Missing Value Treatment", "Outlier Detection", "Data Formatting"]
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Insights",
      description: "Extract meaningful patterns and insights from your data using statistical analysis and advanced analytical techniques.",
      features: ["Statistical Analysis", "Pattern Recognition", "Trend Analysis", "Business Intelligence"]
    },
    {
      icon: PieChart,
      title: "Data Visualization & Dashboards",
      description: "Create compelling visual stories from your data with interactive dashboards and professional charts.",
      features: ["Interactive Dashboards", "Power BI Reports", "Custom Charts", "KPI Tracking"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics (Beginner)",
      description: "Develop basic predictive models to forecast trends and outcomes based on historical data patterns.",
      features: ["Trend Forecasting", "Basic ML Models", "Risk Assessment", "Performance Prediction"]
    },
    {
      icon: Search,
      title: "Database Querying & Reporting",
      description: "Efficient data extraction and custom reporting solutions using SQL and database management skills.",
      features: ["SQL Optimization", "Custom Reports", "Data Mining", "Automated Queries"]
    },
    {
      icon: FileText,
      title: "Business Intelligence Solutions",
      description: "Comprehensive BI solutions to transform your raw data into actionable business insights and strategies.",
      features: ["KPI Development", "Performance Metrics", "Strategic Insights", "Data-Driven Decisions"]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-beige/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-primary mb-4">
              Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expertise Service! Let's check it out
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive data analytics services to transform your business data into actionable insights 
              and strategic advantages through cutting-edge analytical techniques.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-sand hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/50 rounded-xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card border border-sand rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's work together to unlock the hidden insights in your data and drive meaningful business outcomes.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-coffee text-primary-foreground font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
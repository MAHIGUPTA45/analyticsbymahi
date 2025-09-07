import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  // Initialize EmailJS
  emailjs.init("bn_78z0ZsYBMIP5Bx");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7ccz77j",
        "template_bs0pzhb", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahigupta.corp@gmail.com",
      href: "mailto:mahigupta.corp@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mahi-gupta03",
      href: "https://www.linkedin.com/in/mahi-gupta03"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MAHIGUPTA45",
      href: "https://github.com/MAHIGUPTA45"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-sand/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-primary mb-4">
              Contact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your data into actionable insights? 
              Let's discuss how we can work together on your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-sand shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-sand focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-sand focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or how I can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-sand focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-coffee text-primary-foreground font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-sand shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-accent/20 rounded-lg hover:bg-accent/30 transition-colors duration-200">
                      <div className="flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-medium text-foreground">{info.label}</div>
                        <a 
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-sand shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Quick Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-accent/20 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Location</div>
                      <div className="text-sm text-muted-foreground">India</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-accent/20 rounded-lg">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Availability</div>
                      <div className="text-sm text-muted-foreground">Open for projects</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="bg-card border border-sand rounded-2xl p-6 shadow-lg text-center">
                <h3 className="font-semibold text-foreground mb-2">Ready to get started?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss how I can help transform your data into insights.
                </p>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  onClick={() => window.open('mailto:mahigupta.corp@gmail.com', '_blank')}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
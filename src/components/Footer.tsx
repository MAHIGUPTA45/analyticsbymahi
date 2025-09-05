import { Heart, Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:mahigupta.corp@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mahi-gupta03",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/MAHIGUPTA45",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Mahi Gupta</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                MCA Student & Data Analyst passionate about transforming data into actionable insights.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 mx-auto"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                mahigupta.corp@gmail.com
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-primary-foreground/80 text-sm text-center md:text-left">
                © {currentYear} Mahi Gupta. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-1 text-primary-foreground/80 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400 mx-1" />
                <span>and lots of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { GiGlowingArtifact } from "react-icons/gi";

export function Footer() {
  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Youtube", href: "#", icon: Youtube },
  ];

  const footerSections = [
    {
      title: "Visit",
      links: [
        { name: "Plan Your Visit", href: "/visit" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Group Tours", href: "/tours" },
        { name: "Educational Programs", href: "/education" },
      ],
    },
    {
      title: "Learn",
      links: [
        { name: "Explore Collection", href: "/explore" },
        { name: "Digital Exhibitions", href: "/exhibitions" },
        { name: "Research Resources", href: "/research" },
        { name: "Cultural Context", href: "/context" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "About Us", href: "/about" },
        { name: "News & Events", href: "/news" },
        { name: "Community", href: "/community" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Museum Info */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="flex items-center space-x-2 font-heading text-xl font-semibold tracking-tight mb-4"
            >
              <GiGlowingArtifact className="h-8 w-8 text-primary" />
              <span>Cultural Heritage Museum</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Preserving and sharing cultural heritage through innovative digital experiences 
              that bridge the past with the future.
            </p>
            
            {/* Newsletter Signup */}
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background"
                aria-label="Email address for newsletter"
              />
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                aria-label="Subscribe to newsletter"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Footer Navigation */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <p>&copy; 2025 Digital Cultural Heritage Museum. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/ethics" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/ethics" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
              <Link to="/ethics" className="hover:text-primary transition-colors">
                Cultural Ethics
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
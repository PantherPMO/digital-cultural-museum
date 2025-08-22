import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Mic, Globe, Users, BookOpen } from "lucide-react";

export function Home() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const features = [
    {
      id: "explore",
      icon: Search,
      title: "Explore Collection",
      description: "Discover thousands of artifacts with intelligent search and filtering",
      href: "/explore",
    },
    {
      id: "voice",
      icon: Mic,
      title: "Voice Navigation",
      description: "Experience hands-free exploration with advanced voice controls",
      href: "/explore",
    },
    {
      id: "global",
      icon: Globe,
      title: "Global Heritage",
      description: "Journey through cultures from around the world",
      href: "/exhibitions",
    },
    {
      id: "accessibility",
      icon: Users,
      title: "Universal Access",
      description: "Designed for everyone with comprehensive accessibility features",
      href: "/about",
    },
  ];

  const exhibitions = [
    {
      title: "Ancient Mediterranean Civilizations",
      description: "Explore the interconnected cultures of the ancient Mediterranean",
      image: "Exhibition featuring pottery, sculptures, and artifacts",
      href: "/exhibitions/mediterranean",
    },
    {
      title: "Digital Preservation Stories", 
      description: "How modern technology helps preserve cultural heritage",
      image: "Digital scanning and preservation processes",
      href: "/exhibitions/preservation",
    },
    {
      title: "Voices of the Past",
      description: "Audio narratives from historical figures and communities",
      image: "Audio recording equipment and historical portraits",
      href: "/exhibitions/voices",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-background/80"
        aria-labelledby="hero-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h1 
              id="hero-heading"
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Discover Cultural Heritage
              <span className="block text-primary">Through Innovation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience a revolutionary digital museum where voice control meets cultural preservation. 
              Explore thousands of artifacts with unprecedented accessibility and immersion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="gentle-hover px-8 py-6 text-lg"
              >
                <Link to="/explore">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="gentle-hover px-8 py-6 text-lg"
                asChild
              >
                <Link to="/about">Learn Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card/30" aria-labelledby="features-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              id="features-heading"
              className="font-heading text-3xl md:text-4xl font-bold mb-4"
            >
              A Museum Designed for Everyone
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets inclusive design to create an experience 
              that adapts to your needs and preferences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card 
                key={feature.id}
                className={`gentle-hover cursor-pointer transition-all duration-300 ${
                  isHovered === feature.id ? 'scale-105 shadow-lg' : ''
                }`}
                onMouseEnter={() => setIsHovered(feature.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={feature.href}>
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section className="py-20" aria-labelledby="exhibitions-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 
                id="exhibitions-heading"
                className="font-heading text-3xl md:text-4xl font-bold mb-4"
              >
                Featured Exhibitions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Immersive digital experiences that bring history to life
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link to="/exhibitions">
                View All Exhibitions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitions.map((exhibition, index) => (
              <article 
                key={index}
                className="group cursor-pointer"
              >
                <Link to={exhibition.href} className="block">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <BookOpen className="h-12 w-12 text-primary/60" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {exhibition.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {exhibition.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            id="cta-heading"
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
          >
            Begin Your Journey Through Time
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of visitors who have discovered the power of accessible cultural exploration.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="gentle-hover px-8 py-6 text-lg"
            asChild
          >
            <Link to="/explore">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
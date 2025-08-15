import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Users, Shield, Heart, Award, Zap } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Users,
      title: "Accessibility First",
      description: "We believe cultural heritage should be accessible to everyone, regardless of ability or circumstance."
    },
    {
      icon: Shield,
      title: "Cultural Sensitivity",
      description: "We work closely with communities to ensure respectful representation of their heritage."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Our collection celebrates the diversity of human culture from every corner of the world."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We harness cutting-edge technology to create new ways of experiencing the past."
    }
  ];

  const team = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Director & Chief Curator",
      bio: "Former curator at the Metropolitan Museum with 20 years in digital preservation."
    },
    {
      name: "Dr. James Chen",
      role: "Head of Technology",
      bio: "Pioneer in accessible web design and voice interface development."
    },
    {
      name: "Prof. Amara Okafor",
      role: "Ethics & Community Relations",
      bio: "Expert in cultural ethics and indigenous knowledge systems."
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Archaeologist",
      bio: "Specializes in digital documentation and 3D artifact modeling."
    }
  ];

  const milestones = [
    { year: "2020", event: "Museum concept developed with accessibility focus" },
    { year: "2021", event: "Partnership established with global cultural institutions" },
    { year: "2022", event: "Voice control technology successfully implemented" },
    { year: "2023", event: "WCAG 2.2 compliance achieved across all platforms" },
    { year: "2024", event: "10,000+ artifacts digitized and made accessible" },
    { year: "2025", event: "Launch of revolutionary voice-enabled experience" }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About Our Mission
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We're pioneering the future of cultural heritage preservation through innovative 
              technology that makes history accessible to everyone, everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/ethics">Our Ethics</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/explore">Explore Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where cultural heritage is not locked away in distant institutions, 
              but lives and breathes in the daily experience of people everywhere. Through cutting-edge 
              voice technology and unwavering commitment to accessibility, we're breaking down barriers 
              that have historically separated people from their shared human story.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse group of experts united by passion for cultural preservation and accessibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to revolutionize cultural heritage access.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-primary">{milestone.year}</span>
                    </div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Measuring our commitment to accessibility and cultural preservation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Artifacts Digitized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">WCAG 2.2 Compliant</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Partner Institutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Be part of a movement that's making cultural heritage accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/explore">Start Exploring</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
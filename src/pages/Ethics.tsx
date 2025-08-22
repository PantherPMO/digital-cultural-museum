import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Users, Globe, AlertTriangle, Download } from "lucide-react";

export function Ethics() {
  const principles = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your personal data is encrypted, anonymized, and never sold to third parties."
    },
    {
      icon: Users,
      title: "Cultural Sensitivity",
      description: "We work directly with communities to ensure respectful representation."
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Our platform is designed to be accessible to users of all abilities."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're open about our processes, partnerships, and funding sources."
    }
  ];

  const dataTypes = [
    { type: "Voice Commands", purpose: "Navigation and accessibility", retention: "7 days", sharing: "Never shared" },
    { type: "Usage Analytics", purpose: "Improve user experience", retention: "1 year", sharing: "Anonymized only" },
    { type: "Accessibility Preferences", purpose: "Personalized experience", retention: "Until account deletion", sharing: "Never shared" },
    { type: "Favorites & Collections", purpose: "Save user preferences", retention: "Until account deletion", sharing: "Never shared" }
  ];

  return (
    <main className="flex-1">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ethics & Privacy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Transparency and trust are fundamental to our mission. We believe you have the right 
              to understand exactly how we handle your data and protect cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Ethical Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide every decision we make about data, technology, and cultural representation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <principle.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage Table */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              What Data We Collect & Why
            </h2>
            
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Data Type</th>
                        <th className="text-left p-4 font-semibold">Purpose</th>
                        <th className="text-left p-4 font-semibold">Retention</th>
                        <th className="text-left p-4 font-semibold">Sharing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTypes.map((data, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="p-4 font-medium">{data.type}</td>
                          <td className="p-4 text-muted-foreground">{data.purpose}</td>
                          <td className="p-4 text-muted-foreground">{data.retention}</td>
                          <td className="p-4 text-muted-foreground">{data.sharing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Voice Data Handling */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Voice Data: Special Protections
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Voice commands processed locally when possible</li>
                    <li>• No permanent storage of voice recordings</li>
                    <li>• Transcripts automatically deleted after 7 days</li>
                    <li>• No voice profile or biometric data creation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-primary" />
                    Your Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Voice control can be disabled anytime</li>
                    <li>• Clear visual indicators when listening</li>
                    <li>• Manual deletion of any stored transcripts</li>
                    <li>• Opt-out affects no other features</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Ethics */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Cultural Heritage Ethics
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We work directly with indigenous communities, cultural institutions, and heritage guardians 
                    to ensure artifacts are presented with appropriate context and respect.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Community representatives involved in curation decisions</li>
                    <li>Cultural context provided by community members</li>
                    <li>Sensitive items handled according to community protocols</li>
                    <li>Revenue sharing agreements with source communities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Repatriation & Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We support the return of cultural artifacts to their communities of origin 
                    and provide free access to cultural heritage data.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>High-resolution scans provided to origin communities</li>
                    <li>Digital repatriation when physical return isn't possible</li>
                    <li>Free access for educational and cultural purposes</li>
                    <li>Support for community-led heritage projects</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Manage Your Data */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Manage Your Data
            </h2>
            
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Your Rights & Controls
                  </h3>
                  <p className="text-muted-foreground">
                    You have complete control over your personal data at all times.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Access & Export</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Download all your data</li>
                      <li>• View data processing history</li>
                      <li>• Export favorites and collections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Delete & Control</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Delete individual data points</li>
                      <li>• Purge all personal data</li>
                      <li>• Disable specific features</li>
                    </ul>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download My Data
                  </Button>
                  <Button variant="outline">
                    Manage Preferences
                  </Button>
                  <Button variant="destructive" className="sm:ml-4">
                    Delete All Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Questions About Our Ethics?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're committed to transparency. If you have questions about our data practices 
              or cultural ethics, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Ethics Team
              </Button>
              <Button variant="outline" size="lg">
                Report a Concern
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
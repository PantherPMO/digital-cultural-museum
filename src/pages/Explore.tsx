import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, MapPin, Calendar, Heart, Eye } from "lucide-react";

interface Artifact {
  id: string;
  title: string;
  culture: string;
  period: string;
  location: string;
  description: string;
  materials: string[];
  image: string;
  featured: boolean;
}

export function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCulture, setSelectedCulture] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Mock artifact data
  const artifacts: Artifact[] = [
    {
      id: "1",
      title: "Ancient Greek Amphora",
      culture: "Greek",
      period: "Classical Period (5th century BCE)",
      location: "Athens, Greece",
      description: "A beautifully preserved red-figure amphora depicting scenes from Greek mythology.",
      materials: ["Ceramic", "Iron oxide"],
      image: "Ancient Greek amphora with red figures",
      featured: true,
    },
    {
      id: "2", 
      title: "Egyptian Canopic Jar",
      culture: "Egyptian",
      period: "New Kingdom (1550-1077 BCE)",
      location: "Valley of the Kings, Egypt",
      description: "Limestone canopic jar with the head of Duamutef, protector of the stomach.",
      materials: ["Limestone", "Pigment"],
      image: "Egyptian canopic jar with jackal head",
      featured: false,
    },
    {
      id: "3",
      title: "Ming Dynasty Vase",
      culture: "Chinese",
      period: "Ming Dynasty (1368-1644 CE)",
      location: "Jingdezhen, China",
      description: "Porcelain vase with cobalt blue underglaze depicting dragons and clouds.",
      materials: ["Porcelain", "Cobalt oxide"],
      image: "Ming dynasty blue and white porcelain vase",
      featured: true,
    },
    {
      id: "4",
      title: "Mayan Jade Mask",
      culture: "Mayan",
      period: "Classic Period (250-900 CE)",
      location: "Palenque, Mexico",
      description: "Ceremonial jade mask believed to represent a Mayan ruler or deity.",
      materials: ["Jade", "Obsidian", "Shell"],
      image: "Mayan jade funeral mask with intricate details",
      featured: false,
    },
    {
      id: "5",
      title: "Viking Silver Arm Ring",
      culture: "Norse",
      period: "Viking Age (793-1066 CE)",
      location: "York, England",
      description: "Twisted silver arm ring used as currency and status symbol.",
      materials: ["Silver", "Gold inlay"],
      image: "Viking silver arm ring with intricate patterns",
      featured: false,
    },
    {
      id: "6",
      title: "Roman Glass Bowl",
      culture: "Roman",
      period: "Imperial Period (27 BCE-476 CE)",
      location: "Pompeii, Italy",
      description: "Delicate glass bowl with iridescent patina from volcanic ash preservation.",
      materials: ["Glass", "Natural patina"],
      image: "Roman glass bowl with rainbow iridescence",
      featured: true,
    },
  ];

  const cultures = Array.from(new Set(artifacts.map(a => a.culture)));
  const periods = Array.from(new Set(artifacts.map(a => a.period)));

  const filteredArtifacts = artifacts.filter(artifact => {
    const matchesSearch = artifact.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artifact.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artifact.culture.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCulture = !selectedCulture || selectedCulture === "all" || artifact.culture === selectedCulture;
    const matchesPeriod = !selectedPeriod || selectedPeriod === "all" || artifact.period === selectedPeriod;
    
    return matchesSearch && matchesCulture && matchesPeriod;
  });

  const toggleFavorite = (artifactId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(artifactId)) {
        newFavorites.delete(artifactId);
      } else {
        newFavorites.add(artifactId);
      }
      return newFavorites;
    });
  };

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Explore the Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover artifacts from cultures around the world. Use our advanced search and filtering 
            system to find exactly what interests you, or let serendipity guide your exploration.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6" role="search" aria-label="Collection filters">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Search & Filter
                </h2>
                
                {/* Search Input */}
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search artifacts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                      aria-label="Search artifacts by title, description, or culture"
                    />
                  </div>

                  {/* Culture Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Culture</label>
                    <Select value={selectedCulture} onValueChange={setSelectedCulture}>
                      <SelectTrigger>
                        <SelectValue placeholder="All cultures" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All cultures</SelectItem>
                        {cultures.map(culture => (
                          <SelectItem key={culture} value={culture}>{culture}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Period Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Time Period</label>
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger>
                        <SelectValue placeholder="All periods" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All periods</SelectItem>
                        {periods.map(period => (
                          <SelectItem key={period} value={period}>{period}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Clear Filters */}
                  {(searchQuery || selectedCulture || selectedPeriod) && (
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCulture("all");
                        setSelectedPeriod("all");
                      }}
                      className="w-full"
                    >
                      Clear All Filters
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Collection Stats</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Artifacts:</span>
                    <span className="font-medium">{artifacts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Showing:</span>
                    <span className="font-medium">{filteredArtifacts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cultures:</span>
                    <span className="font-medium">{cultures.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Results Grid */}
          <section className="lg:col-span-3" aria-label="Artifact search results">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {filteredArtifacts.length} Artifact{filteredArtifacts.length !== 1 ? 's' : ''} Found
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredArtifacts.map((artifact) => (
                <Card 
                  key={artifact.id}
                  className="gentle-hover cursor-pointer group"
                  role="article"
                  aria-labelledby={`artifact-title-${artifact.id}`}
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="aspect-square bg-muted relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <Eye className="h-8 w-8 text-muted-foreground" />
                      </div>
                      
                      {/* Featured Badge */}
                      {artifact.featured && (
                        <Badge className="absolute top-2 left-2 bg-primary">
                          Featured
                        </Badge>
                      )}
                      
                      {/* Favorite Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(artifact.id);
                        }}
                        aria-label={`${favorites.has(artifact.id) ? 'Remove from' : 'Add to'} favorites`}
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.has(artifact.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-muted-foreground'
                          }`}
                        />
                      </Button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 
                        id={`artifact-title-${artifact.id}`}
                        className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors"
                      >
                        {artifact.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        {artifact.location}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        {artifact.period}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {artifact.description}
                      </p>
                      
                      {/* Materials Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {artifact.materials.slice(0, 2).map((material) => (
                          <Badge key={material} variant="secondary" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                        {artifact.materials.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{artifact.materials.length - 2} more
                          </Badge>
                        )}
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredArtifacts.length === 0 && (
              <div className="text-center py-12">
                <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No artifacts found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCulture("all");
                    setSelectedPeriod("all");
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
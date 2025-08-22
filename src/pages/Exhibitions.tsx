import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const exhibitions = [
  {
    id: 'ancient-civilizations',
    slug: 'ancient-civilizations',
    title: 'Echoes of Ancient Civilizations',
    description: 'Journey through time to discover the remarkable achievements of our ancestors, from the pyramids of Egypt to the temples of Mesopotamia.',
    shortDescription: 'Archaeological treasures from across the ancient world',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42b?auto=format&fit=crop&w=800&q=80',
    category: 'Archaeology',
    status: 'Current',
    duration: '12 min read',
    artifacts: 127,
    startDate: 'March 1, 2024',
    endDate: 'September 30, 2024',
    featured: true
  },
  {
    id: 'maritime-heritage',
    slug: 'maritime-heritage',
    title: 'Seas of Discovery',
    description: 'Explore the rich maritime heritage of coastal civilizations and the artifacts recovered from underwater archaeological sites.',
    shortDescription: 'Underwater archaeology and maritime culture',
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80',
    category: 'Maritime',
    status: 'Coming Soon',
    duration: '15 min read',
    artifacts: 89,
    startDate: 'October 15, 2024',
    endDate: 'March 31, 2025',
    featured: false
  },
  {
    id: 'sacred-spaces',
    slug: 'sacred-spaces',
    title: 'Sacred Spaces and Spiritual Practices',
    description: 'An intimate look at religious and spiritual artifacts from diverse cultures, revealing universal themes of faith and devotion.',
    shortDescription: 'Religious artifacts and spiritual traditions',
    image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80',
    category: 'Religion',
    status: 'Current',
    duration: '18 min read',
    artifacts: 156,
    startDate: 'January 15, 2024',
    endDate: 'December 31, 2024',
    featured: true
  },
  {
    id: 'ancient-engineering',
    slug: 'ancient-engineering',
    title: 'Marvels of Ancient Engineering',
    description: 'Discover the sophisticated engineering solutions of ancient civilizations through bridges, aqueducts, and monumental structures.',
    shortDescription: 'Ancient technology and engineering prowess',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
    category: 'Engineering',
    status: 'Current',
    duration: '14 min read',
    artifacts: 94,
    startDate: 'February 1, 2024',
    endDate: 'August 31, 2024',
    featured: false
  }
];

export const Exhibitions = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories = ['All', 'Archaeology', 'Maritime', 'Religion', 'Engineering'];
  const filteredExhibitions = filter === 'All' 
    ? exhibitions 
    : exhibitions.filter(ex => ex.category === filter);

  const featuredExhibitions = exhibitions.filter(ex => ex.featured);
  const currentExhibitions = exhibitions.filter(ex => ex.status === 'Current');

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
            Curated Exhibitions
          </h1>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Immersive narratives that bring history to life through carefully curated collections and expert storytelling.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Exhibitions */}
      {filter === 'All' && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-text-primary mb-8 text-center">
              Featured Exhibitions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredExhibitions.map((exhibition) => (
                <Card 
                  key={exhibition.id} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-ui-secondary"
                  onMouseEnter={() => setHoveredCard(exhibition.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={exhibition.image} 
                      alt={exhibition.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent" />
                    <Badge 
                      className={`absolute top-4 left-4 ${
                        exhibition.status === 'Current' ? 'bg-green-500' : 'bg-amber-500'
                      } text-white`}
                    >
                      {exhibition.status}
                    </Badge>
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {exhibition.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair group-hover:text-primary transition-colors">
                      {exhibition.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary">
                      {exhibition.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {exhibition.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {exhibition.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {exhibition.artifacts} artifacts
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exhibition.startDate}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      asChild 
                      className="w-full group-hover:bg-primary-dark transition-colors"
                      disabled={exhibition.status === 'Coming Soon'}
                    >
                      <Link to={`/exhibitions/${exhibition.slug}`} className="flex items-center justify-center gap-2">
                        {exhibition.status === 'Coming Soon' ? 'Coming Soon' : 'Explore Exhibition'}
                        {exhibition.status !== 'Coming Soon' && (
                          <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                            hoveredCard === exhibition.id ? 'translate-x-1' : ''
                          }`} />
                        )}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Exhibitions Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-text-primary mb-8 text-center">
            {filter === 'All' ? 'All Exhibitions' : `${filter} Exhibitions`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredExhibitions.map((exhibition) => (
              <Card 
                key={exhibition.id} 
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-ui-secondary"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={exhibition.image} 
                    alt={exhibition.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge 
                    className={`absolute top-3 left-3 text-xs ${
                      exhibition.status === 'Current' ? 'bg-green-500' : 'bg-amber-500'
                    } text-white`}
                  >
                    {exhibition.status}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {exhibition.category}
                    </Badge>
                    <span className="text-xs text-text-secondary">{exhibition.duration}</span>
                  </div>
                  <CardTitle className="text-lg font-playfair leading-tight group-hover:text-primary transition-colors">
                    {exhibition.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    {exhibition.shortDescription}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {exhibition.artifacts}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exhibition.startDate}
                    </span>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    disabled={exhibition.status === 'Coming Soon'}
                  >
                    <Link to={`/exhibitions/${exhibition.slug}`}>
                      {exhibition.status === 'Coming Soon' ? 'Coming Soon' : 'Read Exhibition'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">
            Discover More Treasures
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            Explore our full collection of artifacts and discover the stories behind each piece.
          </p>
          <Button asChild size="lg">
            <Link to="/explore">Browse Collection</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample exhibit data - in a real app, this would come from an API
const exhibitData = {
  "ancient-civilizations": {
    title: "Echoes of Ancient Civilizations",
    subtitle: "A Journey Through Time and Culture",
    author: "Dr. Sarah Mitchell",
    readTime: "12 min read",
    publishDate: "March 15, 2024",
    heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42b?auto=format&fit=crop&w=2000&q=80",
    sections: [
      {
        type: "introduction",
        content: "In the quiet corridors of time, ancient civilizations have left behind whispers of their existence—fragments of pottery, weathered stone carvings, and artifacts that speak to the universal human experience. This exhibition takes you on an immersive journey through the archaeological treasures that connect us to our ancestors."
      },
      {
        type: "quote",
        content: "Every artifact is a bridge between the past and present, a tangible connection to the lives and dreams of those who came before us.",
        author: "Dr. Elena Rodriguez, Chief Archaeologist"
      },
      {
        type: "text",
        content: "The civilizations of ancient Mesopotamia, Egypt, and the Indus Valley each developed unique cultural expressions, yet they shared fundamental human concerns: the desire to create, to communicate, and to leave a lasting legacy. Through careful excavation and preservation, we can now witness their remarkable achievements firsthand."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=2000&q=80",
        alt: "Ancient temple interior with dramatic lighting",
        caption: "The preserved interior of a 3,000-year-old temple, showcasing the architectural mastery of ancient builders."
      },
      {
        type: "text",
        content: "Archaeological evidence reveals sophisticated understanding of mathematics, astronomy, and engineering. The precision of ancient calendars, the complexity of irrigation systems, and the grandeur of monumental architecture all testify to civilizations that were far more advanced than previously believed."
      },
      {
        type: "pullquote",
        content: "These artifacts don't just tell us what ancient people made—they reveal how they thought, what they valued, and how they understood their place in the world."
      },
      {
        type: "text",
        content: "Perhaps most striking is the evidence of artistic expression found across all ancient cultures. From cave paintings to intricate jewelry, from musical instruments to decorative pottery, the impulse to create beauty appears to be as fundamental to human nature as the need for shelter or sustenance."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2000&q=80",
        alt: "Ancient stone bridge over flowing water",
        caption: "Engineering marvels like this ancient bridge demonstrate sophisticated understanding of construction and hydraulics."
      },
      {
        type: "conclusion",
        content: "As we stand before these ancient treasures, we're reminded that the human story is one of continuous innovation, creativity, and resilience. Each artifact in this collection represents not just a moment in history, but a testament to the enduring human spirit that connects us across millennia."
      }
    ]
  }
};

export const ExhibitDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);

  const exhibit = slug ? exhibitData[slug as keyof typeof exhibitData] : null;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observeElements = () => {
      const elements = document.querySelectorAll('[data-animate]');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              entry.target.classList.remove('opacity-0', 'translate-y-4');
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    };

    const cleanup = observeElements();
    return cleanup;
  }, [exhibit]);

  if (!exhibit) {
    return <Navigate to="/exhibitions" replace />;
  }

  const renderSection = (section: any, index: number) => {
    const baseClasses = "opacity-0 translate-y-4 transition-all duration-700";
    
    switch (section.type) {
      case 'introduction':
        return (
          <div key={index} data-animate className={`${baseClasses} mb-12`}>
            <p className="text-xl leading-relaxed text-text-secondary font-light">
              {section.content}
            </p>
          </div>
        );
      
      case 'quote':
        return (
          <div key={index} data-animate className={`${baseClasses} my-16 px-8 py-12 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary`}>
            <blockquote className="text-2xl font-light italic text-text-primary leading-relaxed mb-4">
              "{section.content}"
            </blockquote>
            <cite className="text-text-secondary font-medium">— {section.author}</cite>
          </div>
        );
      
      case 'pullquote':
        return (
          <div key={index} data-animate className={`${baseClasses} my-20 text-center`}>
            <div className="max-w-4xl mx-auto">
              <p className="text-3xl font-light italic text-primary leading-relaxed px-8">
                "{section.content}"
              </p>
              <div className="w-24 h-0.5 bg-primary mx-auto mt-8"></div>
            </div>
          </div>
        );
      
      case 'image':
        return (
          <figure key={index} data-animate className={`${baseClasses} my-16 -mx-4 md:-mx-8 lg:-mx-16`}>
            <img 
              src={section.src} 
              alt={section.alt}
              className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
              loading="lazy"
            />
            {section.caption && (
              <figcaption className="text-sm text-text-secondary italic mt-4 px-4 md:px-8 lg:px-16">
                {section.caption}
              </figcaption>
            )}
          </figure>
        );
      
      case 'text':
        return (
          <div key={index} data-animate className={`${baseClasses} mb-8`}>
            <p className="text-lg leading-relaxed text-text-secondary">
              {section.content}
            </p>
          </div>
        );
      
      case 'conclusion':
        return (
          <div key={index} data-animate className={`${baseClasses} mt-16 mb-12 p-8 bg-background-soft rounded-lg`}>
            <p className="text-lg leading-relaxed text-text-primary font-medium">
              {section.content}
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-background-secondary z-50">
        <div 
          className="h-full bg-primary transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={exhibit.heroImage} 
          alt={exhibit.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-text-primary/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            {exhibit.title}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            {exhibit.subtitle}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1 h-3 bg-white rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* Article header */}
        <header className="mb-16 pb-8 border-b border-ui-secondary">
          <Link to="/exhibitions" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Exhibitions
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-8">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {exhibit.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {exhibit.publishDate}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {exhibit.readTime}
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="prose-custom">
          {exhibit.sections.map((section, index) => renderSection(section, index))}
        </div>

        {/* Article footer */}
        <footer className="mt-20 pt-12 border-t border-ui-secondary">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-text-secondary mb-2">Continue exploring our collection</p>
              <Button asChild variant="outline">
                <Link to="/explore">Browse Artifacts</Link>
              </Button>
            </div>
            <div className="text-center md:text-right">
              <p className="text-text-secondary mb-2">Share this exhibition</p>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Share</Button>
                <Button variant="ghost" size="sm">Save</Button>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};
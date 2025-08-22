import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Menu, X } from "lucide-react";
import { GiGlowingArtifact } from "react-icons/gi";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface HeaderProps {
  onVoiceToggle?: (isActive: boolean) => void;
  isVoiceActive?: boolean;
}

export function Header({ onVoiceToggle, isVoiceActive = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Explore Collection", href: "/explore" },
    { name: "Exhibitions", href: "/exhibitions" },
    { name: "About", href: "/about" },
    { name: "Ethics & Privacy", href: "/ethics" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleVoiceToggle = async () => {
    if (isVoiceActive) {
      onVoiceToggle?.(false);
    } else {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        onVoiceToggle?.(true);
        toast({
          title: "Voice control activated",
          description: "You can now use voice commands.",
        },);
      } catch (error) {
        console.error("Microphone access denied:", error);
        toast({
          title: "Microphone access denied",
          description: "Please enable microphone access in your browser settings to use voice control.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-heading text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
            aria-label="Digital Cultural Heritage Museum - Home"
          >
            <GiGlowingArtifact className="h-8 w-8 text-primary" />
            <span className="hidden sm:inline">Cultural Heritage</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href) 
                    ? "text-primary font-semibold" 
                    : "text-muted-foreground"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Voice Control & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Voice Control Button */}
            <Button
              variant={isVoiceActive ? "default" : "outline"}
              size="sm"
              onClick={handleVoiceToggle}
              className="relative"
              aria-label={isVoiceActive ? "Deactivate voice control" : "Activate voice control"}
              aria-pressed={isVoiceActive}
            >
              {isVoiceActive ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
              <span className={cn(
                "voice-indicator absolute -top-1 -right-1",
                isVoiceActive ? "listening" : "idle"
              )} aria-hidden="true"></span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav 
            className="md:hidden py-4 border-t fade-in"
            role="navigation" 
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
                    isActive(item.href) 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
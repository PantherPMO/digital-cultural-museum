import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: any) => void; // Using 'any' to avoid complex type definitions
  onerror: (event: any) => void;   // Using 'any' to avoid complex type definitions
  onend: () => void;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: {
      new (): ISpeechRecognition;
      prototype: ISpeechRecognition;
    };
    webkitSpeechRecognition: {
      new (): ISpeechRecognition;
      prototype: ISpeechRecognition;
    };
  }
}

interface VoiceControlProps {
  isActive: boolean;
  onToggle: (active: boolean) => void;
}

export function VoiceControl({ isActive, onToggle }: VoiceControlProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleResult = useCallback((event: any) => {
    const currentTranscript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    setTranscript(currentTranscript);
    console.log("Transcript:", currentTranscript);

    if (currentTranscript.startsWith("go to")) {
      const page = currentTranscript.substring(6).replace(/\s/g, "");
      if (page === "home") {
        navigate("/");
      } else {
        navigate(`/${page}`);
      }
    } else if (currentTranscript.includes("scroll down")) {
      window.scrollBy(0, window.innerHeight);
    } else if (currentTranscript.includes("scroll up")) {
      window.scrollBy(0, -window.innerHeight);
    } else if (currentTranscript.includes("go back")) {
      navigate(-1);
    } else if (currentTranscript.includes("go forward")) {
      navigate(1);
    } else if (currentTranscript.includes("tell me more about this website")) {
      toast({
        title: "About the Digital Cultural Heritage Museum",
        description: "This is a modern, voice-controlled digital museum designed to make cultural heritage accessible to everyone. It leverages cutting-edge web technologies to provide an immersive and inclusive experience for exploring artifacts and exhibitions.",
      });
    }
  }, [navigate, toast]);

  const recognition = useMemo(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast({
        variant: "destructive",
        title: "Voice Control Not Supported",
        description: "Your browser does not support the Web Speech API.",
      });
      console.log('SpeechRecognition is not supported in this browser');
      throw new Error('SpeechRecognition is not supported in this browser');
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      let description = `An error occurred: ${event.error}. Please check your microphone and browser permissions.`;
      if (event.error === 'network') {
        description = 'A network error occurred. Please check your internet connection and try again.';
      }
      toast({
        variant: "destructive",
        title: "Speech Recognition Error",
        description,
      });
    };

    recognition.onend = () => {
      if (listening) {
        console.log("Speech recognition ended unexpectedly. Restarting...");
        recognition.start();
      }
    };
    return recognition;
  }, []);
  useEffect(() => {
    recognition.onresult = handleResult;
  }, [recognition, handleResult]);

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  

  useEffect(() => {
    return () => {
      recognition.stop();
    };
  }, [recognition]);

  if (!isActive) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <Card className="p-4 bg-card/95 backdrop-blur shadow-lg border-2 border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className={cn(
              "voice-indicator h-3 w-3 rounded-full",
              listening ? "listening" : "idle"
            )} />
            <span className="text-sm font-medium">
              {listening ? "Listening..." : "Voice Control Inactive"}
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onToggle(false)}
            aria-label="Close voice control"
          >
            <MicOff className="h-4 w-4" />
          </Button>
        </div>

        <div 
          className="mb-4 p-3 bg-muted/50 rounded-md min-h-[3rem] flex items-center"
          role="region"
          aria-live="polite"
          aria-label="Voice command feedback"
        >
          {transcript ? (
            <p className="text-sm">{transcript}</p>
          ) : (
            <p className="text-sm text-muted-foreground italic">
              Say a command...
            </p>
          )}
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Try saying:</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Go to home</Badge>
            <Badge variant="secondary">Scroll down</Badge>
            <Badge variant="secondary">Tell me more about this website</Badge>
            <Badge variant="secondary">Go to explore</Badge>
            <Badge variant="secondary">Go to exhibitions</Badge>
            <Badge variant="secondary">Go to about</Badge>
            <Badge variant="secondary">Go to ethics</Badge>
            <Badge variant="secondary">Go back</Badge>
            <Badge variant="secondary">Go forward</Badge>
            <Badge variant="secondary">Scroll up</Badge>
          </div>
        </div>

        <Button
          className="w-full mb-4"
          onClick={() => (listening ? stopListening() : startListening())}
          aria-label={listening ? "Stop listening" : "Start listening"}
        >
          {listening ? (
            <>
              <MicOff className="h-4 w-4 mr-2" />
              Stop Listening
            </>
          ) : (
            <>
              <Mic className="h-4 w-4 mr-2" />
              Start Listening
            </>
          )}
        </Button>
      </Card>
    </div>
  );
}
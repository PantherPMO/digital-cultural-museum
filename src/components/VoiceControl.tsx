import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface VoiceControlProps {
  isActive: boolean;
  onToggle: (active: boolean) => void;
} 

export function VoiceControl({ isActive, onToggle }: VoiceControlProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const commands = [
    {
      command: 'go to *',
      callback: (page: string) => {
        const pageName = page.toLowerCase().replace(/\s/g, '');
        navigate(`/${pageName}`);
      }
    },
    {
      command: ['scroll down', 'scrolldown'],
      callback: () => {
        console.log('Scrolling down...');
        window.scrollBy(0, window.innerHeight);
      }
    },
    {
      command: ['scroll up', 'scrollup'],
      callback: () => {
        console.log('Scrolling up...');
        window.scrollBy(0, -window.innerHeight);
      }
    },
    {
      command: 'go back',
      callback: () => navigate(-1)
    },
    {
      command: 'go forward',
      callback: () => navigate(1)
    },
    {
        command: 'tell me more about this website',
        callback: () => {
            toast({
                title: 'About the Digital Cultural Heritage Museum',
                description: 'This is a modern, voice-controlled digital museum designed to make cultural heritage accessible to everyone. It leverages cutting-edge web technologies to provide an immersive and inclusive experience for exploring artifacts and exhibitions.',
            })
        }
    }
  ];

  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      toast({
        variant: "destructive",
        title: "Voice Control Not Supported",
        description: "Your browser does not support the Web Speech API.",
      });
    }
  }, [browserSupportsSpeechRecognition, toast]);

  useEffect(() => {
    // Stop listening if the component is unmounted or deactivated.
    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  useEffect(() => {
    if (transcript) {
      console.log('Transcript:', transcript);
    }
  }, [transcript]);

  useEffect(() => {
    console.log('Listening status:', listening);
  }, [listening]);

  if (!isActive) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
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

        <Button
          className="w-full mb-4"
          onClick={() => listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening({ continuous: true })}
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
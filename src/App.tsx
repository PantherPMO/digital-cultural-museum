import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VoiceControl } from "@/components/VoiceControl";
import { Home } from "@/pages/Home";
import { Explore } from "./pages/Explore";
import { Exhibitions } from "./pages/Exhibitions";
import { ExhibitDetail } from "./pages/ExhibitDetail";
import { About } from "./pages/About";
import { Ethics } from "./pages/Ethics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header 
              isVoiceActive={isVoiceActive} 
              onVoiceToggle={setIsVoiceActive} 
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/exhibitions" element={<Exhibitions />} />
              <Route path="/exhibitions/:slug" element={<ExhibitDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/ethics" element={<Ethics />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <VoiceControl 
              isActive={isVoiceActive} 
              onToggle={setIsVoiceActive} 
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

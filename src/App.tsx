import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { useCartSync } from "@/hooks/useCartSync";
import { Layout } from "@/components/layout/Layout";

import Index from "./pages/Index";
import Collection from "./pages/Collection";
import ArtworkDetail from "./pages/ArtworkDetail";
import Artists from "./pages/Artists";
import ArtistDetail from "./pages/ArtistDetail";
import PrintQuality from "./pages/PrintQuality";
import About from "./pages/About";
import Shipping from "./pages/Shipping";
import Care from "./pages/Care";
import Reviews from "./pages/Reviews";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import Bespoke from "./pages/Bespoke";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Checkout from "./pages/Checkout";
import CollectorsCircle from "./pages/CollectorsCircle";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

const queryClient = new QueryClient();

// Cart sync wrapper component
const AppContent = () => {
  useCartSync();

  return <ComingSoon />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { useCartSync } from "@/hooks/useCartSync";
import { Layout } from "@/components/layout/Layout";
import { PasswordGate } from "@/components/PasswordGate";
import Index from "./pages/Index";
import Collection from "./pages/Collection";
import ArtworkDetail from "./pages/ArtworkDetail";
import Artists from "./pages/Artists";
import ArtistDetail from "./pages/ArtistDetail";
import PrintQuality from "./pages/PrintQuality";
import About from "./pages/About";
import Shipping from "./pages/Shipping";
import Care from "./pages/Care";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Cart sync wrapper component
const AppContent = () => {
  useCartSync();
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<ArtistDetail />} />
          <Route path="/print-quality" element={<PrintQuality />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/care" element={<Care />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <PasswordGate>
          <Toaster />
          <Sonner />
          <AppContent />
        </PasswordGate>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

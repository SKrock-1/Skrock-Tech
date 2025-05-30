import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import SKrockAIPlatformDemo from "./pages/demos/skrock-ai-platform";
import BlackboxAIDemo from "./pages/demos/blackbox-ai-editor";
import NeuralOSDemo from "./pages/demos/neural-os";
import QuantumSimulatorDemo from './pages/demos/quantum-simulator';
import EcommerceAnalyticsDemo from './pages/demos/ecommerce-analytics';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skrock-ai-platform" element={<SKrockAIPlatformDemo />} />
                <Route path="/blackbox-ai-editor" element={<BlackboxAIDemo />} />
                <Route path="/neural-os" element={<NeuralOSDemo />} />
                <Route path="/quantum-simulator" element={<QuantumSimulatorDemo />} />
                <Route path="/ecommerce-analytics" element={<EcommerceAnalyticsDemo />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

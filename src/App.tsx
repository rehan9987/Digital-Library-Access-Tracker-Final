import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get base URL from Vite for React Router basename
// Safely handle BASE_URL which might be undefined or empty
const getBaseUrl = () => {
  try {
    const baseUrl = import.meta.env.BASE_URL;
    if (!baseUrl || baseUrl === '/' || baseUrl === '') {
      return '';
    }
    // Remove trailing slash
    return baseUrl.replace(/\/$/, '');
  } catch (error) {
    console.warn('Error getting BASE_URL:', error);
    return '';
  }
};

const baseUrl = getBaseUrl();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={baseUrl}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;

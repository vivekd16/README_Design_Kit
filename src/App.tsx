import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Elements from "./pages/Elements";
import DragDropEditor from "./pages/DragDropEditor";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from './components/ui/sonner'

const queryClient = new QueryClient();

export default function App(){
  return(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="system" storageKey="readme-design-kit-theme">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* page not found route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster richColors />
        <ThemeProvider>
        <BrowserRouter>          
          <Routes>
            {/* Routes with Layout (navbar + footer) */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/elements" element={<Layout><Elements /></Layout>} />
            <Route path="/drag-drop" element={<Layout><DragDropEditor /></Layout>} />
            <Route path="/coming-soon" element={<Layout><ComingSoon /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
};


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useOutletContext } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OrganizationLayout from "./pages/OrganizationLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Campaigns from "./pages/Campaigns";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/next"

const queryClient = new QueryClient();

// Wrapper components to pass organization data from outlet context
const HomeWrapper = () => {
  const { organization } = useOutletContext<{ organization: any }>();
  return <Home organization={organization} />;
};

const AboutWrapper = () => {
  const { organization } = useOutletContext<{ organization: any }>();
  return <About organization={organization} />;
};

const LeadershipWrapper = () => {
  const { organization } = useOutletContext<{ organization: any }>();
  return <Leadership organization={organization} />;
};

const CampaignsWrapper = () => {
  const { organization } = useOutletContext<{ organization: any }>();
  return <Campaigns organization={organization} />;
};

const JoinUsWrapper = () => {
  const { organization } = useOutletContext<{ organization: any }>();
  return <JoinUs organization={organization} />;
};

const ContactWrapper = () => {
  const { organization } = useOutletContext<{ organization: any }>();
  return <Contact organization={organization} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing page for organization selection */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Organization-specific routes */}
          <Route path="/:orgId" element={<OrganizationLayout />}>
            <Route index element={<HomeWrapper />} />
            <Route path="about" element={<AboutWrapper />} />
            <Route path="leadership" element={<LeadershipWrapper />} />
            <Route path="campaigns" element={<CampaignsWrapper />} />
            <Route path="join" element={<JoinUsWrapper />} />
            <Route path="contact" element={<ContactWrapper />} />
          </Route>
          
          {/* Catch-all redirect */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import RolgordijnenPage from "@/pages/rolgordijnen";
import DuoRolgordijnenPage from "@/pages/duo-rolgordijnen";
import RolgordijnenLichtdoorlatendPage from "@/pages/rolgordijnen/lichtdoorlatend";
import RolgordijnenVerduisterendPage from "@/pages/rolgordijnen/verduisterend";
import DuoRolgordijnenLichtdoorlatendPage from "@/pages/duo-rolgordijnen/lichtdoorlatend";
import DuoRolgordijnenVerduisterendPage from "@/pages/duo-rolgordijnen/verduisterend";
import KlassiekeRolgordijnWitPage from "@/pages/rolgordijnen/lichtdoorlatend/klassieke-rolgordijn-wit";
import ModernRolgordijnBeigePage from "@/pages/rolgordijnen/lichtdoorlatend/modern-rolgordijn-beige";
import BlackoutRolgordijnZwartPage from "@/pages/rolgordijnen/verduisterend/blackout-rolgordijn-zwart";
import CartPage from "@/pages/cart";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products/rolgordijnen" component={RolgordijnenPage} />
      <Route path="/products/duo-rolgordijnen" component={DuoRolgordijnenPage} />
      <Route path="/rolgordijnen/lichtdoorlatend" component={RolgordijnenLichtdoorlatendPage} />
      <Route path="/rolgordijnen/verduisterend" component={RolgordijnenVerduisterendPage} />
      <Route path="/duo-rolgordijnen/lichtdoorlatend" component={DuoRolgordijnenLichtdoorlatendPage} />
      <Route path="/duo-rolgordijnen/verduisterend" component={DuoRolgordijnenVerduisterendPage} />
      <Route path="/rolgordijnen/lichtdoorlatend/klassieke-rolgordijn-wit" component={KlassiekeRolgordijnWitPage} />
      <Route path="/rolgordijnen/lichtdoorlatend/modern-rolgordijn-beige" component={ModernRolgordijnBeigePage} />
      <Route path="/rolgordijnen/verduisterend/blackout-rolgordijn-zwart" component={BlackoutRolgordijnZwartPage} />
      <Route path="/cart" component={CartPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

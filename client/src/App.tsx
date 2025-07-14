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
// Lichtdoorlatend products
import KlassiekeRolgordijnWitPage from "@/pages/rolgordijnen/lichtdoorlatend/klassieke-rolgordijn-wit";
import ModernRolgordijnBeigePage from "@/pages/rolgordijnen/lichtdoorlatend/modern-rolgordijn-beige";
import EleganteRolgordijnGrijsPage from "@/pages/rolgordijnen/lichtdoorlatend/elegante-rolgordijn-grijs";
import ComfortabeleRolgordijnCremePage from "@/pages/rolgordijnen/lichtdoorlatend/comfortabele-rolgordijn-creme";
import ExclusieveRolgordijnTerracottaPage from "@/pages/rolgordijnen/lichtdoorlatend/exclusieve-rolgordijn-terracotta";
import NaturalRolgordijnLinnenPage from "@/pages/rolgordijnen/lichtdoorlatend/natural-rolgordijn-linnen";
import DesignRolgordijnZandPage from "@/pages/rolgordijnen/lichtdoorlatend/design-rolgordijn-zand";
import TrendyRolgordijnSagePage from "@/pages/rolgordijnen/lichtdoorlatend/trendy-rolgordijn-sage";
import PremiumRolgordijnPearlPage from "@/pages/rolgordijnen/lichtdoorlatend/premium-rolgordijn-pearl";
import StijlvolleRolgordijnIvoryPage from "@/pages/rolgordijnen/lichtdoorlatend/stijlvolle-rolgordijn-ivory";

// Verduisterend products
import BlackoutRolgordijnZwartPage from "@/pages/rolgordijnen/verduisterend/blackout-rolgordijn-zwart";
import PremiumBlackoutBlauwPage from "@/pages/rolgordijnen/verduisterend/premium-blackout-blauw";
import EleganteBlackoutGrijsPage from "@/pages/rolgordijnen/verduisterend/elegante-blackout-grijs";
import StandaardBlackoutWitPage from "@/pages/rolgordijnen/verduisterend/standaard-blackout-wit";
import CompleteBlackoutBordeauxPage from "@/pages/rolgordijnen/verduisterend/complete-blackout-bordeaux";
import ModerneBlackoutGroenPage from "@/pages/rolgordijnen/verduisterend/moderne-blackout-groen";
import StijlvolleBlackoutPaarsPage from "@/pages/rolgordijnen/verduisterend/stijlvolle-blackout-paars";
import ProfessionalBlackoutCharcoalPage from "@/pages/rolgordijnen/verduisterend/professional-blackout-charcoal";
import DesignerBlackoutMidnightPage from "@/pages/rolgordijnen/verduisterend/designer-blackout-midnight";

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
      {/* Lichtdoorlatend product routes */}
      <Route path="/rolgordijnen/lichtdoorlatend/klassieke-rolgordijn-wit" component={KlassiekeRolgordijnWitPage} />
      <Route path="/rolgordijnen/lichtdoorlatend/modern-rolgordijn-beige" component={ModernRolgordijnBeigePage} />
      <Route path="/rolgordijnen/lichtdoorlatend/elegante-rolgordijn-grijs" component={EleganteRolgordijnGrijsPage} />
      <Route path="/rolgordijnen/lichtdoorlatend/comfortabele-rolgordijn-creme" component={ComfortabeleRolgordijnCremePage} />
      <Route path="/rolgordijnen/lichtdoorlatend/exclusieve-rolgordijn-terracotta" component={ExclusieveRolgordijnTerracottaPage} />
      <Route path="/rolgordijnen/lichtdoorlatend/natural-rolgordijn-linnen" component={NaturalRolgordijnLinnenPage} />
      <Route path="/rolgordijnen/lichtdoorlatend/design-rolgordijn-zand" component={DesignRolgordijnZandPage} />
      <Route path="/rolgordijnen/lichtdoorlatend/trendy-rolgordijn-sage" component={TrendyRolgordijnSagePage} />
      <Route path="/rolgordijnen/lichtdoorlatend/premium-rolgordijn-pearl" component={PremiumRolgordijnPearlPage} />
      <Route path="/rolgordijnen/lichtdoorlatend/stijlvolle-rolgordijn-ivory" component={StijlvolleRolgordijnIvoryPage} />
      
      {/* Verduisterend product routes */}
      <Route path="/rolgordijnen/verduisterend/blackout-rolgordijn-zwart" component={BlackoutRolgordijnZwartPage} />
      <Route path="/rolgordijnen/verduisterend/premium-blackout-blauw" component={PremiumBlackoutBlauwPage} />
      <Route path="/rolgordijnen/verduisterend/elegante-blackout-grijs" component={EleganteBlackoutGrijsPage} />
      <Route path="/rolgordijnen/verduisterend/standaard-blackout-wit" component={StandaardBlackoutWitPage} />
      <Route path="/rolgordijnen/verduisterend/complete-blackout-bordeaux" component={CompleteBlackoutBordeauxPage} />
      <Route path="/rolgordijnen/verduisterend/moderne-blackout-groen" component={ModerneBlackoutGroenPage} />
      <Route path="/rolgordijnen/verduisterend/stijlvolle-blackout-paars" component={StijlvolleBlackoutPaarsPage} />
      <Route path="/rolgordijnen/verduisterend/professional-blackout-charcoal" component={ProfessionalBlackoutCharcoalPage} />
      <Route path="/rolgordijnen/verduisterend/designer-blackout-midnight" component={DesignerBlackoutMidnightPage} />
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

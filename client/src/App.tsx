import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ExamProvider } from "./contexts/ExamContext";
import Home from "./pages/Home";
import ExamPage from "./pages/ExamPage";
import ResultsPage from "./pages/ResultsPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/exam"} component={ExamPage} />
      <Route path={"/results"} component={ResultsPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <ExamProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ExamProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

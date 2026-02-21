import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ExamProvider } from "./contexts/ExamContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import Dashboard from "./pages/Dashboard";
import FlashcardsPage from "./pages/FlashcardsPage";
import RapidRecallPage from "./pages/RapidRecallPage";
import MatchingPage from "./pages/MatchingPage";
import VennPage from "./pages/VennPage";
import ScenarioJustificationPage from "./pages/ScenarioJustificationPage";
import ExamHubPage from "./pages/ExamHubPage";
import ExamPage from "./pages/ExamPage";
import ResultsPage from "./pages/ResultsPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Dashboard} />
      <Route path={"/flashcards"} component={FlashcardsPage} />
      <Route path={"/rapid-recall"} component={RapidRecallPage} />
      <Route path={"/matching"} component={MatchingPage} />
      <Route path={"/venn"} component={VennPage} />
      <Route path={"/scenario-justification"} component={ScenarioJustificationPage} />
      <Route path={"/exam-hub"} component={ExamHubPage} />
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
        <ProgressProvider>
          <ExamProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </ExamProvider>
        </ProgressProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

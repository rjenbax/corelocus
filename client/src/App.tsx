import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ExamProvider } from "./contexts/ExamContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import { MockExamProvider } from "./contexts/MockExamContext";
import BetaGate from "./components/BetaGate";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import FlashcardsPage from "./pages/FlashcardsPage";
import RapidRecallPage from "./pages/RapidRecallPage";
import MatchingPage from "./pages/MatchingPage";
import VennPage from "./pages/VennPage";
import ScenarioJustificationPage from "./pages/ScenarioJustificationPage";
import ExamHubPage from "./pages/ExamHubPage";
import ExamPage from "./pages/ExamPage";
import ResultsPage from "./pages/ResultsPage";
import DailyPracticePage from "./pages/DailyPracticePage";
import PricingPage from "./pages/PricingPage";
import MockExamPage from "./pages/MockExamPage";
import MockExamResultsPage from "./pages/MockExamResultsPage";
import { MockExamHubProvider } from "./contexts/MockExamHubContext";
import MockExamHubLayout from "./components/MockExamHubLayout";
import MockHubDashboard from "./pages/MockHubDashboard";
import MockExamHubPage from "./pages/MockExamHubPage";
import PracticeHubPage from "./pages/PracticeHubPage";
import ReviewHubPage from "./pages/ReviewHubPage";
import AnalyticsHubPage from "./pages/AnalyticsHubPage";
import QuestionBankHubPage from "./pages/QuestionBankHubPage";

// Wrap a component in the BetaGate
function Protected({ component: Component }: { component: React.ComponentType }) {
  return (
    <BetaGate>
      <Component />
    </BetaGate>
  );
}

function HubRouter() {
  const [location] = useLocation();
  // Question view is full-screen (no sidebar) — location is relative inside nest
  if (location === '/exam/question' || location.startsWith('/exam/question')) {
    return <MockExamHubPage />;
  }
  return (
    <MockExamHubLayout>
      <Switch>
        <Route path="/" component={MockHubDashboard} />
        <Route path="/exam" component={MockExamHubPage} />
        <Route path="/practice" component={PracticeHubPage} />
        <Route path="/review" component={ReviewHubPage} />
        <Route path="/analytics" component={AnalyticsHubPage} />
        <Route path="/question-bank" component={QuestionBankHubPage} />
      </Switch>
    </MockExamHubLayout>
  );
}

function Router() {
  return (
    <Switch>
      {/* Public pages — no gate */}
      <Route path={"/"} component={LandingPage} />
      <Route path={"/pricing"} component={PricingPage} />

      {/* Learning platform — all routes behind BetaGate */}
      <Route path={"/dashboard"}>
        {() => <Protected component={Dashboard} />}
      </Route>
      <Route path={"/flashcards"}>
        {() => <Protected component={FlashcardsPage} />}
      </Route>
      <Route path={"/rapid-recall"}>
        {() => <Protected component={RapidRecallPage} />}
      </Route>
      <Route path={"/matching"}>
        {() => <Protected component={MatchingPage} />}
      </Route>
      <Route path={"/venn"}>
        {() => <Protected component={VennPage} />}
      </Route>
      <Route path={"/scenario-justification"}>
        {() => <Protected component={ScenarioJustificationPage} />}
      </Route>
      <Route path={"/exam-hub"}>
        {() => <Protected component={ExamHubPage} />}
      </Route>
      <Route path={"/exam"}>
        {() => <Protected component={ExamPage} />}
      </Route>
      <Route path={"/results"}>
        {() => <Protected component={ResultsPage} />}
      </Route>
      <Route path={"/daily-practice"}>
        {() => <Protected component={DailyPracticePage} />}
      </Route>

      {/* Tier 6 — Mock Exam (native, no external link) */}
      <Route path={"/mock-exam"}>
        {() => <Protected component={MockExamPage} />}
      </Route>
      <Route path={"/mock-results"}>
        {() => <Protected component={MockExamResultsPage} />}
      </Route>
      {/* Tier 6 Hub — full sidebar experience */}
      <Route path={"/mock-hub"} nest>
        {() => (
          <BetaGate>
            <MockExamHubProvider>
              <HubRouter />
            </MockExamHubProvider>
          </BetaGate>
        )}
      </Route>

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
            <MockExamProvider>
              <TooltipProvider>
                <Toaster />
                <Router />
              </TooltipProvider>
            </MockExamProvider>
          </ExamProvider>
        </ProgressProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

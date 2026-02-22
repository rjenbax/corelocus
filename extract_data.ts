import { flashcards } from './client/src/data/flashcards';
import { rapidRecallItems } from './client/src/data/rapidRecall';
import { matchingItems } from './client/src/data/matchingScenarios';
import { vennDiagrams } from './client/src/data/vennDiagrams';
import { scenarioItems } from './client/src/data/scenarioJustification';
import { allQuestions } from './client/src/data/allQuestions';

const data = {
  flashcards,
  rapidRecallItems,
  matchingItems,
  vennDiagrams,
  scenarioItems,
  allQuestions
};

console.log(JSON.stringify(data, null, 2));

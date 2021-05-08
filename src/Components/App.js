import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import GameInstructions from "./GameInstructions";
import QuizPage from "./QuizPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/intructionspage">
        <GameInstructions />
      </Route>
      <Route path="/quizpage">
        <QuizPage />
      </Route>
    </Switch>
  );
};

export default App;

import LandingPage from "./LandingPage";
import QuizPage from "./QuizPage";
import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/quizpage">
        <QuizPage />
      </Route>
    </Switch>
  );
};

export default App;

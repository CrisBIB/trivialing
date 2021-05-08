import React, { useState, useEffect } from "react";
import Header from "./Header";
import api from "../Services/Api";
import Counter from "./Counter";
import Question from "./TriviaQuestions";
import AnswersList from "./AnswersList";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Answer = styled.h3`
  font-size: 1em;
  color: #007787;
  margin: 1em;
`;

const QuizPage = () => {
  const [trivia, setTrivia] = useState({});
  const [fragment, setFragment] = useState("");
  const [answer, setAnswer] = useState("");
  // const [checked, setChecked] = useState({ checked: "false" });
  const [numberCounter, setNumberCounter] = useState(1);
  const [nextStep, setNextStep] = useState("Next question");
  const [questionsAnswered, setQuestionsAnswered] = useState([]);

  useEffect(() => {
    api.trivia().then((dataNumber) => {
      setTrivia(dataNumber);
    });
  }, []);

  useEffect(() => {
    if (trivia.number) {
      api.fragment(trivia.number).then((dataFragment) => {
        setFragment(dataFragment.toUpperCase());
      });
    }
  }, [trivia]);

  //Cuando implemente el contador, la ejecución de estas funciones dependerá de que llegue al tiempo límite.
  const showCorrectAnswer = () => {
    setAnswer(trivia.text);
  };
  const upDateListAnswer = () => {
    setQuestionsAnswered([...questionsAnswered, trivia.text]);
  };

  const upDateCounter = () => {
    let nextNumberCounter;
    if (numberCounter < 10) {
      nextNumberCounter = numberCounter + 1;
    }
    return setNumberCounter(nextNumberCounter);
  };

  const handleButton = (/* unChecked */) => {
    upDateCounter();
    setAnswer("");
    // setChecked(null);
    api.trivia().then((dataNumber) => {
      setTrivia(dataNumber);
    });
    api.fragment(parseInt(trivia.number)).then((dataFragment) => {
      setFragment(dataFragment.toUpperCase());
    });
    if (numberCounter < 9) {
      setNextStep("Next question");
    } else if (numberCounter === 9) {
      setNextStep("Play Again");
    } else {
      setNumberCounter(1);
    }
  };
  return (
    <>
      <Header />
      <Main>
        <Counter counter={numberCounter} />
        <Question
          trivia={trivia}
          text={fragment}
          counter={numberCounter}
          showCorrectAnswer={showCorrectAnswer}
          upDateListAnswer={upDateListAnswer}
        />
        <Answer>{answer}</Answer>
        <button onClick={handleButton}>{nextStep}</button>
        <AnswersList answers={questionsAnswered} trivia={trivia} />
      </Main>
      <Footer />
    </>
  );
};

export default QuizPage;

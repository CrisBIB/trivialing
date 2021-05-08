import React, { useState, useEffect } from "react";
import Header from "./Header";
import api from "../Services/Api";
import Counter from "./Counter";
import Time from "./Time";
import Question from "./TriviaQuestions";
import AnswersList from "./AnswersList";
import Footer from "./Footer";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

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
  const [correctAnswer, setCorrectAnswer] = useState("");
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
    setCorrectAnswer(trivia.text);
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
    setCorrectAnswer("");
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
      setQuestionsAnswered([]);
    }
  };
  return (
    <>
      <Header />
      <Main>
        <Counter counter={numberCounter} />
        <Time />
        <Question
          trivia={trivia}
          text={fragment}
          counter={numberCounter}
          showCorrectAnswer={showCorrectAnswer}
          upDateListAnswer={upDateListAnswer}
        />
        <Answer>{correctAnswer}</Answer>
        <Button onClick={handleButton}>{nextStep}</Button>
        <AnswersList answers={questionsAnswered} trivia={trivia} />
      </Main>
      <Footer />
    </>
  );
};

export default QuizPage;

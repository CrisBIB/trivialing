import React, { useState, useEffect } from "react";
import Header from "./Header";
import api from "../Services/Api";
import Counter from "./Counter";
import Timing from "./Timing";
import Question from "./Question";
import Button from "./Button";
import AnswersList from "./AnswersList";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.main`
  width: 70%;
  padding-top: 3%;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QuizPage = () => {
  const [trivia, setTrivia] = useState({});
  const [fragment, setFragment] = useState("");
  const [inputId, setInputId] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [buttonDisability, setButtonDisability] = useState(true);
  const [numberCounter, setNumberCounter] = useState(1);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);

  useEffect(() => {
    api.trivia().then((dataNumber) => {
      setTrivia(dataNumber);
    });
    setButtonDisability(true);
  }, []);

  useEffect(() => {
    if (trivia.number) {
      const numberToString = trivia.number.toString();
      if (numberToString.includes("+")) {
        api.trivia().then((dataNumber) => {
          setTrivia(dataNumber);
        });
      } else if (typeof trivia.number === NaN) {
        api.trivia().then((dataNumber) => {
          setTrivia(dataNumber);
        });
      } else {
        api.fragment(numberToString).then((dataFragment) => {
          setFragment(dataFragment.toLowerCase());
        });
      }
    }
  }, [trivia]);

  useEffect(() => {
    setButtonDisability(true);
  }, [trivia]);

  useEffect(() => {
    const timeOut = () => {
      setCorrectAnswer(trivia.text);
      setButtonDisability(false);
      upDateListAnswer();
    };
    setTimeout(timeOut, 30000);
  }, [trivia]);

  const upDateListAnswer = () => {
    setQuestionsAnswered([...questionsAnswered, trivia.text]);
  };

  const upDateCounter = () => {
    let nextNumberCounter;
    if (numberCounter < 10) {
      nextNumberCounter = numberCounter + 1;
    } else {
      setNumberCounter(1);
      setQuestionsAnswered([]);
    }
    return setNumberCounter(nextNumberCounter);
  };
  const handleInput = (inputChecked) => {
    setInputId(inputChecked);
  };

  const nextQuestion = () => {
    upDateCounter();
    setCorrectAnswer("");
    api.trivia().then((dataNumber) => {
      setTrivia(dataNumber);
    });
  };

  return (
    <>
      <Header />
      <Main>
        <Counter counter={numberCounter} />
        <Timing trivia={trivia} />
        <Question
          trivia={trivia}
          text={fragment}
          handleInput={handleInput}
          counter={numberCounter}
          correctAnswer={correctAnswer}
        />
        <Button
          counter={numberCounter}
          next={nextQuestion}
          disabled={buttonDisability}
        />
        <AnswersList
          inputId={inputId}
          answers={questionsAnswered}
          trivia={trivia}
          button={buttonDisability}
        />
      </Main>
      <Footer />
    </>
  );
};

export default QuizPage;

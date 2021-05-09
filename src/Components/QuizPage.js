import React, { useState, useEffect } from "react";
import Header from "./Header";
import api from "../Services/Api";
import Counter from "./Counter";
import Timing from "./Timing";
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

const QuizPage = () => {
  const [trivia, setTrivia] = useState({});
  const [fragment, setFragment] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [displaySuccess, setDisplaySuccess] = useState("start");
  const [displayWarning, setDisplayWarning] = useState("start");
  const [displayDanger, setDisplayDanger] = useState("start");
  const [buttonDisability, setButtonDisability] = useState(true);
  const [numberCounter, setNumberCounter] = useState(1);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);

  useEffect(() => {
    api.trivia().then((dataNumber) => {
      setTrivia(dataNumber);
    });
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
          setFragment(dataFragment.toUpperCase());
        });
      }
    }
  }, [trivia]);

  useEffect(() => {
    setButtonDisability(true);
  }, [trivia]);

  const timeOut = () => {
    setCorrectAnswer(trivia.text);
    resetProgressBar();
    setButtonDisability(false);
    upDateListAnswer();
  };
  const nextButton = () => {
    if (numberCounter < 10) {
      return (
        <Button
          variant="info"
          onClick={handleButton}
          disabled={buttonDisability}
        >
          Next question
        </Button>
      );
    } else {
      return (
        <Button disable variant="warning" onClick={handleButton}>
          Play again
        </Button>
      );
    }
  };
  const upDateListAnswer = () => {
    setQuestionsAnswered([...questionsAnswered, trivia.text]);
  };
  const resetProgressBar = () => {
    setDisplaySuccess("start");
    setDisplayWarning("start");
    setDisplayDanger("start");
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

  const handleButton = () => {
    upDateCounter();
    setCorrectAnswer("");
    api.trivia().then((dataNumber) => {
      setTrivia(dataNumber);
    });
    api.fragment(parseInt(trivia.number)).then((dataFragment) => {
      setFragment(dataFragment.toUpperCase());
    });
  };

  return (
    <>
      <Header />
      <Main>
        <Counter counter={numberCounter} />
        <Timing
          trivia={trivia}
          //Averiguar la manera de optimizar este código
          success={displaySuccess}
          warning={displayWarning}
          danger={displayDanger}
          setSuccess={setDisplaySuccess}
          setWarning={setDisplayWarning}
          setDanger={setDisplayDanger}
        />
        <Question
          trivia={trivia}
          text={fragment}
          counter={numberCounter}
          correctAnswer={correctAnswer}
          timeOut={timeOut}
        />
        <div>{nextButton()}</div>
        <AnswersList answers={questionsAnswered} trivia={trivia} />
      </Main>
      <Footer />
    </>
  );
};

export default QuizPage;

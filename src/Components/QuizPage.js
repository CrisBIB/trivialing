import styled from "styled-components";
import Header from "./Header";
import Question from "./Questions";
import Counter from "./Counter";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import api from "../Services/Api";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;

const QuizPage = () => {
  const [question, setQuestion] = useState({});
  const [fragment, setFragment] = useState("");
  const [numberCounter, setNumberCounter] = useState(0);

  useEffect(() => {
    api.question().then((dataNumber) => {
      setQuestion(dataNumber);
    });
  }, []);

  console.log(question);

  useEffect(() => {
    api.fragment(question.number).then((dataFragment) => {
      setFragment(dataFragment.toUpperCase());
    });
  }, [question]);

  console.log(fragment);

  let nextStep = "Siguiente pregunta";

  const upDateCounter = () => {
    const nextNumberCounter = numberCounter + 1;
    return setNumberCounter(nextNumberCounter);
  };

  const handleButton = () => {
    upDateCounter();
    if (numberCounter < 10) {
      api.question().then((dataNumber) => {
        setQuestion(dataNumber);
      });
      api.fragment(question.number).then((dataFragment) => {
        setFragment(dataFragment.toUpperCase());
      });
    } else {
      nextStep = "Jugar de nuevo";
    }
  };

  return (
    <>
      <Header />
      <Main>
        <Counter counter={numberCounter} />
        <Question question={question} text={fragment} counter={numberCounter} />
        <button onClick={handleButton}>{nextStep}</button>
      </Main>
      <Footer />
    </>
  );
};

export default QuizPage;

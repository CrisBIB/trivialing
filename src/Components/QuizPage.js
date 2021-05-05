import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import api from "../Services/Api";
import React, { useState, useEffect } from "react";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;
const Question = styled.h2`
  font-size: 1.5em;
  color: #007787;
  margin: 1em;
`;
const Answer = styled.h3`
  font-size: 1em;
  color: #007787;
  margin: 1em;
`;

const QuizPage = () => {
  const [question, setQuestion] = useState({});
  const [fragment, setFragment] = useState("");

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
  const rightOption = question.number;
  const rightAnswer = question.text;

  const getRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
  };

  return (
    <>
      <Header />
      <Main>
        <Question htmlFor="optionOne">{fragment}</Question>
        <label htmlFor="options">
          <label>{rightOption}</label>
          <input
            type="radio"
            name="options"
            id="optionOne"
            value={rightOption}
          />

          <label htmlFor="optionTwo">{getRandomNumber(1000)}</label>
          <input type="radio" name="options" id="optionTwo" value="" />

          <label htmlFor="optionThree">{getRandomNumber(1000)}</label>
          <input type="radio" name="options" id="optionThree" value="" />

          <label htmlFor="optionFour">{getRandomNumber(1000)}</label>
          <input type="radio" name="options" id="optionFour" value="" />
        </label>

        <Answer>{rightAnswer}</Answer>

        <button>Nueva partida</button>
      </Main>
      <Footer />
    </>
  );
};

export default QuizPage;

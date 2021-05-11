import React, { useState, useEffect } from "react";
import Header from "./Header";
import api from "../Services/Api";
import Counter from "./Counter";
import TimeLine from "./TimeLine";
import Question from "./Question";
import Buttons from "./Buttons";
import AnswersList from "./AnswersList";
import ButtonPlayAgain from "./ButtonPlayAgain";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.main`
  font-size: 2rem;
  width: 90%;
  padding-top: 3%;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
const QuizPage = () => {
  // Data from API states
  const [trivia, setTrivia] = useState({});
  const [fragment, setFragment] = useState("");
  // Questions states
  const [time, setTime] = useState();
  const [inputId, setInputId] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [numberCounter, setNumberCounter] = useState(1);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);
  // Time Line states
  const [displayProgressBar, setDisplayProgressBar] = useState({
    success: "start",
    warning: "start",
    danger: "start",
  });
  /* AQUÍ HAY UN ERROR */
  const [clearProgressBar, setClearProgressBar] = useState({
    success: null,
    warning: null,
    danger: null,
  });
  const [buttonConfirmDisability, setButtonConfirmDisability] = useState(false);
  const [buttonNextDisability, setButtonNextDisability] = useState(true);

  /* AL ARRANCAR LA APP */

  //1. Calls to API effects
  useEffect(() => {
    api.trivia().then((dataNumber) => {
      if (dataNumber.number) {
        setTrivia(dataNumber);
      }
    });
  }, []);

  useEffect(() => {
    if (trivia.number) {
      const numberToString = trivia.number.toString();
      if (numberToString.includes("e")) {
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
    } else {
      api.trivia().then((dataNumber) => {
        setTrivia(dataNumber);
      });
    }
  }, [trivia]);

  //2. Cronómetro
  useEffect(() => {
    const countDown = () => {
      confirmAnswer();
    };
    setTime(setTimeout(countDown, 15000));
  }, [trivia]);

  //3. Time Line effects
  useEffect(() => {
    playProgressBar();
  }, [trivia]);

  //Acciono la línea de tiempo
  const playProgressBar = () => {
    const successProgress = () => {
      setDisplayProgressBar({
        success: "end animation",
        warning: "start",
        danger: "start",
      });
    };
    const warningProgress = () => {
      setDisplayProgressBar({
        success: "end animation",
        warning: "end animation",
        danger: "start",
      });
    };
    const dangerProgress = () => {
      setDisplayProgressBar({
        success: "end animation",
        warning: "end animation",
        danger: "end animation",
      });
    };
    setClearProgressBar(
      { success: setTimeout(successProgress, 0) },
      { warning: setTimeout(warningProgress, 5000) },
      { danger: setTimeout(dangerProgress, 10000) }
    );
  };

  // Definición de funciones manejadoras
  const handleInput = (inputChecked) => {
    setInputId(inputChecked);
  };
  const confirmAnswer = () => {
    clearTimeout(time);
    resetProgressBar();
    setCorrectAnswer(trivia.text);
    setQuestionsAnswered([...questionsAnswered, trivia.text]);
    setButtonConfirmDisability(true);
    setButtonNextDisability(false);
  };
  const nextQuestion = () => {
    upDateCounter();
    playProgressBar();
    setCorrectAnswer("");
    setButtonConfirmDisability(false);
    setButtonNextDisability(true);
    setInputId(0);
    api.trivia().then((dataNumber) => {
      setTrivia(dataNumber);
    });
  };
  const upDateCounter = () => {
    let nextNumberCounter;
    if (numberCounter < 10) {
      nextNumberCounter = numberCounter + 1;
    } else {
      nextNumberCounter = 1;
    }
    return setNumberCounter(nextNumberCounter);
  };

  //Reseteo la línea de tiempo
  const resetProgressBar = () => {
    setDisplayProgressBar({
      success: "start",
      warning: "start",
      danger: "start",
    });
    clearTimeout(clearProgressBar.success);
    clearTimeout(clearProgressBar.warning);
    clearTimeout(clearProgressBar.danger);
  };
  return (
    <>
      <Header />
      <Main>
        <Counter counter={numberCounter} />
        <TimeLine progressBar={displayProgressBar} />
        <Question
          trivia={trivia}
          text={fragment}
          handleInput={handleInput}
          counter={numberCounter}
          correctAnswer={correctAnswer}
        />
        <Buttons
          counter={numberCounter}
          confirm={confirmAnswer}
          next={nextQuestion}
          disabledConfirm={buttonConfirmDisability}
          disabledNext={buttonNextDisability}
        />
        <AnswersList
          inputId={inputId}
          answers={questionsAnswered}
          trivia={trivia}
        />
        <ButtonPlayAgain counter={numberCounter} playAgain={upDateCounter} />
      </Main>
      <Footer />
    </>
  );
};

export default QuizPage;

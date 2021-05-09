import React, { useEffect } from "react";
import RandomInputs from "./RandomInputs";
import CorrectInput from "./CorrectInput";
import styled from "styled-components";

const Form = styled.form`
  font-size: 1.5em;
  color: #007787;
  margin: 1em;
`;
const Container = styled.div`
  font-size: 0.8em;
  display: grid;
  color: black;
  grid-template-columns: 1fr 1fr;
  margin: 1em;
`;
const Answer = styled.h3`
  font-size: 1em;
  color: #007787;
  margin: 1em;
`;

const Question = (props) => {
  useEffect(() => {
    const timeOut = () => {
      props.timeOut();
    };
    setTimeout(timeOut, 30000);
  }, [props.trivia]);

  /* Averiguar como evitar que se quede checkado el input marcado de la pregunta anterior. Posible arreglo utilizando otro sistema de marcado (fav)*/
  return (
    <>
      <Form>
        <label htmlFor="options">
          {props.text}
          {/* Averiguar cómo colocar los inputs de manera aleatoria */}
          <Container>
            <RandomInputs trivia={props.trivia} />
            <RandomInputs trivia={props.trivia} />
            <CorrectInput trivia={props.trivia} />
            <RandomInputs trivia={props.trivia} />
          </Container>
        </label>
      </Form>
      <Answer>{props.correctAnswer}</Answer>
    </>
  );
};

export default Question;

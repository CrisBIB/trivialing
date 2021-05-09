import RandomInputs from "./RandomInputs";
import CorrectInput from "./CorrectInput";
import styled from "styled-components";

const Form = styled.form`
  color: #007787;
  margin: 1em;
  text-align: center;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const Label = styled.label`
  width: 90%;
  align-items: center;
`;
const Container = styled.div`
  display: grid;
  color: black;
  grid-template-columns: 70% 30%;
  margin: 1em;
`;
const Answer = styled.div`
  margin: 2em;
  margin-top: 0;
  text-align: center;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 4%;
`;
const Question = (props) => {
  /* Averiguar como evitar que se quede checkado el input marcado de la pregunta anterior. Posible arreglo utilizando otro sistema de marcado (fav)*/
  return (
    <>
      <Form>
        <Label htmlFor="options">
          What is {props.text}?
          {/* Averiguar cómo colocar los inputs de manera aleatoria */}
          <Container>
            <RandomInputs
              trivia={props.trivia}
              handleInput={props.handleInput}
            />
            <RandomInputs
              trivia={props.trivia}
              handleInput={props.handleInput}
            />
            <CorrectInput
              trivia={props.trivia}
              handleInput={props.handleInput}
            />
            <RandomInputs
              trivia={props.trivia}
              handleInput={props.handleInput}
            />
          </Container>
        </Label>
      </Form>
      <Answer>
        <Paragraph>The correct answer is...</Paragraph>
        <Paragraph>{props.correctAnswer}</Paragraph>
      </Answer>
    </>
  );
};

export default Question;

import styled from "styled-components";
import RandomInputs from "./RandomInputs";
import CorrectInput from "./CorrectInput";

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

const Question = (props) => {
  /* Averiguar como evitar que se quede checkado el input marcado de la pregunta anterior. Posible arreglo utilizando otro sistema de marcado (fav)*/
  return (
    <Form>
      <label htmlFor="options">
        {props.text}
        {/* Averiguar cómo colocar los inputs de manera aleatoria */}
        <Container>
          <RandomInputs trivia={props.trivia} />
          <RandomInputs trivia={props.trivia} />
          <CorrectInput trivia={props.trivia} rightAnswer={props.rightAnswer} />
          <RandomInputs trivia={props.trivia} />
        </Container>
      </label>
    </Form>
  );
};

export default Question;

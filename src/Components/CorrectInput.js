import styled from "styled-components";

const Input = styled.input`
  margin-right: 8px;
  margin-left: 0px;
`;

const Label = styled.label`
  text-align: left;
`;

const CorrectInput = (props) => {
  const rightOption = parseInt(props.trivia.number);
  const rightOptionValue = props.trivia.number;

  //Esta función me servirá para guardar en el estado las respuestas correctas que se den, y pintarlas en verdes en el listado de preguntas contestadas.
  const handleInput = (ev) => {
    const inputId = parseInt(ev.target.id);
    props.handleInput(inputId);
  };
  return (
    <Label>
      <Input
        onChange={handleInput}
        type="radio"
        name="options"
        id={rightOptionValue}
        value=""
      />{" "}
      {rightOption}
    </Label>
  );
};

export default CorrectInput;

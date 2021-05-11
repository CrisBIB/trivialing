import styled from "styled-components";

const Input = styled.input`
  margin-right: 8px;
  margin-left: 0px;
`;

const Label = styled.label`
  text-align: left;
`;

const CorrectInput = (props) => {
  const rightOption = props.trivia.number;

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
        id={rightOption}
        value=""
     
      />{" "}
      {rightOption}
    </Label>
  );
};

export default CorrectInput;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-right: 8px;
`;

const Label = styled.label`
  text-align: left;
`;

const RandomInputs = (props) => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.ceil(Math.random() * 10000));
  }, [props.trivia]);

  const handleInput = (ev) => {
    const inputId = parseInt(ev.target.id);
    props.handleInput(inputId);
  };

  return (
    <Label>
      <Input
        onChange={handleInput}
        value=""
        id={randomNumber}
        type="radio"
        name="options"
      />
      {randomNumber}
    </Label>
  );
};

export default RandomInputs;

import React, { useState, useEffect } from "react";
import RandomInputs from "./RandomInputs";
import CorrectInput from "./CorrectInput";
import styled from "styled-components";

const Form = styled.form`
  color: #007787;
  margin: 1em;
  text-align: center;
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
const Label = styled.label`
  align-items: center;
`;
const List = styled.ul`
  display: grid;
  color: black;
  grid-template-columns: auto auto;
  margin: 1em;
  margin-left: 25%;
  list-style: none;
  text-align: left;
  padding: 0;
`;
const ListItems = styled.li``;
const Answer = styled.div`
  text-align: center;
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;
const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 4%;
`;
const Question = (props) => {
  const [inputsSorted, setInputsSorted] = useState([]);
  const inputsArray = [
    {
      id: Math.ceil(Math.random() * 10000),
      input: (
        <RandomInputs trivia={props.trivia} handleInput={props.handleInput} />
      ),
    },
    {
      id: Math.ceil(Math.random() * 10000),
      input: (
        <RandomInputs trivia={props.trivia} handleInput={props.handleInput} />
      ),
    },
    {
      id: Math.ceil(Math.random() * 10000),
      input: (
        <CorrectInput
          key={Math.ceil(Math.random() * 10000)}
          trivia={props.trivia}
          handleInput={props.handleInput}
        />
      ),
    },
    {
      id: Math.ceil(Math.random() * 10000),
      input: (
        <RandomInputs trivia={props.trivia} handleInput={props.handleInput} />
      ),
    },
  ];
  useEffect(() => {
    const compareObjects = (object1, object2, key) => {
      const obj1 = object1[key];
      const obj2 = object2[key];

      if (obj1 < obj2) {
        return -1;
      }
      if (obj1 > obj2) {
        return 1;
      }
      return 0;
    };

    inputsArray.sort((input1, input2) => {
      return compareObjects(input1, input2, "id");
    });
    setInputsSorted(inputsArray);
  }, [props.trivia]);

  const randomInputsPosition = inputsSorted.map((input) => {
    return <ListItems key={input.id}>{input.input}</ListItems>;
  });
  return (
    <>
      <Form>
        <Label htmlFor="options">
          What is {props.text}?<List>{randomInputsPosition}</List>
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

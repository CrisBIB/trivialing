import React, { useState, useEffect } from "react";
import correctIcon from "../Images/Correct_Icon.jpeg";
import incorrectIcon from "../Images/Incorrect_Icon.jpeg";
import styled from "styled-components";

const Title = styled.h3`
  color: #007787;
  text-align: center;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const List = styled.ul`
  list-style: none;
  padding-right: 3%;
  margin-right: 2%;
`;
const Item = styled.li`
  display: flex;
  padding-top: 4%;
  border-bottom: 1px solid #3f3f3f;
`;
const Image = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 4%;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const Answer = styled.p`
  text-align: center;
  margin-bottom: 4%;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const Div = styled.div``;

const AnswersList = (props) => {
  const [iconsArray, setIconsArray] = useState([]);

  useEffect(() => {
    if (props.inputId && !props.inputId.toString().includes("+")) {
      props.trivia.number === props.inputId
        ? setIconsArray([...iconsArray, correctIcon])
        : setIconsArray([...iconsArray, incorrectIcon]);
    }
  }, [props.answers]);

  const listItems = props.answers.map((answer, index) => {
    return (
      <Item key={index}>
        <Div>
          <Paragraph>
            <Image src={iconsArray[index + 1]} />
            Question {index + 1}
          </Paragraph>
          <Answer>{answer}</Answer>
        </Div>
      </Item>
    );
  });
  return (
    <div>
      <Title>Take a look to your results:</Title>
      <List>{listItems}</List>;
    </div>
  );
};

export default AnswersList;

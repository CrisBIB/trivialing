import React, { useState, useEffect } from "react";
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
  const listItems = props.answers.map((answer, index) => {
    return (
      <Item key={index}>
        <Div>
          <Paragraph>
            <Image /* src={props.iconsArray[index]} */ />
            Question {index + 1}:
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

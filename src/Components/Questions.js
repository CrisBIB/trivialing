import styled from "styled-components";

const Fragment = styled.h2`
  font-size: 1.5em;
  color: #007787;
  margin: 1em;
`;
const Answer = styled.h3`
  font-size: 1em;
  color: #007787;
  margin: 1em;
`;

const Question = (props) => {
  const rightOption = props.question.number;
  const rightAnswer = props.question.text;

  const getRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
  };

  return (
    <>
      <Fragment htmlFor="optionOne">{props.text}</Fragment>
      <label htmlFor="options">
        <label>{rightOption}</label>
        <input type="radio" name="options" id="optionOne" value={rightOption} />

        <label htmlFor="optionTwo">{getRandomNumber(1000)}</label>
        <input type="radio" name="options" id="optionTwo" value="" />

        <label htmlFor="optionThree">{getRandomNumber(1000)}</label>
        <input type="radio" name="options" id="optionThree" value="" />

        <label htmlFor="optionFour">{getRandomNumber(1000)}</label>
        <input type="radio" name="options" id="optionFour" value="" />
      </label>

      <Answer>{rightAnswer}</Answer>
    </>
  );
};

export default Question;

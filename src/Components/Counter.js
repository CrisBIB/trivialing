import styled from "styled-components";

const Small = styled.small`
  font-size: 20px;
  color: #007787;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Counter = (props) => {
  return (
    <div>
      <Small> Question {props.counter} of 10</Small>
    </div>
  );
};

export default Counter;

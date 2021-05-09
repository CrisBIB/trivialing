import styled from "styled-components";

const Small = styled.small`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
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

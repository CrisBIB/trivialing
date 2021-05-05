import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;
const Question = styled.h2`
  font-size: 1.5em;
  color: #007787;
  margin: 1em;
`;
const Answer = styled.h3`
  font-size: 1em;
  color: #007787;
  margin: 1em;
`;

const QuizPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Question></Question>

        <Answer></Answer>

        <button>Nueva partida</button>
      </Main>
      <Footer />
    </>
  );
};

export default QuizPage;

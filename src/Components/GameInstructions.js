import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.main`
  background: #007787;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;
`;

const GameInstructions = () => {
  return (
    <>
      <Header />
      <Main>
        <h1> Wellcome to the amazing world of numbers</h1>
        <p></p>
        <Link to="/quizpage">START GAME</Link>
      </Main>
      <Footer />
    </>
  );
};

export default GameInstructions;

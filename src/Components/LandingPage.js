import styled from "styled-components";
import logoTrivialis from "../Images/Trivialis2.png";
import { Link } from "react-router-dom";
import FooterApp from "./Footer";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;
`;
const Container = styled.div`
  display: flex;
`;
const Title = styled.h1`
  font-size: 3em;
  margin-top: 1em;
  color: #007787;
`;
const Image = styled.img`
  width: 30%;
  display: inline-block;
  position: absolute;
  right: 5px;
  top: 80px;
  z-index: -1;
`;
const Subtitle = styled.h2`
  font-size: 1.7em;
  text-align: center;
  margin-top: 1em;
  color: #007787;
`;

const LandingPage = () => {
  return (
    <>
      <Main>
        <Container>
          <Title>TRIVIALIS</Title>
          <Image
            title="Logo Trivialis"
            src={logoTrivialis}
            alt="logo-trivialis"
          />
        </Container>
        <Subtitle>Welcome to Trivialis number quiz</Subtitle>
        <div>
          <div>
            <Link to="/quizpage">READY?</Link>
          </div>
        </div>
      </Main>
      <FooterApp />
    </>
  );
};

export default LandingPage;

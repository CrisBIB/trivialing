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
const Title = styled.h1`
  font-size: 3em;
  color: #007787;
`;
const Image = styled.img`
  width: 30%;
  display: inline-block;
`;

const LandingPage = () => {
  return (
    <>
      <Main>
        <Image
          title="Logo Trivialis"
          src={logoTrivialis}
          alt="logo-trivialis"
        />
        <Title>TRIVIALIS</Title>

        <h2>Welcome to Trivialis number quiz</h2>
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

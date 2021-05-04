import styled from "styled-components";
import logoTrivialis from "../Images/Trivialis.gif";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const LandingPage = () => {
  const Main = styled.main`
    background: #5fc2d9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 90vh;
  `;
  const Title = styled.h1`
    font-size: 3em;
    color: white;
  `;
  const Image = styled.img`
    width: 30%;
    display: inline-block;
  `;

  return (
    <>
      <Main>
        <Title>TRIVIALIS</Title>
        <Image
          title="Logo Trivialis"
          src={logoTrivialis}
          alt="logo-trivialis"
        />

        <h2>Welcome to Trivialis number quiz</h2>

        <div>
          <div>
            <Link to="/quizpage">READY?</Link>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default LandingPage;

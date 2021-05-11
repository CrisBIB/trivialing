import logoTrivialis from "../Images/Trivialis2.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

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
  top: 70px;
  z-index: -1;
`;
const Subtitle = styled.h2`
  font-size: 1.7em;
  text-align: center;
  margin-top: 1em;
  color: #007787;
`;

const Text = styled.h3`
  font-size: 1.5em;
  text-align: center;
  margin-top: 0em;
  color: #e685c3s;
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
        <Subtitle>Wellcome to the amazing world of numbers!</Subtitle>
        <div>
          {/*Hacer un colapsable*/}
          <Text>Ver instrucciones</Text>
        </div>
        <Button
          variant="warning"
          className="btn btn-success"
          style={{ marginBottom: 30 }}
        >
          <Link
            to="/quizpage"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            READY TO QUIZ?
          </Link>
        </Button>
      </Main>
      <Footer />
    </>
  );
};

export default LandingPage;

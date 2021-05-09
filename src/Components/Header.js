import logoTrivialis from "../Images/Trivialis2.png";
import styled from "styled-components";

const HeaderApp = styled.header`
  height: 15vh;
  @media (max-width: 768px) {
    height: 10vh;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8em;
  border-bottom: solid 1px #007787;
`;
const Title = styled.h1`
  font-size: 3em;
  color: #007787;
  margin-top: 0.8em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
const Image = styled.img`
  text-align: right;
  @media (max-width: 768px) {
    width: 10%;
  }
  width: 5%;
`;

const Header = () => {
  return (
    <HeaderApp>
      <Container>
        <Title>TRIVIALIS</Title>

        <Image
          title="Logo Trivialis"
          src={logoTrivialis}
          alt="logo_trivialis"
        />
      </Container>
    </HeaderApp>
  );
};

export default Header;

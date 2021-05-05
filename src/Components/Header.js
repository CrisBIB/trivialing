import logoTrivialis from "../Images/Trivialis2.png";
import styled from "styled-components";

const HeaderApp = styled.header`
  height: 10vh;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8em;
  border-bottom: solid 1px #007787;
`;
const Title = styled.h1`
  font-size: 1em;
  color: #007787;
  margin-top: 0.8em;
`;
const Image = styled.img`
  width: 10%;
  text-align: right;
`;

const Header = () => {
  return (
    <HeaderApp>
      <Container>
        <Title>TRIVIALIS</Title>

        <Image
          title="Logo Trivialis"
          src={logoTrivialis}
          alt="logo-trivialis"
        />
      </Container>
    </HeaderApp>
  );
};

export default Header;

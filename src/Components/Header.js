import logoTrivialis from "../Images/Trivialis2.png";
import styled from "styled-components";

const HeaderApp = styled.header`
  height: rem(111);
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8em 0;
  border-bottom: solid 1px #007787;
`;
const Title = styled.h1`
  font-size: 2em;
  color: #007787;
  margin-top: 1em;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`;
const Image = styled.img`
  text-align: right;
  width: 18%;
  @media (min-width: 768px) {
    width: 8%;
  }
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

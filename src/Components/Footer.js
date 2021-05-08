import styled from "styled-components";
import logoReact from "../Images/react.png";

const Footer = styled.footer`
  background: black;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 90%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const React = styled.img`
  width: 25px;
`;

const FooterApp = () => {
  return (
    <Footer>
      <small>CrisBIB &copy; 2021</small>
      <Container>
        <small>Powered by</small>
        <a href="https://es.reactjs.org/" target="_blank">
          <React src={logoReact} title="Logo React" alt="logo-reactjs" />
        </a>
      </Container>
    </Footer>
  );
};

export default FooterApp;

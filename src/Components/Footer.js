import styled from "styled-components";
import logoReact from "../Images/react.png";

const Footer = styled.footer`
  font-size: 1rem;
  height: 3rem;
  padding: 20px;
  border-top: solid 1px #007787;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  vertical-align: baseline;
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

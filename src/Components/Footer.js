import styled from "styled-components";
import logoReact from "../Images/react.png";

const Footer = styled.footer`
  background: black;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const Small = styled.small``;
const React = styled.img`
  width: 25px;
`;

const FooterApp = () => {
  return (
    <Footer>
      <Small>CrisBIB &copy; 2021</Small>
      <div>
        <small>Powered by</small>
        <a href="https://es.reactjs.org/" target="_blank">
          <React src={logoReact} title="Logo React" alt="logo-reactjs" />
        </a>
      </div>
    </Footer>
  );
};

export default FooterApp;

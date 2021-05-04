import logoReact from "../Images/react.ico";

const Footer = () => {
  return (
    <footer>
      <div>
        <small>CrisBIB &copy; 2021</small>
        <a href="https://es.reactjs.org/" target="_blank">
          Powered by
          <img src={logoReact} title="Logo React" alt="logo-reactjs" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import logoTrivialis from "../images/Trivialis.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img
            title="Logo Trivialis"
            src={logoTrivialis}
            alt="logo-trivialis"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

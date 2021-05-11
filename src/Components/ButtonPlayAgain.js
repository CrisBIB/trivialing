import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ButtonPlayAgain = (props) => {
  const handleButton = () => {
    props.playAgain();
  };
  if (props.counter === 10) {
    return (
      <Button
        style={{ color: "#fff", marginBottom: 30 }}
        variant="warning"
        onClick={handleButton}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          Play Again!
        </Link>
      </Button>
    );
  }
  return <></>;
};
export default ButtonPlayAgain;

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
        Play Again
      </Button>
    );
  }
  return <></>;
};
export default ButtonPlayAgain;

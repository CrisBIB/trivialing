import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Buttons = (props) => {
  const handleButtonConfirm = () => {
    props.confirm();
  };
  const handleButtonNext = () => {
    props.next();
  };

  if (props.counter < 10) {
    return (
      <Container>
        <Button
          style={{ color: "#fff", margin: 10, width: 250 }}
          variant="warning"
          onClick={handleButtonConfirm}
          disabled={props.disabledConfirm}
        >
          Confirm answer
        </Button>
        <Button
          style={{ color: "#fff", margin: 10, width: 250 }}
          variant="warning"
          onClick={handleButtonNext}
          disabled={props.disabledNext}
        >
          Next question
        </Button>
      </Container>
    );
  }

  return <></>;
};
export default Buttons;

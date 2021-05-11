import ProgressBar from "react-bootstrap/ProgressBar";
import "../Styles/time.scss";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  text-align: center;
  margin: 5%;
  @media (min-width: 768px) {
    margin: 2%;
  }
`;
const TimeLine = (props) => {
  return (
    <Container>
      <ProgressBar>
        <ProgressBar
          className={props.progressBar.success}
          striped
          variant="success"
          animated
          key={1}
        />
        <ProgressBar
          className={props.progressBar.warning}
          variant="warning"
          animated
          key={2}
        />
        <ProgressBar
          className={props.progressBar.danger}
          striped
          variant="danger"
          animated
          key={3}
        />
      </ProgressBar>
    </Container>
  );
};

export default TimeLine;

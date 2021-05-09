import React, { useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../Styles/time.scss";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  text-align: center;
`;

const Timing = (props) => {
  useEffect(() => {
    props.setSuccess("end animation");
    const warningProgress = () => {
      props.setWarning("end animation");
    };
    setTimeout(warningProgress, 10000);
    const dangerProgress = () => {
      props.setDanger("end animation");
    };
    setTimeout(dangerProgress, 20000);
  }, [props.trivia]);

  return (
    <Container>
      <label>Timing</label>
      <ProgressBar>
        <ProgressBar
          className={`${props.success}`}
          striped
          variant="success"
          animated
          key={1}
        />
        <ProgressBar
          className={`${props.warning}`}
          variant="warning"
          animated
          key={2}
        />
        <ProgressBar
          className={`${props.danger}`}
          striped
          variant="danger"
          animated
          key={3}
        />
      </ProgressBar>
    </Container>
  );
};

export default Timing;

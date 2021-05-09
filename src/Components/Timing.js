import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../Styles/time.scss";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  text-align: center;
  margin: 5%;
`;
const Timing = (props) => {
  const [displaySuccess, setDisplaySuccess] = useState("start");
  const [displayWarning, setDisplayWarning] = useState("start");
  const [displayDanger, setDisplayDanger] = useState("start");

  useEffect(() => {
    const successProgress = () => {
      setDisplaySuccess("end animation");
    };
    setTimeout(successProgress, 0);
    const warningProgress = () => {
      setDisplayWarning("end animation");
    };
    setTimeout(warningProgress, 10000);
    const dangerProgress = () => {
      setDisplayDanger("end animation");
    };
    setTimeout(dangerProgress, 20000);
    const resetProgressBar = () => {
      setDisplaySuccess("start");
      setDisplayWarning("start");
      setDisplayDanger("start");
    };
    setTimeout(resetProgressBar, 30000);
  }, [props.trivia]);

  return (
    <Container>
      <ProgressBar>
        <ProgressBar
          className={displaySuccess}
          striped
          variant="success"
          animated
          key={1}
        />
        <ProgressBar
          className={displayWarning}
          variant="warning"
          animated
          key={2}
        />
        <ProgressBar
          className={displayDanger}
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

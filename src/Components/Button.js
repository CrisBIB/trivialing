import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
const ButtonApp = (props) => {
  const handleButton = () => {
    props.next();
  };
  const nextStepButton = () => {
    if (props.counter < 10) {
      return (
        <Button
          style={{ color: "#fff", marginBottom: 30 }}
          variant="warning"
          onClick={handleButton}
          disabled={props.disabled}
        >
          Next question
        </Button>
      );
    }
  };
  return <div>{nextStepButton()}</div>;
};
export default ButtonApp;

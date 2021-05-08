import React from "react";

const RandomInputs = React.memo((props) => {
  const getRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
  };

  return (
    <>
      <label>
        {getRandomNumber(1000)}
        <input
          type="radio"
          name="options"
          id="options"
          value=""
          id={getRandomNumber(1000)}
        ></input>
      </label>
    </>
  );
});

export default RandomInputs;

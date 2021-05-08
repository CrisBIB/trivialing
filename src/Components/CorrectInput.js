const CorrectInput = (props) => {
  const rightOption = props.trivia.number;

  const handleInput = (ev) => {
    const checked = ev.target.checked;
    props.rightAnswer(checked);
  };
  return (
    <label>
      {rightOption}
      <input
        onChange={handleInput}
        type="radio"
        name="options"
        id={rightOption}
        // checked={props.unChecked}
      />
    </label>
  );
};

export default CorrectInput;

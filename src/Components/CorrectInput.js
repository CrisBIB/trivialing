const CorrectInput = (props) => {
  const rightOption = parseInt(props.trivia.number);
  const rightOptionId = props.trivia.number;

  //Esta función me servirá para guardar en el estado las respuestas correctas que se den, y pintarlas en verdes en el listado de preguntas contestadas.
  const handleInput = (ev) => {
    const checked = ev.target.value;
  };
  return (
    <label>
      {rightOption}
      <input
        onChange={handleInput}
        type="radio"
        name="options"
        id={rightOptionId}
        // checked={props.unChecked}
      />
    </label>
  );
};

export default CorrectInput;

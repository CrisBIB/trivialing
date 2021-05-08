const CorrectInput = (props) => {
  const rightOption = parseInt(props.trivia.number);
  const rightOptionId = props.trivia.number;

  //Esta función me servirá para guardar en el estado las respuestas correctas que se den, y pintarlas en verdes en el listado de preguntas contestadas. Lo que hará que se muestra la respuesta correcta y que se actualice el listado de respuesta, será el límite de tiempo.
  const handleInput = () => {
    //const checked = ev.target.checked;
    props.showCorrectAnswer(/* //checked */);
    props.upDateListAnswer();
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

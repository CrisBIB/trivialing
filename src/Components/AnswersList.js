const AnswersList = (props) => {
  const list = props.answers.map((answer) => {
    <li key={props.trivia.number}>{answer}</li>;
  });
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default AnswersList;

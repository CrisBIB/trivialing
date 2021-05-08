const AnswersList = (props) => {
  console.log(props);
  const list = props.answers.map((answer) => {
    return <li>{answer}</li>;
  });
  return <ol>{list}</ol>;
};

export default AnswersList;

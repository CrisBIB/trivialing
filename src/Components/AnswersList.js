const AnswersList = (props) => {
  console.log(props);
  const list = props.answers.map((answer, index) => {
    return <li key={index}>{answer}</li>;
  });
  return <ol>{list}</ol>;
};

export default AnswersList;

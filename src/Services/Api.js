const getRandomNumberFromApi = () => {
  return fetch(`http://numbersapi.com/random/trivia?json`)
    .then((response) => response.json())
    .then((dataApi) => {
      return dataApi;
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
};

const getFragmentNumberFromApi = (number) => {
  return fetch(`http://numbersapi.com/${number}/trivia?fragment`)
    .then((response) => response.text())
    .then((dataApi) => {
      return dataApi;
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
};

export default {
  trivia: getRandomNumberFromApi,
  fragment: getFragmentNumberFromApi,
};

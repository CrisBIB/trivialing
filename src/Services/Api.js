const getRandomNumberFromApi = () => {
  return fetch(`//numbersapi.com/random/trivia?json`)
    .then((response) => response.json())
    .then((dataApi) => {
      console.log(dataApi);
      return dataApi;
    });
};
const getFragmentNumberFromApi = (number) => {
  return fetch(`//numbersapi.com/${number}/trivia?fragment`)
    .then((response) => response.text())
    .then((dataApi) => {
      console.log(dataApi);
      return dataApi;
    });
};

export default {
  trivia: getRandomNumberFromApi,
  fragment: getFragmentNumberFromApi,
};

const getRandomNumberFromApi = () => {
  return fetch("//numbersapi.com/random/trivia?json")
    .then((response) => response.json())
    .then((dataApi) => {
      console.log(dataApi);
      return dataApi;
    })
    .catch((errorRandomNumber) =>
      console.log(`Ha sucedido un error: ${errorRandomNumber}`)
    );
};

const getFragmentNumberFromApi = (number) => {
  return fetch(`//numbersapi.com/${number}/trivia?fragment`)
    .then((response) => response.text())
    .then((dataApi) => {
      console.log(dataApi);
      return dataApi;
    })
    .catch((errorFragmentNumber) =>
      console.log(`Ha sucedido un error: ${errorFragmentNumber}`)
    );
};

export default {
  trivia: getRandomNumberFromApi,
  fragment: getFragmentNumberFromApi,
};

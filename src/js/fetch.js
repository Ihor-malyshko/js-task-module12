function getCountry(name) {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export default getCountry;

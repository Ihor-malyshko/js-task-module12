import ListTemplate from '../templates/list-countries.hbs';
import countryTemplate from '../templates/country.hbs';

const refs = {
  country: document.querySelector('.country'),
  findCountry: document.querySelector('.find-country'),
  listCountries: document.querySelector('.list-countries'),
};

const name = 'sw';

getCountry(name);

function getCountry(name) {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.length > 10) {
        console.log('error');
      }
      if (1 < data.length && data.length < 10) {
        const markup = ListTemplate(data);
        refs.listCountries.insertAdjacentHTML('beforeend', markup);
      }
      if (data.length === 1) {
        const markup = countryTemplate(data);
        refs.country.insertAdjacentHTML('beforeend', markup);
      }
      if (data.length < 1) {
        console.log('no');
      }
    })
    .catch(error => console.log(error));
}

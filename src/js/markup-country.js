import ListTemplate from '../templates/list-countries.hbs';
import countryTemplate from '../templates/country.hbs';

import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  country: document.querySelector('.country'),
  listCountries: document.querySelector('.list-countries'),
};

function markupCountry(coutry) {
  clearArea();
  if (coutry.length > 10) {
    console.log('Too many');
    error('Too many matches found. Please enter a more specific query!');
  }
  if (1 < coutry.length && coutry.length < 10) {
    const markup = ListTemplate(coutry);
    refs.listCountries.insertAdjacentHTML('beforeend', markup);
  }
  if (coutry.length === 1) {
    const markup = countryTemplate(coutry);
    refs.country.insertAdjacentHTML('beforeend', markup);
  }
}

function clearArea() {
  refs.country.innerHTML = '';
  refs.listCountries.innerHTML = '';
}

export default markupCountry;

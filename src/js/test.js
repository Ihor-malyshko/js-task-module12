import debounce from 'lodash.debounce';
import markupCountry from './markup-country';
import getCountry from './fetch';

const refs = {
  findCountry: document.querySelector('.find-country'),
};

let nameCoutry = '';

refs.findCountry.addEventListener(
  'input',
  debounce(() => {
    nameCoutry = refs.findCountry.value;
    if (nameCoutry !== '') {
      getCountry(nameCoutry).then(markupCountry);
    }
  }, 500),
);

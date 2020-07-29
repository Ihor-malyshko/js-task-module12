import debounce from 'lodash.debounce';
import getCountry from './fetch';

const inputRef = document.querySelector('input');
console.dir(inputRef);

let nameCoutry = '';

inputRef.addEventListener(
  'input',
  debounce(() => {
    nameCoutry = inputRef.value;
    getCountry(nameCoutry);
  }, 300),
);

import './css/base.css';
import 'babel-polyfill';

const api = '/api/appconfig';
const httpRequest = new XMLHttpRequest();
httpRequest.open('GET', api, true);
httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
httpRequest.send();
console.log('qqa');


if (module.hot) {
  module.hot.accept();
}

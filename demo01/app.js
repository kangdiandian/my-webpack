import sum from './vendor/sum';
console.log('sum' + sum(3, 2));

const minus = require('./vendor/minus');
console.log('minus' + minus(3, 2));

// require(['./vendor/multi'], function (multi) {
//   console.log('multi', multi(3, 2));
// })

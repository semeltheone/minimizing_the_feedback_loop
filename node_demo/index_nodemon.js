const _ = require('lodash');

let data = [[45, 98, 41, 65, 33, [99, 42]], [745, 46, 12], [78, 45, [32, 33]]];

let even = [];

for (const number of data) {
  if (number % 2 == 0) {
    even.push(number);
  }
}

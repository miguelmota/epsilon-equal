machine epsilon

var EPSILON = Math.pow(2, -53);
function epsEqual(x, y) {
  return Math.abs(x - y) < EPSILON;
}

0.1 + 0.2 === 0.3

0.1 + 1 - 1


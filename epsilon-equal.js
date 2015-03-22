(function(root) {

  var EPSILON = Math.pow(2, -53);
  function epsilonEqual(x, y) {
    return Math.abs(x - y) < EPSILON;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = epsilonEqual;
    }
    exports.epsilonEqual = epsilonEqual;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return epsilonEqual;
    });
  } else {
    root.epsilonEqual = epsilonEqual;
  }

})(this);


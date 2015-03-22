var test = require('tape');
var epsilonEqual = require('../epsilon-equal');

test('epsilonEqual', function (t) {
  t.plan(13);

  t.false(epsilonEqual(''));
  t.false(epsilonEqual(0));
  t.false(epsilonEqual(null));
  t.false(epsilonEqual(undefined));
  t.false(epsilonEqual(NaN));
  t.false(epsilonEqual(1));
  t.false(epsilonEqual({}));
  t.false(epsilonEqual([]));
  t.false(epsilonEqual(function() { }));
  t.notEqual(0.1 + 0.2, 0.3);
  t.notEqual(0.1 + 1 - 1, 0.1);
  t.true(epsilonEqual(0.1 + 0.2, 0.3));
  t.true(epsilonEqual(0.1 + 1 - 1, 0.1));
});

# epsilon-equal

Compares two numbers taking the standard epsilon value for double precision into consideration.

# Why

Numbers in Javascript are double-precision 64-bit format IEEE 754 values so when adding decimals number such as `0.1 + 0.2` we get `0.30000000000000004` because rational numbers, such as `0.1, which is 1/10`), numbers whose denominators is not a power of two cannot be exactly represented.  Computers can only natively store integers, so they need some way of representing decimal numbers. This representation comes with some degree of inaccuracy.

[source](http://stackoverflow.com/questions/588004/is-floating-point-math-broken)

Internally computers use a format (binary floating-point) that cannot accurately represent a number like 0.1, 0.2 or 0.3 at all.

```
The exact number 0.1 in floating point is
0.10000 00000 00000 00555 11151 23125 78270 21181 58340 45410 15625

The exact number 0.2 in floating point is
0.20000 00000 00000 01110 22302 46251 56540 42363 16680 90820 3125

The exact number 0.3 in floating point is
0.29999 99999 99999 98889 77697 53748 43459 57636 83319 09179 6875

0.1 + 0.3
0.10000 00000 00000 00555 11151 23125 78270 21181 58340 45410 1 +
0.20000 00000 00000 01110 22302 46251 56540 42363 16680 90820 3 =
0.3000000000000000444089209850062616169452667236328125

01 + 0.3 !== 0.3
0.29999 99999 99999 98889 77697 53748 43459 57636 83319 09179 6875 !==
0.3000000000000000444089209850062616169452667236328125
```

[Exact float calculator](http://pages.cs.wisc.edu/~rkennedy/exact-float)

So due to rounding errors, you should not compare non-integers directly. Instead, take an upper bound for rounding errors into consideration. This upper bound is called the machine epsilon. [Machine epsilon](http://en.wikipedia.org/wiki/Machine_epsilon) gives an upper bound on the relative error due to rounding in floating point arithmetic. The standard epsilon value for double precision is 2<sup>−53</sup>.


# Install

```bash
npm install epsilon-equal
```

```bash
bower install epsilon-equal
```

# Usage

```javascript
var epsEqual = require('epsilon-equal');

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

epsEqual(0.1 + 0.2, 0.3) // true

console.log(0.1 + 1 - 1, 0.1); // false
console.log(0.1 + 1 - 1); // 0.10000000000000009

epsEqual(0.1 + 1 - 1, 0.1) //true
```

# License

MIT

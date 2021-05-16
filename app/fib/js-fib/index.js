const performance = require("perf_hooks").performance;

const fib = function (n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

console.group();
const startFib = performance.now();
console.log("fib result", fib(40));
const endFib = performance.now();
console.log(`processing time: ${endFib - startFib}ms`);
console.groupEnd();

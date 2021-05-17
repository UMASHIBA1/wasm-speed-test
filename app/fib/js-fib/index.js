const performance = require("perf_hooks").performance;

const fib = function (n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

// 最適化をかけるために一回実行しとく
fib(40);

const processing_times = [];

for (let i = 0; i < 10; i++) {
  console.group();
  const startFib = performance.now();
  console.log("fib result", fib(40));
  const endFib = performance.now();
  const processing_time = endFib - startFib;
  console.log(`processing time: ${processing_time}ms`);
  processing_times.push(processing_time);
  console.groupEnd();
}

console.log(processing_times);

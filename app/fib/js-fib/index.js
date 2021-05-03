const fib = function(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

for (let i = 10; i <= 50; i+=10) {
    console.group();
    console.log("n: ", i);
    const startFib = performance.now();
    console.log("start fib", startFib);
    console.log("fib result", fib(i));
    const endFib = performance.now();
    console.log("end fib: ", endFib);
    console.log(`processing time: ${endFib - startFib}ms`);
    console.groupEnd();
}
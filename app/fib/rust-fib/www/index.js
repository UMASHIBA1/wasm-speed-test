import("../pkg").then(module => {
    for(let i = 10; i <= 40; i+=10) {
        console.group();
        console.log(`n: ${i}`);
        const startFib = performance.now();
        console.log(`start fib: `, startFib);
        console.log(`fib result: ${module.fib(BigInt(i))}`);
        const endFib = performance.now();
        console.log(`end fib: ${endFib}`);
        console.log(`processing time: ${endFib - startFib}ms`);
        console.groupEnd();
    }
})

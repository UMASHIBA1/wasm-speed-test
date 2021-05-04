const loader = require("@assemblyscript/loader");

async function sample() {
    const wasmModule = await loader.instantiate(fetch("/wasm"), {});

    return wasmModule;
}

sample().then((wasmModule) => {
    for (let i = 10; i <= 50; i += 10) {
        console.group();
        console.log(`n: ${i}`)
        const startFib = performance.now();
        console.log(`start fib ${startFib}`);
        console.log(`fib result ${wasmModule.exports.fib(BigInt(i))}`);
        const endFib = performance.now();
        console.log(`end fib ${endFib}`);
        console.log(`processing time: ${endFib - startFib}ms`);
        console.groupEnd();
    };
});
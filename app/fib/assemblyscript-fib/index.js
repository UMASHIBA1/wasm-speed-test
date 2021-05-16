const loader = require("@assemblyscript/loader");

async function sample() {
    const wasmModule = await loader.instantiate(fetch("/wasm"), {});

    return wasmModule;
}

sample().then((wasmModule) => {

    // fib 10~50を計算する調査
    // for (let i = 10; i <= 50; i += 10) {
    //     console.group();
    //     console.log(`n: ${i}`)
    //     const startFib = performance.now();
    //     console.log(`start fib ${startFib}`);
    //     console.log(`fib result ${wasmModule.exports.fib(BigInt(i))}`);
    //     const endFib = performance.now();
    //     console.log(`end fib ${endFib}`);
    //     console.log(`processing time: ${endFib - startFib}ms`);
    //     console.groupEnd();
    // };

    // fib 40を複数回計算する調査
    const processing_times = [];
    for (let i = 0; i < 10; i++) {
        console.group();
        const startFib = performance.now();
        console.log("fib result", wasmModule.exports.fib(BigInt(40)));
        const endFib = performance.now();
        const proc_time = endFib - startFib;
        console.log(`processing time: ${proc_time}ms`);
        processing_times.push(proc_time);
        console.groupEnd();
    }
    console.log(processing_times);

});
const loader = require("@assemblyscript/loader");

async function sample() {
    const wasmModule = await loader.instantiate(fetch("/wasm"), {});

    return wasmModule;
}

sample().then((wasmModule) => {
    const iterationNum = 100000000;

    console.log(`iterationNum: ${iterationNum}`)

    let total = 0;
    const start = performance.now();

    for (let i = 1; i <= iterationNum; i++) {
            total = wasmModule.exports.add(total, i);
    }

    const end = performance.now();
    console.log(`processing time: ${end - start}ms`);
});
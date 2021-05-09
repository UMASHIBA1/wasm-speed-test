const loader = require("@assemblyscript/loader");

async function sample() {
    const wasmModule = await loader.instantiate(fetch("/wasm"), {});

    return wasmModule;
}

sample().then((wasmModule) => {
    const roop_num = 100000000;
    console.log(`roop num: ${roop_num}`);
    const start = performance.now();
    const result = wasmModule.exports.add_roop(BigInt(roop_num));
    const end = performance.now();
    console.log(`result: ${result}`);
    console.log(`processing time: ${end - start}`);
});
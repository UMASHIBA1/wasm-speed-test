const loader = require("@assemblyscript/loader");

async function sample() {
    const wasmModule = await loader.instantiate(fetch("/wasm"), {});

    return wasmModule;
}

sample().then((wasmModule) => {
    console.log(wasmModule.exports.add(2,2));
})
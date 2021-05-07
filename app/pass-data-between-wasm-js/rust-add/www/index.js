import("../pkg").then(module => {
        console.log("start processing");
        const startTime = performance.now();
        const total = module.add_calc(BigInt(1000000000000));
        const endTime = performance.now();
        console.log(total);
        console.log(`processing time: ${endTime - startTime}ms`);
})
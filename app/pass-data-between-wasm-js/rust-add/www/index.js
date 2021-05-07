import("../pkg").then(module => {

        const iterationNum = 100000000;

        console.log("iterationNum", iterationNum);
        const startTime = performance.now();
        let total = 0;
        for (let i = 1; i <= iterationNum; i++) {
                total = module.add(total, i);
        }
        const endTime = performance.now();
        console.log(`processing time: ${endTime - startTime}ms`);
})
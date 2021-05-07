document.addEventListener("DOMContentLoaded", () => {

        const add = function(a, b) {
            return a + b;
        }

        const iterationNum = 10000000000;

        console.log("iterationNum", iterationNum);
        const startTime = performance.now();
        let total = 0;
        for (let i = 1; i <= iterationNum; i++) {
            total = add(total, i);
        } 
        const endTime = performance.now();
        console.log(`processing time: ${endTime - startTime}ms`);
}); 

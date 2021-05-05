document.addEventListener("DOMContentLoaded", () => {

        const add = function(a, b) {
            return a + b;
        }

        const iterationNum = 100000000000; // 1000億

        console.log("iterationNum", iterationNum);
        const startTime = performance.now();
        for (let i = 1; i <= iterationNum; i++) {
            add(1, i);
        } 
        const endTime = performance.now();
        console.log(`processing time: ${endTime - startTime}ms`);
}); 

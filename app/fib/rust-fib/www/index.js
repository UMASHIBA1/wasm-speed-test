import("../pkg").then(module => {
    for(let i = 10; i <= 50; i+=10) {
        module.calc(BigInt(i));
    }
})

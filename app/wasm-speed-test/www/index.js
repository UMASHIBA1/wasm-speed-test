import("../pkg").then(module => {
    for(let i = 10; i <= 90; i+=10) {
        module.calc(i);
    }
})

mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(a: &str);
}

macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

fn fib(n: u32) -> u32 {
    if n <= 1 {
        return n
    }

    fib(n - 1) + fib(n - 2)
}

#[wasm_bindgen]
pub fn calc(n: u32) {

    let window = web_sys::window().expect("should have a window in this context");
    let performance = window.performance().expect("performance should be available");
    console_log!("n: {}", n);
    let startFib = performance.now();
    console_log!("start lib {}", startFib);
    console_log!("fib result {}", fib(n));
    let endFib = performance.now();
    console_log!("end fib {}", endFib);
    console_log!("processing time: {}ms", endFib - startFib);
}

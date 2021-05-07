mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}


fn add(a: i64, b: i64) -> i64 {
    a + b
}

#[wasm_bindgen]
pub fn add_calc(iteration_num: i64) -> i64 {
    let mut total = 0;
    for i in 1..iteration_num {
        total = add(total, i);
    };
    total
}

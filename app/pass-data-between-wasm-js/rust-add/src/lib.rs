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

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}


// fn add(a: i32, b: i32) -> i32 {
//     a + b
// }
//
// #[wasm_bindgen]
// pub fn add_calc(iteration_num: i32) -> i32 {
//     let mut total = 0;
//     for i in 1..iteration_num {
//         total = add(total, i);
//     };
//     total
// }
//

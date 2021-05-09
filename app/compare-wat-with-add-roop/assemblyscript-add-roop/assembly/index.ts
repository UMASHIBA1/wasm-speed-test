// The entry file of your WebAssembly module.

export function add_roop(roop_num: i64): i64 {
  let total: i64 = 0;
  for (let i: i64 = 1; i < roop_num + 1; i++ ) {
    total += i;
  }
  return total;
}

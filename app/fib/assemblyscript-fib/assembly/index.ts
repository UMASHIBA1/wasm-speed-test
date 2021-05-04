// The entry file of your WebAssembly module.

export function fib(n: i64): i64 {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
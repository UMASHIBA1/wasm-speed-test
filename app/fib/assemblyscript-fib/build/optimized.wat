(module
 (type $i64_=>_i64 (func (param i64) (result i64)))
 (memory $0 0)
 (export "fib" (func $assembly/index/fib))
 (export "memory" (memory $0))
 (func $assembly/index/fib (param $0 i64) (result i64)
  local.get $0
  i64.const 1
  i64.le_s
  if
   local.get $0
   return
  end
  local.get $0
  i64.const 1
  i64.sub
  call $assembly/index/fib
  local.get $0
  i64.const 2
  i64.sub
  call $assembly/index/fib
  i64.add
 )
)

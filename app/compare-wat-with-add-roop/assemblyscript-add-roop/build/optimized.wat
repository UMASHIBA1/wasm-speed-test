(module
 (type $i64_=>_i64 (func (param i64) (result i64)))
 (memory $0 0)
 (export "add_roop" (func $assembly/index/add_roop))
 (export "memory" (memory $0))
 (func $assembly/index/add_roop (param $0 i64) (result i64)
  (local $1 i64)
  (local $2 i64)
  i64.const 1
  local.set $1
  local.get $0
  i64.const 1
  i64.add
  local.set $0
  loop $for-loop|0
   local.get $0
   local.get $1
   i64.gt_s
   if
    local.get $1
    local.get $2
    i64.add
    local.set $2
    local.get $1
    i64.const 1
    i64.add
    local.set $1
    br $for-loop|0
   end
  end
  local.get $2
 )
)

# wasm, js間でデータを頻繁に交換した場合の処理時間測定

## 目的
JSとWASMで頻繁にデータの受け渡しをした場合、どの程度処理時間に差が出るのか計測する

## 計測方法
jsからwasmを呼び出す形で足し算をしそれをN回繰り返す、その時間をassemblyscript, rust(wasm)で両方とも計測し、JSのみで足し算した場合と比較する
  
## 計測結果
一億回の足し算の計算処理結果
|JS|AssemblyScript|Rust(wasm)|
|----|----|----|
|106.74999999901047ms|2527.5449999971897ms|4731.5400000006775ms|
  
    
## 計測結果詳細

### JS
```
iterationNum 100000000
index.js:16 processing time: 106.74999999901047ms
```

### AssemblyScript
```
iterationNum: 100000000
index.js:22 processing time: 2527.5449999971897ms
```

wasm text format
```WebAssembly
(module
  (memory $memory (;0;) (export "memory") 0)
  (func $add (;0;) (export "add") (param $var0 i32) (param $var1 i32) (result i32)
    local.get $var0
    local.get $var1
    i32.add
  )
)
```

### Rust(wasm)

```
iterationNum 100000000
index.js:12 processing time: 4731.5400000006775ms
```

wasm text format
```WebAssembly
(module
  (memory $memory (;0;) (export "memory") 17)
  (global $global0 (mut i32) (i32.const 1048576))
  (func $add (;0;) (export "add") (param $var0 i32) (param $var1 i32) (result i32)
    local.get $var1
    local.get $var0
    i32.add
  )
  (func $__webpack_init__ (;1;) (export "__webpack_init__")
  )
)
```


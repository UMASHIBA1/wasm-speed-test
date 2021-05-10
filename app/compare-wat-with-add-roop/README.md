# RustとAssemblyScriptのバイナリ比較

## 方法
JSへのデータの橋渡しを途中に介さずにWASM内だけで足し算処理のループをする。そしてそれを比較する

## 計測結果
1億回の足し算をするのに要した時間
|AssemblyScript|Rust(wasm) 最適化なし|Rust(wasm) 最適化あり|
|----|----|----|
|221.7899999996007ms|12852.210000004561ms|0.1649999994697282ms|

## 計測結果詳細

### AssemblyScript
```
roop num: 100000000
index.js:15 result: 5000000050000000
index.js:16 processing time: 221.7899999996007
```

wasm text format 注釈付き
```WebAssembly
// 解読してみる
(module // wasmモジュールとして宣言
  (memory $memory (;0;) (export "memory") 0) // メモリーノードタイプ
	//関数機能定義
	//シグネチャ定義, 
  (func $add_roop (;0;) (export "add_roop") // export句でwasmモジュールから関数をexportする 
		(param $var0 i64) (result i64) // var0に引数の値を格納、引数と返り値の型を定義 
		// ローカル変数 var1, var2定義
    (local $var1 i64) (local $var2 i64)
    i64.const 1
    local.set $var1 // var1 = 1
    local.get $var0 // 引数100000000を取得
    i64.const 1 
    i64.add // 100000000 + 1(おそらくfor文定義のroop_num + 1;の処理)
    local.set $var0 // var0 = 100000001
    loop $label0 // for文開始
      local.get $var0 // 100000001
      local.get $var1 // 1
      i64.gt_s // var0 > var1か判定(1000000001 > 1)
      if
        local.get $var1 // おそらく1
        local.get $var2 //　おそらく0(var2がtotal変数に対応すると思われる)
        i64.add // 1 + 0
        local.set $var2 // var2 = 1;(total = 1)
        local.get $var1 // おそらく1
        i64.const 1 
        i64.add // 1 + 1
        local.set $var1 // var1 = 2
        br $label0 // もう一度ループ
      end
    end $label0
    local.get $var2 // var2(total)を返す
  )
)
```

### Rust(wasm) 最適化なし

```
roop num: 100000000
index.js?ee1c:7 calc result: 5000000050000000
index.js?ee1c:8 processing time: 12852.210000004561ms
```

wasm text format
```WebAssembly
(func $add_roop (;187;) (export "add_roop") (param $var0 i32) (param $var1 i32) (param $var2 i32)
    (local $var3 i32) (local $var4 i32) (local $var5 i32) (local $var6 i32) (local $var7 i32) (local $var8 i32) (local $var9 i32) (local $var10 i64) (local $var11 i64)
    global.get $global0
    local.set $var3
    i32.const 32
    local.set $var4
    local.get $var3
    local.get $var4
    i32.sub
    local.set $var5
    local.get $var5
    global.set $global0
    local.get $var5
    local.get $var1
    i32.store offset=8
    local.get $var5
    local.get $var2
    i32.store offset=12
    local.get $var1
    local.get $var2
    call $func257
    local.set $var10
    local.get $var5
    local.get $var10
    i64.store offset=16
    local.get $var10
    call $rust_webpack_template::add_roop::hff4b8b16ec695fa5
```

### Rust(wasm) 最適化あり
```
roop num: 100000000
index.js:8 calc result: 5000000050000000
index.js:9 processing time: 0.1649999994697282ms
```

生成されたJSコード
```JavaScript
import * as wasm from './rust_add_roop2_bg.wasm';

const u32CvtShim = new Uint32Array(2);

const int64CvtShim = new BigInt64Array(u32CvtShim.buffer);

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}
/**
* @param {BigInt} roop_num
* @returns {BigInt}
*/
export function add_roop(roop_num) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        int64CvtShim[0] = roop_num;
        const low0 = u32CvtShim[0];
        const high0 = u32CvtShim[1];
        wasm.add_roop(retptr, low0, high0);
        var r0 = getInt32Memory0()[retptr / 4 + 0]; // r0 = 987459712
        var r1 = getInt32Memory0()[retptr / 4 + 1]; // r1 = 1164153
        u32CvtShim[0] = r0; 
        u32CvtShim[1] = r1; 
        const n1 = int64CvtShim[0]; // 5000000050000000
        return n1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
```

wasm text format 注釈付き
```WebAssembly
(module
  (memory $memory (;0;) (export "memory") 17) // メモリ17ページ(17 * 64KB)
	// 変更可能変数 global0 = 1048560 ※なんかdev toolsで見たら76ではなく60だった
  (global $global0 (mut i32) (i32.const 1048576)) 
	// add_roop関数定義, 引数 var0(1048560), var1(100000000), var2(0)定義
  (func $add_roop (;0;) (export "add_roop") (param $var0 i32) (param $var1 i32) (param $var2 i32)
		ローカル変数 var3, var4, var5定義
    (local $var3 i32) (local $var4 i64) (local $var5 i64)
    global.get $global0 // 1048560
    i32.const 16
    i32.sub // 1048560 - 16 = 1048544
    local.tee $var3 // var3 = 1048544
    global.set $global0 // global0 = 1048544
    i64.const 0
    local.set $var4 // var4 = 0

		// ループ1
    block $label0
      local.get $var2 // おそらく0
      i64.extend_i32_u
      i64.const 32
      i64.shl // 0 << 32
      local.get $var1 // 100000000
      i64.extend_i32_u
      i64.or // 100000000
      local.tee $var5 // var5 = 100000000
      i64.const 1
      i64.add // 1 + 100000000 = 100000001
      i64.const 2
      i64.lt_s // 100000001は2より小さいか
      br_if $label0 // 100000001が2より小さかったらlabel0へ
			// ループ終了
			//　この時点で
			// var0 = 1048560
			// var1 = 100000000
			// var2 = 0
			// var3 = 1048544
			// var4 = 0
			// var5 = 100000000

      local.get $var3 // 1048544
      local.get $var5 // 100000000
      i64.const -1
      i64.add // 100000000 + (-1) = 99999999
      local.tee $var4 // var4 = 99999999
      i64.const 0
      local.get $var5 // 100000000
      i64.const -2
      i64.add // 100000000 + (-2) = 99999998
      i64.const 0
			//　この時点で
			// var0 = 1048560
			// var1 = 100000000
			// var2 = 0
			// var3 = 1048544
			// var4 = 99999999
			// var5 = 100000000			

			//  stack: [1048544, 99999999, 0, 99999998, 0] ※こっち側が新しく積まれた方


			// multi3に飛びます
      call $__multi3
			// なんかmulti3内ではmemoryに色々保存してた

      local.get $var4 // 99999999
      i64.const 1
      i64.shl // 99999999 << 1 = 199999998
      i64.const 1
      i64.or // 199999998 | 1 = 199999999
      local.get $var3 // 1048544
			//load前stack
			// [199999999, 1048544]
      i64.load 
			// load後stack
			// [199999999, 9999999700000002]
      i64.const 1
      i64.shr_u // 4999999850000001
      local.get $var3 // 1048544
      i32.const 8 
      i32.add // 1048544 + 8 = 1048552

			// load前stack
			// [199999999, 4999999850000001, 1048552]
      i64.load 
			// load後stack
			// [199999999, 4999999850000001, 0]
      i64.const 63
      i64.shl // 0 << 63 = 0
      i64.or // 4999999850000001 | 0 = 4999999850000001
      i64.add // 199999999 + 4999999850000001 = 5000000050000000
      local.set $var4 // var4 = 5000000050000000 <- これ答えになってるじゃん！！
    end $label0
    local.get $var0 // 1048560
    local.get $var4 // 5000000050000000
		// この時点のstack: [1048560, 5000000050000000]
    i64.store32 // stackの値なくなる
    local.get $var0 // 1048560
    local.get $var4 // 5000000050000000
    i64.const 32
    i64.shr_u // 5000000050000000 >> 32 = 1164153
		// この時点のstack: [1048560, 1164153]
    i64.store32 offset=4 // stackの値なくなる
    local.get $var3 // 1048544
    i32.const 16 
    i32.add // 1048544 + 16 = 1048560
    global.set $global0 // globalo = 1048560
  )

	// call $__multi3からきました

	// 現状		
	//  stack: [1048544, 99999999, 0, 99999998, 0] ※こっち側が新しく積まれた方
	// stackがそのまま__multi3のparamとして渡される

  (func $__multi3 (;1;) (param $var0 i32) (param $var1 i64) (param $var2 i64) (param $var3 i64) (param $var4 i64)
    (local $var5 i64) (local $var6 i64)
    local.get $var0 // 1048544
    local.get $var3 // 99999998
    i64.const 32
    i64.shr_u //99999998 >> 32 = 0
    local.tee $var5 // var5 = 0
    local.get $var1 // 99999999
    i64.const 32
    i64.shr_u // 99999999 >> 32 = 0
    local.tee $var6 // var6 = 0
    i64.mul 0 * 0 = 0
    local.get $var3 // 99999998
    local.get $var2 // 0
    i64.mul // 99999998 * 0 = 0
    i64.add // 0 + 0 = 0
    local.get $var4 // 0
    local.get $var1 // 99999999
    i64.mul // 99999999 * 0 = 0
    i64.add // 0 + 0 = 0
    local.get $var3 // 99999998
    i64.const 4294967295 
    i64.and // 4294967295 & 99999998 = 99999998
    local.tee $var3 // var3 = 99999998
    local.get $var1 // 99999999 
    i64.const 4294967295
    i64.and // 4294967295 & 99999999 = 99999999
    local.tee $var1 // var1 = 99999999
    i64.mul // 99999999 * 99999998 = 9999999700000002
    local.tee $var4 // var4 = 9999999700000002
    i64.const 32
    i64.shr_u // 9999999700000002 >> 32 = 2328306
    local.get $var3 // 99999998
    local.get $var6 // 0
    i64.mul // 99999998 * 0 = 0
    i64.add // 2328306  + 0 = 2328306
    local.tee $var3 // var3 = 2328306
    i64.const 32
    i64.shr_u // 2328306 >> 32 = 0
    i64.add  0 + 0 = 0
    local.get $var3 // 2328306
    i64.const 4294967295 
    i64.and // 2328306 & 4294967295 = 2328306
    local.get $var5 // 0
    local.get $var1 // 99999999
    i64.mul // 0 * 99999999 = 0
    i64.add 2328306 + 0 = 2328306
    local.tee $var3 // var3 = 2328306
    i64.const 32
    i64.shr_u // 2328306 >> 32 = 0
    i64.add // 0 + 0 = 0
    i64.store offset=8 // stack消失, offsetが何かよくわからん
    local.get $var0 // 1048544
    local.get $var3 // 2328306
    i64.const 32
    i64.shl // 2328306 << 32 = 9999998125080576
    local.get $var4 // 9999999700000002
    i64.const 4294967295 
    i64.and // 9999999700000002 & 4294967295 = 1574919426
    i64.or // 9999998125080576 | 1574919426 = 9999999700000002
		// memo: この時のstack: [1048544, 9999999700000002] ※こちら側が新しいスタック
    i64.store // ここでstackが消える
  )
	// multi3終了

  (func $__wbindgen_add_to_stack_pointer (;2;) (export "__wbindgen_add_to_stack_pointer") (param $var0 i32) (result i32)
    local.get $var0
    global.get $global0
    i32.add
    global.set $global0
    global.get $global0
  )
  (func $__webpack_init__ (;3;) (export "__webpack_init__")
  )
)
```
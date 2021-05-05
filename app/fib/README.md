# フィボナッチ数を求める計算の速度比較
## フィボナッチ数50番目計算速度比較

フィボナッチ数の50番目を求めた際の速度は以下のようになりました

| 指標 | JS | AssemblyScript | Rust(WASM)|
|-----|----|---|---|
| かかった時間 | 173907.2500000002 | 111968.95999999833 | 75221.9100000002 |
| JSを基準として何倍早くなったか | 1 | 1.553173754583438 | 2.3119228161050382 |

## フィボナッチ数各言語計算詳細ログ

### JS
```
index.js:9 console.group
index.js:10 n:  10
index.js:12 start fib 75.41500000024826
index.js:13 fib result 55
index.js:15 end fib:  75.50000000082946
index.js:16 processing time: 0.0850000005812035ms
index.js:9 console.group
index.js:10 n:  20
index.js:12 start fib 75.62500000040018
index.js:13 fib result 6765
index.js:15 end fib:  76.66500000050291
index.js:16 processing time: 1.0400000001027365ms
index.js:9 console.group
index.js:10 n:  30
index.js:12 start fib 76.95500000045286
index.js:13 fib result 832040
index.js:15 end fib:  89.16500000032102
index.js:16 processing time: 12.20999999986816ms
index.js:9 console.group
index.js:10 n:  40
index.js:12 start fib 89.33000000070024
index.js:13 fib result 102334155
index.js:15 end fib:  1455.2900000007867
index.js:16 processing time: 1365.9600000000864ms
index.js:9 console.group
index.js:10 n:  50
index.js:12 start fib 1455.46000000013
index.js:13 fib result 12586269025
index.js:15 end fib:  175362.71000000034
index.js:16 processing time: 173907.2500000002ms
```

### Rust(WASM)

```
n: 10
wasm_speed_test_bg.js:96 start lib 124.92000000202097
wasm_speed_test_bg.js:96 fib result 55
wasm_speed_test_bg.js:96 end fib 125
wasm_speed_test_bg.js:96 processing time: 0.07999999797903001ms
wasm_speed_test_bg.js:96 n: 20
wasm_speed_test_bg.js:96 start lib 125.1250000022992
wasm_speed_test_bg.js:96 fib result 6765
wasm_speed_test_bg.js:96 end fib 125.20500000027823
wasm_speed_test_bg.js:96 processing time: 0.07999999797903001ms
wasm_speed_test_bg.js:96 n: 30
wasm_speed_test_bg.js:96 start lib 125.33000000257744
wasm_speed_test_bg.js:96 fib result 832040
wasm_speed_test_bg.js:96 end fib 131.04000000021188
wasm_speed_test_bg.js:96 processing time: 5.709999997634441ms
wasm_speed_test_bg.js:96 n: 40
wasm_speed_test_bg.js:96 start lib 131.2500000021828
wasm_speed_test_bg.js:96 fib result 102334155
wasm_speed_test_bg.js:96 end fib 748.4150000018417
wasm_speed_test_bg.js:96 processing time: 617.1649999996589ms
wasm_speed_test_bg.js:96 n: 50
wasm_speed_test_bg.js:96 start lib 748.5450000021956
wasm_speed_test_bg.js:96 fib result 12586269025
wasm_speed_test_bg.js:96 end fib 75970.4550000024
wasm_speed_test_bg.js:96 processing time: 75221.9100000002ms
```


### AssemblyScript

```
index.js:11 console.group
index.js:12 n: 10
index.js:14 start fib 84.08500000223285
index.js:15 fib result 55
index.js:17 end fib 84.17000000190455
index.js:18 processing time: 0.08499999967170879ms
index.js:11 console.group
index.js:12 n: 20
index.js:14 start fib 84.29500000056578
index.js:15 fib result 6765
index.js:17 end fib 84.4150000011723
index.js:18 processing time: 0.12000000060652383ms
index.js:11 console.group
index.js:12 n: 30
index.js:14 start fib 84.50000000084401
index.js:15 fib result 832040
index.js:17 end fib 92.78999999878579
index.js:18 processing time: 8.289999997941777ms
index.js:11 console.group
index.js:12 n: 40
index.js:14 start fib 92.91999999913969
index.js:15 fib result 102334155
index.js:17 end fib 1012.6650000020163
index.js:18 processing time: 919.7450000028766ms
index.js:11 console.group
index.js:12 n: 50
index.js:14 start fib 1012.7900000006775
index.js:15 fib result 12586269025
index.js:17 end fib 112981.74999999901
index.js:18 processing time: 111968.95999999833ms
```
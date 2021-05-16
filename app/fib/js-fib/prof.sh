for i in `seq 10`
do
node --prof --trace-opt --trace-deopt  --trace_ic ./index.js
done

i=0
for file in `find . -iname "isolate*"`
do
node --prof-process $file > "prof/summary/summary${i}.log"
mv $file "prof/log/${file}"
let i++
done
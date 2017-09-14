let arr = process.argv;
let sum = 0
for(i = 2,length = arr.length; i < length; i++) {
  sum += (+arr[i])
}
console.log(sum)

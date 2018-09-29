var numbers = Array(5000).fill()
console.time('in loop')
for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

console.timeEnd('in loop')

console.time('before loop')
var length = numbers.length
for (var i = 0; i < length; i++){
    console.log(numbers[i])
}
console.timeEnd('before loop')
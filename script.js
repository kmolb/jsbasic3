var numbers = Array(5).fill()  //zadres liczb 5000
console.time('in loop')
for (var i = 0; i <
 Math.random(); i++){  // i=0 i mniejsze od ilosći wartości w numbers.length, zwiększ i o 1(i++)
    console.log(numbers[i])
}

console.timeEnd('in loop')

console.time('before loop')
var length = numbers.length
for (var i = 0; i < length; i++){
    console.log(numbers[i])
}
console.timeEnd('before loop')



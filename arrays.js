// tablice  //slice tablicy
// TASK 9 losowa parzysta ilość
/*
var range = 100;
var number = Math.floor( Math.random() * range / 2 ) * 2;


console.log(number);
*/

function randomEvenLength() {
    let n;
    while (!n || n % 2 !== 0) {
        n = Math.floor(Math.random() * 100) + 6;
    }
    return n;
}

const a = [];
const length = randomEvenLength();

for (let i = 0; i < length; i++) {
    a.push(Math.floor(Math.random() * 100));
}
const x = a.slice(length / 2 - 2, -length / 2 + 2)
console.log(a,x);
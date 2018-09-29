/*var myCar = new Object();

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar)*/
// these 3 lines has the same effect

var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    parts: {
        engine: 'desel',
        body: 'coupe',
    },
    sound: function () {
        alert('Wrrrrr!');
    }
}
console.log(myCar.sound())
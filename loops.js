//task 6
const values = [];

for(let i = 0; i <5; i++) {
    const randomValues = Math.floor((Math.random()) * 1000) + 1);
    values.push(randomValues);
    if(i > 0) {
        break;
    }
}

console.log(values);
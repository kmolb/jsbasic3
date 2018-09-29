// tablice  //slice tablicy
/*const a = [1,2,3, ["a", "b", "c"]];
// const b=a
const b = a.slice(0, a.length );

b[3].push("d");

console.log(a,b);
*/
const a = [1, 2, 3, 4, 5, 6];
//##################3###########
//cwiczenie wybieranie elementów
/*


//const selectedItem = [a[1]];
const selectedItem = a.slice(1, 2); //[2]

const lastElement = a.slice(a.length -1);// [6]
//cosnt lastElement = a.pop(); [6]

const x = selectedItem.concat(lastElement);

console.log(x);
*/

//////// rozw nr 2

console.log([...a.slice(1,2), a.pop()]);
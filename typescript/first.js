// function greet(person: string,date: Date){
//     console.log(`hello : ${person} today is : ${date}`);
// }
// greet('Amit', new Date());
// function greet(name: string){
//     console.log(`hello : ${name.toUpperCase()}`);
// }
// greet('Amit');
function printCoordinates(pt) {
    console.log("x =".concat(pt.x, " y= ").concat(pt.y));
}
;
printCoordinates({ x: 100, y: 200 });
function printName(person) {
    console.log("person first name : ".concat(person.first, " and last name : ").concat(person.last));
}
;
printName({ first: 'sachin', last: 'tendulkar' });
printName({ first: 'rohit' });

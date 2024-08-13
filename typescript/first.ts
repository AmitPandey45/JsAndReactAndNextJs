// function greet(person: string,date: Date){
//     console.log(`hello : ${person} today is : ${date}`);
// }
// greet('Amit', new Date());

// function greet(name: string){
//     console.log(`hello : ${name.toUpperCase()}`);
// }
// greet('Amit');

function printCoordinates(pt: { x: number; y: number }) {
  console.log(`x =${pt.x} y= ${pt.y}`);
}

printCoordinates({ x: 100, y: 200 });

function printName(person: { first: string; last?: string }) {
  console.log(
    `person first name : ${person.first} and last name : ${person.last}`
  );
}

printName({ first: "sachin", last: "tendulkar" });
printName({ first: "rohit" });

//union types
function printId(id: string | number) {
  if (typeof id === "string") console.log(`your ID is : ${id.toUpperCase()}`);
  else console.log(`your ID is : ${id}`);
}

//Type - user defined types by type
type Point = {
  x: number;
  y: number;
};
function printCoord(pt: Point) {
  console.log(`x =${pt.x} and y= ${pt.y}`);
}

printCoord({ x: 11, y: 22 });

printId("abcd12345");
printId(555556666);

//interface
interface Point1 {
  x: number;
  y: number;
}
function printCoord1(pt: Point1) {
  console.log(`x =${pt.x} and y= ${pt.y}`);
}
printCoord1({ x: 77, y: 99 });

interface Circle {
  kind: "Circle";
  radius: number;
}

interface Square {
  kind: "Square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(s: Shape) {
  if (s.kind === "Circle") return Math.PI * s.radius ** 2;
  else return s.sideLength ** 2;
}

console.log(getArea({ kind: "Circle", radius: 2 }));
console.log(getArea({ kind: "Square", sideLength: 3 }));

//type inference
function calculateLength(x: string, y: string) : number {
  let totalLength = x.length + y.length;
  return totalLength;
}

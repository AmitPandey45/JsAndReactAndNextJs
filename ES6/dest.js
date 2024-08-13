// array destructuring

let a, b, c;

[a, b] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10];

console.log(a);
console.log(b);
console.log("======");

[,,a,,b] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10];

console.log(a);
console.log(b);
console.log("======");

[a, b, ...c] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10];

console.log(a);
console.log(b);
console.log(c);
console.log("======");
// let a,b,c;
// //destructing assignment: unpack values from arrays,objects

// [a,b, ...c] = [10,20,30,40,50,60,70,80,90,100];

// console.log(a);
// console.log(b);
// console.log(c);

// const x = [44,55,66,77];
// const [y,z] = x;
// console.log(y)
// console.log(z);

// const obj = {a: 1, b: 2};
// // const a = obj.a;
// // const b = obj.b
// //equivalent to
// const {a,b} = obj;
// console.log(b);

const player = {
  id: 1,
  name: "Dhoni",
  category: "Keeper",
  country: "India",
};

function print1(player) {
  console.log(
    `${player.id} ${player.name} ${player.category} ${player.country}`
  );
}

function print2({ id, name }) {
  console.log(`${id} ${name}`);
}

function print3({ category, country }) {
  console.log(`${category} ${country}`);
}

print1(player);
print2(player);
print3(player);

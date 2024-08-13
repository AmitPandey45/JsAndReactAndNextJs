var p1 = {
    id: 1,
    name: 'Amit'
};
var p2 = {
    category: "A",
    country: "IN"
};
var foodies;
//foodies = "Aaa";
foodies = "Veg Sandwich";
var dhoni;
// error
//dhoni = "Veg Sandwich";
// valid
dhoni = "Alu Tikki";
var result;
//valid
result = "Rice Rollers";
result = "Veg Sandwich";
// invalid
//result = "Chicken";
function greeter(fn) {
    fn("hello hello");
}
function print1(s) {
    console.log(s);
}
function print2(s) {
    console.log(s);
}
function print3(s) {
    console.log(s);
}
greeter(print1);
greeter(print2);
//error
//greeter(print3);

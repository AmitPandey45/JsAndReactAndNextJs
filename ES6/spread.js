// // ... spread operator: expand
// const cats = ['c1','c2','c3'];
// const dogs =['d1','d2'];
 
// const animals = ['TIGER', cats, "LION", ...dogs];
 
// console.log(animals);
 
 
// function sum(a,b,c){
//     return a + b +c
// };
 
// const nos= [1,2,3];
 
// console.log(sum(nos[0], nos[1], nos[2]));
// console.log(sum(...nos))
 
 
// const x = [1,2,3,4,5];
// const y = [...x, 6,7,8,9,10];
// console.log('x==='+ x);
// console.log(y);
 
//Rest operator :     ...
function sum(...theArgs){
    let total = 0;
    for(const arg of theArgs){
        total +=arg;
    }
    return total;
}
console.log(sum(1,2,3));
console.log(sum(10,20,30,40,50,60,70,80,90,100))
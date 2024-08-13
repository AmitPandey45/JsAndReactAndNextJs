interface ICexample {
    name: string
    [key: number]: number
}

// interface ICexample1 {
//     name: string
//     [key: string]: number
// }

const a11: ICexample = {name: "Amit"};
a11[1] = 11;
a11[2] = 12;

console.log(a11)

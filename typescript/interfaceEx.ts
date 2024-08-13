interface ISum {
    (n1: number, n2: number) : number;
    city: string;
}

const sum: ISum = (a, b) => a + b;
sum.city = "Delhi";

interface Something {
    somePro: string;
    [key: string]: number | string;
}

const k: Something = {somePro: "some value"};
k.x = 1;
k.y = 2;
k.name = "Amit";

console.log(k);

interface P {
    x: number;
}


interface Q extends P {
    y: number;
}


interface R extends Q {
    z: number;
}

const ia : R = {x: 1, y: 2, z: 3};
console.log(ia);
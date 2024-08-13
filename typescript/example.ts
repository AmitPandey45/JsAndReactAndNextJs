function welcomePeople(names: string | string[]) {
    if (Array.isArray(names)) {
        console.log(`welcome ${names.join(' and ')}`);
    } else {
        console.log(`welcome lone traveller ${names}`);
    }
}

welcomePeople('Amit');

welcomePeople(['Amit', 'Anurag', 'Deepanshu']);


interface A {
    age: number;
}

interface B {
    age: number;
}

interface C {
    age: number;
    name: string;
}

interface D {
    age: number;
    name?: string;
}

let a1: A = {age: 33};

let b1: B = a1;

let c1: C = {age: 22, name: "Amit"};

let d1: D = {age: 22, name: "Amit"};

let a2: A = d1;
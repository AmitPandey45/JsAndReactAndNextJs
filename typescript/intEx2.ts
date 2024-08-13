interface W {
    id: number;
    name: string;
    category: string;
    country: string;
}

type PlrPick = Pick<W, 'id' | 'name'>;

type PlrOmit = Omit<W, 'id' | 'name'>;

const p1: PlrPick = {
    id: 1,
    name: 'Amit'
}

const p2: PlrOmit = {
    category: "A",
    country: "IN"
}

type Foods = "Veg Sandwich" | "Non-Veg Sandwich" | "Burger" | "Alu Tikki" | "Rice Rollers" | "Samber Rice";

let foodies: Foods;
//foodies = "Aaa";
foodies = "Veg Sandwich";

type NonFoodies = "Veg Sandwich" | "Rice Rollers" | "Samber Rice";

let dhoni: Exclude<Foods, NonFoodies>;

// error
//dhoni = "Veg Sandwich";

// valid
dhoni = "Alu Tikki";

type dhoniFavorateFoods = "Veg Sandwich" | "Rice Rollers" | "Chicken" | "Mutton";

let result: Extract<Foods, dhoniFavorateFoods>;

//valid
result = "Rice Rollers";
result = "Veg Sandwich";

// invalid
//result = "Chicken";

function greeter (fn: (a: string) => void) {
    fn("hello hello");
}

function print1(s: string) {
    console.log(s);
}

function print2(s: string) {
    console.log(s);
}

function print3(s: number) {
    console.log(s);
}

greeter(print1);
greeter(print2);

//error
//greeter(print3);
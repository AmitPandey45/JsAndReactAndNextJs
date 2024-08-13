interface A {
    age: number;
    name: string;
  }
   
  interface B {
    age: number;
  }
   
  let a: A = { age: 21, name: "Dhoni" };
  //let x: A = {age: 33};
   
  let b: B = a;
  console.log(b.age);
  // /console.log(b.name)
   
  interface Sum {
    (a: number, b: number): number;
    city: string;
  }
   
  const sum: Sum = (a,b)=> a+ b;
  sum.city="Delhi";
   
  interface P{
      x: number
  }
  interface Q extends P{
      y: number;
  }
  interface R extends Q{
      z: number
  }
  const e: R={x: 11,y: 22, z: 33};
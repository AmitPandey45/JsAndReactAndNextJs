class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  getVehicleInfo() {
    console.log(`I am a ${this.name} vehicle with ${this.wheels} wheels`);
  }
}

class Truck extends Vehicle{
    constructor() {
       super("Semi Truck", 12);
    }
}

const v1 = new Vehicle("BMW", 4);
v1.getVehicleInfo();
 
const v2 = new Vehicle("POLO", 4);
v2.getVehicleInfo();
 
 
const v3 = new Truck();
v3.getVehicleInfo();
 
const v4 = new Truck();
v4.getVehicleInfo();
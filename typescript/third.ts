interface IEmployee {
    getEmployeeDetail() : string;
}

class Employee implements IEmployee {
    id: number;
    name: string;
    designation: string;
    department: string;

    constructor(id, name, designation, department) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.department = department;
    }

    getEmployeeDetail() : string {
        return `
        Id: ${this.id}
        Name: ${this.name}
        Designation: ${this.designation}
        Department: ${this.department}`
    }
}

let emp = new Employee(1, "Amit", "Software Eng", "Engineering");

console.log(emp.getEmployeeDetail());

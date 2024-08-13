var Employee = /** @class */ (function () {
    function Employee(id, name, designation, department) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.department = department;
    }
    Employee.prototype.getEmployeeDetail = function () {
        return "\n        Id: ".concat(this.id, "\n        Name: ").concat(this.name, "\n        Designation: ").concat(this.designation, "\n        Department: ").concat(this.department);
    };
    return Employee;
}());
var emp = new Employee(1, "Amit", "Software Eng", "Engineering");
console.log(emp.getEmployeeDetail());

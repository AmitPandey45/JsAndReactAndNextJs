var employees = [
  { sal: 10, lastJoinDate: new Date(2023, 3, 1) },
  { sal: 20, lastJoinDate: new Date(2023, 2, 1) },
  { sal: 30, lastJoinDate: new Date(2023, 2, 1) },
  { sal: 40, lastJoinDate: new Date(2023, 3, 1) },
];

function getTotalSalaryOweInMonth(monthValue) {
  var totalSalary = 0;
  employees.filter((employee) => {
    if (employee.lastJoinDate.getMonth() === monthValue) {
      totalSalary += employee.sal;
    }
  });

  return totalSalary;
}

const due = employees.reduce((previousValue, employee) => {
    if (employee.lastJoinDate.getMonth() === 2) {
        previousValue+= employee.sal;
    }
    return previousValue;
}, 0);

console.log("Due: "+due);

console.log("Total Salary Owe in March " + getTotalSalaryOweInMonth(2));

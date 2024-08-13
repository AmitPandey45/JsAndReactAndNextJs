var employees = require("./employee.json");

var firstOccurEmps = employees.reduce((accumulator, emp) => {
  if (!(emp.currency in accumulator)) {
    accumulator[emp.currency] = emp;
  }

  return accumulator;
}, {});

console.log(firstOccurEmps);

var currenciesListed = {};
var empList = employees.filter((emp) => {
  if (!(emp.currency in currenciesListed)) {
    currenciesListed[emp.currency] = true;
    return true;
  }

  return false;
});

empList.map((emp) =>
  console.log(`${emp.id} ${emp.name} ${emp.salary} ${emp.currency}`)
);

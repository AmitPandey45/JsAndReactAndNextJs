var employees = require("./employee.json");

// second occurrence emp

var occurrence = 2;
var currenciesOccurrenceCount = {};
var empList = employees.filter((emp) => {
  if (emp.currency in currenciesOccurrenceCount) {
    currenciesOccurrenceCount[emp.currency] += 1;
  } else {
    currenciesOccurrenceCount[emp.currency] = 1;
  }

  if (occurrence === currenciesOccurrenceCount[emp.currency]) {
    return true;
  }

  return false;
});

empList.map((emp) =>
  console.log(`${emp.id} ${emp.name} ${emp.salary} ${emp.currency}`)
);

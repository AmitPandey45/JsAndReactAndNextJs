var employees = require("./employee.json");

employees.forEach((employee) => {
  console.log(
    `${employee.id} ${employee.name} ${employee.salary} ${employee.currency}`
  );
});

var requiredCurrencyAmt = {};
requiredCurrencyAmt.INR = 0;
requiredCurrencyAmt.USD = 0;

employees
  .filter((s) => s.currency === "INR" || s.currency === "USD")
  .forEach((employee) => {
    if (employee.currency == "INR") {
      requiredCurrencyAmt.INR += employee.salary;
    } else if (employee.currency == "USD") {
      requiredCurrencyAmt.USD += employee.salary;
    }
  });

console.log(requiredCurrencyAmt);

var salaries = employees.reduce(
  (accumulator, emp) => {
    if (emp.currency === "INR" || emp.currency === "USD") {
      accumulator[emp.currency] += emp.salary;
    }

    return accumulator;
  },
  { INR: 0, USD: 0 }
);

console.log(salaries);

//// total amount by currency

var totalCurrencyAmt = employees.reduce((accumulator, emp) => {
  if (emp.currency in accumulator) {
    accumulator[emp.currency] += emp.salary;
  } else {
    accumulator[emp.currency] = emp.salary;
  }

  return accumulator;
}, {});

console.log(totalCurrencyAmt);

employees.forEach((emp) => {
  if (emp.currency === "INR" || emp.currency === "GPB") {
    console.log(
      `${employee.id} ${employee.name} ${employee.salary} ${employee.currency}`
    );
  }
});

var employees = require("./employee.json");

var expectedCurrencies = ["INR", "GBP"];

var empList = employees.filter((emp) =>
  expectedCurrencies.includes(emp.currency)
);

empList.map((emp) =>
  console.log(
    `${emp.id} ${emp.name} ${emp.salary} ${emp.currency}`
  )
);

empList
  .sort((emp1, emp2) => emp1.salary - emp2.salary)
  .forEach((emp) => console.log(emp));

empList
  .sort((emp1, emp2) => {
    if (emp1.salary > emp2.salary) {
      return 1;
    } else if (emp1.salary < emp2.salary) {
      return -1;
    } else {
      return 0;
    }
  })
  .map((emp) =>
    console.log(
      `${emp.id} ${emp.name} ${emp.salary} ${emp.currency}`
    )
  );

// some, every, find, filter, map, forEach, reduce, sort

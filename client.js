const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function calculateBonus(employee) {
  const newEmployeeObj = {};
  newEmployeeObj.name = employee.name;

  // if rating of 2 or below no bonus
  if (employee.reviewRating <= 2) {
    newEmployeeObj.bonusPercentage = 0;
  }
  // rating of 3 get 4%
  if (employee.reviewRating === 3) {
    newEmployeeObj.bonusPercentage = 0.04;
  }
  //  rating of 4 get 6%
  if (employee.reviewRating === 4) {
    newEmployeeObj.bonusPercentage = 0.06;
  }
  // rating of 5 get 10%
  if (employee.reviewRating === 5) {
    newEmployeeObj.bonusPercentage = 0.1;
  }

  // emplyNumber === 4 digits long additional 5%
  if (employee.employeeNumber.length === 4) {
    newEmployeeObj.bonusPercentage += 0.05;
  }

  // annualIncome > 65,000 bonus down to 1%
  if ((+employee.annualSalary > 65, 000)) {
    newEmployeeObj.bonusPercentage = 0.01;
  }

  // no bonus is above 13% or below0%
  if (newEmployeeObj.bonusPercentage >= 0.13) {
    newEmployeeObj.bonusPercentage = 0.12;
  }
  if (newEmployeeObj.bonusPercentage < 0) {
    newEmployeeObj.bonusPercentage = 0;
  }

  newEmployeeObj.totalBonus =
    employee.annualSalary * newEmployeeObj.bonusPercentage;

  newEmployeeObj.totalCompensation =
    Number(employee.annualSalary) + newEmployeeObj.totalBonus;

  return newEmployeeObj;
}

//

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  for (let i = 0; i < employees.length; i++) {
    const useThis = calculateBonus(employees[i]);
    document
      .querySelector('.the-list')
      .insertAdjacentHTML(
        'beforeend',
        `<li> Name: ${useThis.name}, Bonus Percent: ${useThis.bonusPercentage}, Total Income will be: $${useThis.totalCompensation} </li>`
      );
  }
});

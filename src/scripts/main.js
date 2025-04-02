'use strict';

const employeesContainer = document.querySelector('ul');
const employeesCount = employeesContainer.querySelectorAll('li');

function sortList(list) {
  const arr = [...list].sort((a, b) => {
    return (
      replaceToNumber(b.dataset.salary) - replaceToNumber(a.dataset.salary)
    );
  });

  arr.forEach((node) => {
    employeesContainer.appendChild(node);
  });
}

sortList(employeesCount);

function getEmployees(list) {
  const arr = [...list].map((item) => ({
    name: item.innerHTML.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return arr;
}

getEmployees(employeesCount);

function replaceToNumber(string) {
  return Number(string.replace(/[^0-9.,-]/g, '').replace(',', ''));
}

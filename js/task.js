// Завдання 1. Є три мависи з рівнем продажів менеджерів. Знайти найменше значення.

const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];

const arr4 = arr1.concat(arr2, arr3);
console.log(arr4);

let numberMin = arr4[0];
console.log(arr4[0]);

for (let i = 0; i < arr4.length; i++) {
  let arr = arr4[i];
  if (arr < numberMin) {
    numberMin = arr;
  }
}
console.log(numberMin);

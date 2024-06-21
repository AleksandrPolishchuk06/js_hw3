// Завдання 2. Маємо два масиви. В першому прізвища менеджерів, в другому суми їх продажів
// Виведи в консоль менеджерів та їх продажі. Приклад: Petro-20000

const managers = ["Petro", "Viktor", "Anna", "Olga"];
const sales = [20000, 34000, 17000, 23000];
const result = [];

for (let i = 0; i < managers.length; i++) {
  result.push(`${managers[i]}-${sales[i]}`);
}

console.log(result);

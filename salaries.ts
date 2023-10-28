let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (const salariesKey in salaries) {
  sum += salaries[salariesKey];
}

console.log(sum);
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//
// Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
const multiplyNumeric = (obj) => {
  for (const salariesKey in obj) {
    if (typeof obj[salariesKey] === "number") obj[salariesKey] *= 2;
  }
  return obj;
};
console.log(multiplyNumeric(menu));

menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

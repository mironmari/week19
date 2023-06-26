const cities = ['Томск', 'Москва', 'Рим', 'Барселона'];
let temperatura = [];
const container = document.querySelector(".container_result");

function createElement(INDEX) {
  let city = document.createElement("p");
  let temp = document.createElement("p");
  city = `Температура: ${cities[INDEX]}  `
  temp =`${temperatura[INDEX]}`
  container.append(city)
  container.append(temp)
  }

for (let i = 0; i <= cities.length - 1; i++) {
    let result = prompt(`Введите температуру: ${cities[i]}`);
    temperatura.push(+result);


    let max = Math.max(...temperatura);
    let elem = document.getElementById('element');
    elem.innerHTML = `Максимальная температура: ${max}`;

    let min = Math.min(...temperatura);
    let elem1 = document.getElementById('element1');
    elem1.innerHTML = `Минимальная температура: ${min}`;

    createElement(i);
}


//Задание 1
// Выведите числа от 1 до 10 в консоль
let number;
for (number = 1; number < 11; number++) {
  console.log(number);}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

for (let i = 1; i < 21; i++) {

    if (i % 2 == 1)
          continue;
      console.log(i);
  }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

let number1;
for (number1 = 10; number1 > 0; number1--) {
  console.log(number1);}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

let number3;
for (number3 = 1; number3 < 11; number3++) {
  console.log(number3 * 5);}



//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

let res = 0;

for (let i = 1; i <= 100; i++) {
	res = res + i; //	res += i;
}

console.log(res);

// Задание 6
// Выведите все элементы массива в консоль используя цикл for
// const array = [1, 2, 3, 4, 5];

for (let array = 1; array < 6; array++) {
  console.log(array);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
 result1 = 0;
for (let numbers = 1; numbers < 6; numbers++) {
  result1 += numbers;
}
console.log(result1);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i <animals.length; i++) {
  animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let i = 0; i < str.length; i += 1) {
  console.log(str[i]);}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
const array = [1, 2, 3, 4, 5];

for (let arr of array) {console.log(arr);}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];

let individualWords = String(sentences).split(' ');
console.log(individualWords) // надо добавить регулярное выражение в сплит
for (let n = 0; n < individualWords.length; n++) {
   console.log(individualWords[n])
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

const numbers1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let number1 of numbers1) {
  sum += number1;
} console.log(sum);



//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let item of list)
console.log(item.length);


//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
for (let word of words)
 console.log(word.toUpperCase());



//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let letter of greeting) {
  if (vowels.includes(letter))
  { vowelCount++ }
} console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words1 = ['Hello', 'world', '!'];
 console.log(words1.join(' '));

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while

let i = 1;

while (i <= 10) {
	console.log(i);
	i++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

let item = 10;

while (item > 0) {
	console.log(item);
	item--;
}
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

function numbersMinus(allNumbers) {
  let j=0;
  while (allNumbers[j] < allNumbers.length -1) {
    if (allNumbers[j] < 0) {
    allPositive = false;
    console.log(allNumbers[j]);
    break
  }
  j++
}}
numbersMinus(allNumbers);
console.log(allPositive)

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let k=0;
do { console.log(random[k])
k++}
while (random[k]>=0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

let g = 1;
do {
  if (g % 3 !== 0) {
  console.log(g);}

g++}
while (g <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

/*let r = 0;
let resS = prompt('введите число?');
while (r <= 100) {
  console.log(resSum);
}
r = r + +resS;
*/


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const teg = document.getElementsByTagName('h4');

for (let i = 0; i < teg.length; i++) {
  teg[i].style.color = 'blue';
 }

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

for(let i = 0; i < 6; i++){
  randomString += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
}
console.log(randomString);
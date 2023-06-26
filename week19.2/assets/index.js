let numbers = [];

for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);

positivNumbers = numbers.filter(n => n >0);
console.log(positivNumbers);


for(let squareIt of numbers){
    console.log(Math.pow(squareIt, 2));
}

for (let i = 1; i < numbers.length; i++)
    for (var j = 0; j < i; j++)
        if (numbers[i] > numbers[j]) {
            let x = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = x;
        }

console.log(numbers);
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];


const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(`Мінімальне значення: ${min}`);
console.log(`Максимальне значення: ${max}`);


const evenCount = arr.filter(num => num % 2 === 0).length;
const oddCount = arr.length - evenCount;
console.log(`Кількість парних чисел: ${evenCount}`);
console.log(`Кількість непарних чисел: ${oddCount}`);


const twoDigitCount = arr.filter(num => Math.abs(num) >= 10 && Math.abs(num) <= 99).length;
console.log(`Кількість чисел, що містять дві цифри: ${twoDigitCount}`);


const positiveCount = arr.filter(num => num > 0).length;
const negativeCount = arr.filter(num => num < 0).length;
console.log(`Кількість додатних чисел: ${positiveCount}`);
console.log(`Кількість від’ємних чисел: ${negativeCount}`);


arr.sort((a, b) => a - b);
console.log('Відсортований масив за зростанням:', arr);


const reversedArr = arr.slice().reverse();
console.log('Масив з оберненим порядком елементів:', reversedArr);

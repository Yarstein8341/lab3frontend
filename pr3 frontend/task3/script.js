const N = 7;
const M = 5;
const matrix = Array.from({ length: N }, () => Array.from({ length: M }, () => Math.floor(Math.random() * 20) - 10));


console.log("Початкова матриця:");
console.log(matrix);
console.log();


const positiveCount = matrix.flat().filter(element => element > 0).length;
console.log("Кількість додатних елементів:", positiveCount);
console.log();


const nonZeroRowsCount = matrix.filter(row => !row.includes(0)).length;
console.log("Кількість рядків без нульових елементів:", nonZeroRowsCount);
console.log();


const zeroColumnsCount = matrix[0].map((_, colIndex) => matrix.some(row => row[colIndex] === 0)).filter(Boolean).length;
console.log("Кількість стовпців з нульовим елементом:", zeroColumnsCount);
console.log();


const maxConsecutiveRow = matrix.reduce((maxIndex, row, currentIndex) => {
    const consecutiveLength = row.reduce((maxCount, _, index, array) => {
        if (index < array.length - 1 && array[index] === array[index + 1]) {
            return maxCount + 1;
        }
        return maxCount;
    }, 1);
    return consecutiveLength > maxIndex.maxCount ? { maxCount: consecutiveLength, index: currentIndex } : maxIndex;
}, { maxCount: 0, index: 0 }).index;
console.log("Номер рядка з найдовшою серією однакових елементів:", maxConsecutiveRow);
console.log();


const positiveRowsProduct = matrix.map(row => row.every(element => element >= 0) ? row.reduce((acc, val) => acc * val, 1) : 0);
console.log("Добуток елементів в рядках без від’ємних елементів:", positiveRowsProduct);
console.log();


const positiveColumnsSum = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]).every(element => element >= 0) ? matrix.reduce((acc, row) => acc + row[colIndex], 0) : 0);
console.log("Сума елементів в стовпцях без від’ємних елементів:", positiveColumnsSum);
console.log();


const negativeColumnsSum = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]).some(element => element < 0) ? matrix.reduce((acc, row) => acc + row[colIndex], 0) : 0);
console.log("Сума елементів в стовпців з від’ємним елементом:", negativeColumnsSum);
console.log();


const transposedMatrix = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
console.log("Транспонована матриця:");
console.log(transposedMatrix);

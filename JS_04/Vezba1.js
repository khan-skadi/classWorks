// Find the sum of the squares of the numbers from 101-150.
function getNumbers(start, end) {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}

const arrNumbers = getNumbers(101, 150);

// calc square sum

function calcSumSquare(arr) {
  const square = 2;
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    // sum += arr[i] * arr[i];
    sum += Math.pow(arr[i], square);
    i++;
  }
  return sum;
}

console.log(calcSumSquare(arrNumbers));

let sum1 = 0;

for (let j = 101; j <= 150; j++) {
  sum1 += j * j;
}

console.log(sum1);

//Enter some numbers
// let numbersCount = prompt("How many numbers do you want to enter?");
// let counter = 0;
// do {
//   let numInput;
//   if (parseInt(numbersCount) <= 0) {
//     numInput = prompt(`You must enter atleast one number!`);
//   } else {
//     numInput = prompt(`Enter the ${counter + 1} number`);
//     console.log(numInput);
//     counter++;
//   }
// } while (counter < parseInt(numbersCount));

//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function stringRevers(str) {
  let strContainer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strContainer += str[i];
  }
  return strContainer;
}

console.log(stringRevers("hello world"));

//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

let arra = [10, 20, 21, 11];

function numberSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(numberSum(arra));

// Write a JavaScript program to find the most frequent element in an array and return it.

let arrays = [4, 5, 7, 88, 4, 4, 1, 4, 4, 3, 3];

function findFrequent(arr) {
  const frequencyMap = {};
  for (let i = 0; i < arr.length; i++) {
    frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
  }
  console.log("value", frequencyMap);

  let mostFrequentElement;
  let maxFrequency = 0;
  for (const element in frequencyMap) {
    if (frequencyMap[element] > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequencyMap[element];
    }
  }

  return mostFrequentElement;
}
console.log(findFrequent(arrays));

//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

let arro = [4, 5, 6, 7, 5];
function sumTwoIndx(arr, indx, indx2) {
  let sumTwo = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (indx == i && indx2 == j) {
        sumTwo = arr[i] + arr[j];
      }
    }
  }
  return sumTwo;
}
console.log(sumTwoIndx(arro, 1, 4));

//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calCu(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Cannot divide by zero.";
      }
      return num1 / num2;
    default:
      return "Error: This is Invalid operator";
  }
}

console.log(calCu(15, "+", 2));

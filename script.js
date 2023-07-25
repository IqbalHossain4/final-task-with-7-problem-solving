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

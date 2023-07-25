//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function stringRevers(str) {
  let strContainer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strContainer += str[i];
  }
  return strContainer;
}

console.log(stringRevers("hello world"));

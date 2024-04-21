// 1.  Print odd numbers in an array

// Anonymous Funcion
var oddNums = function (array) {
  let newArr = [];
  array.forEach((element) => {
    if (element % 2 == 1) {
      newArr.push(element);
    }
  });
  return newArr;
};
let oddArr1 = [12, 13, 14, 15, 16, 17];
console.log(oddNums(oddArr1));

// IIFE
let oddArr2 = [12, 13, 14, 15, 16, 17];
(function (array) {
  let newArr = [];
  array.forEach((element) => {
    if (element % 2 == 1) {
      newArr.push(element);
    }
  });
  console.log(newArr);
})(oddArr2);

// Arrow Function
let oddNums = (array) => {
  let newArr = [];
  array.forEach((element) => {
    if (element % 2 == 1) {
      newArr.push(element);
    }
  });
  return newArr;
};
let oddArr3 = [12, 13, 14, 15, 16, 17];
console.log(oddNums(oddArr3));

////////////////////////////////////////////////////////////////////

// 2. Convert all the strings to title caps in a string array
// Anonymous Funcion
function capitalize(strArr) {
  let finalArr = [];
  strArr.forEach((element) => {
    element = element.toLowerCase();
    let str = element.split("");
    str[0] = str[0].toUpperCase();
    str = str.join("");
    finalArr.push(str);
  });
  return finalArr;
}
let stringArr1 = ["GUVI", "STring", "number", "array", "TitlE"];
console.log(capitalize(stringArr1));

// IIFE
let stringArr2 = ["GUVI", "STring", "number", "array", "TitlE"];
(function capitalize(strArr) {
  let finalArr = [];
  strArr.forEach((element) => {
    element = element.toLowerCase();
    let str = element.split("");
    str[0] = str[0].toUpperCase();
    str = str.join("");
    finalArr.push(str);
  });
  console.log(finalArr);
})(stringArr2);

// Arrow Funcion
let capitalize = (strArr) => {
  let finalArr = [];
  strArr.forEach((element) => {
    element = element.toLowerCase();
    let str = element.split("");
    str[0] = str[0].toUpperCase();
    str = str.join("");
    finalArr.push(str);
  });
  return finalArr;
};
let stringArr3 = ["GUVI", "STring", "number", "array", "TitlE"];
console.log(capitalize(stringArr3));

////////////////////////////////////////////////////////////////////

//3.  Sum of all numbers in an array
// Anonymous Function
function sum(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}
let sumArr1 = [12, 145, 2222, 98, 49];
console.log(sum(sumArr1));

// IIFE
let sumArr2 = [12, 145, 2222, 98, 49];
(function sum(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  console.log(sum);
})(sumArr2);

// Arrow Funcion
var sum = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};
let sumArr3 = [12, 145, 2222, 98, 49];
console.log(sum(sumArr3));
////////////////////////////////////////////////////////////////////

// 4. Return all the prime numbers in an array
// Anonymour Funcion
function prime(array) {
  let primeArray = [];
  array.forEach((element) => {
    let count = 0;
    for (let i = 2; i <= element; i++) {
      if (element % i === 0) {
        count++;
      }
    }
    if (count === 1) {
      primeArray.push(element);
    }
  });
  return primeArray;
}
let array1 = [12, 13, 14, 15, 1, 17, 2, 3, 7, 73];
console.log(prime(array1));

// IIFE
let array2 = [12, 13, 14, 15, 1, 17, 2, 3, 7, 73];
(function prime(array) {
  let primeArray = [];
  array.forEach((element) => {
    let count = 0;
    for (let i = 2; i <= element; i++) {
      if (element % i === 0) {
        count++;
      }
    }
    if (count === 1) {
      primeArray.push(element);
    }
  });
  console.log(primeArray);
})(array2);

// Arrow Funcion
var prime = (array) => {
  let primeArray = [];
  array.forEach((element) => {
    let count = 0;
    for (let i = 2; i <= element; i++) {
      if (element % i === 0) {
        count++;
      }
    }
    if (count === 1) {
      primeArray.push(element);
    }
  });
  return primeArray;
};
let array3 = [12, 13, 14, 15, 1, 17, 2, 3, 7, 73];
console.log(prime(array3));
////////////////////////////////////////////////////////////////////

// 5. Return all the palindromes in an array
// Anonymous Function
function palindrome(array) {
  let revNumArray = [];
  array.forEach((element) => {
    let revNum = +element.toString().split("").reverse().join("");
    if (revNum === element) {
      revNumArray.push(element);
    }
  });
  return revNumArray;
}
let palArray1 = [121, 145, 33, 5665, 786];
console.log(palindrome(palArray1));

// IIFE
let palArray2 = [121, 145, 33, 5665, 786];
(function palindrome(array) {
  let revNumArray = [];
  array.forEach((element) => {
    let revNum = +element.toString().split("").reverse().join("");
    if (revNum === element) {
      revNumArray.push(element);
    }
  });
  console.log(revNumArray);
})(palArray2);

// Arrow function
var palindrome = (array) => {
  let revNumArray = [];
  array.forEach((element) => {
    let revNum = +element.toString().split("").reverse().join("");
    if (revNum === element) {
      revNumArray.push(element);
    }
  });
  return revNumArray;
};
let palArray3 = [121, 145, 33, 5665, 786];
console.log(palindrome(palArray3));
////////////////////////////////////////////////////////////////////

// 6. Return median of two sorted arrays of the same size.
// Anonymous Funcion
function medianOfArray(array1, array2) {
  let finalArr = [];
  let sum = 0;
  array1 = array1.sort((a, b) => a - b);
  array2 = array2.sort((a, b) => a - b);
  finalArr = [...array1, ...array2];
  if (array1.length === array2.length) {
    sum = finalArr[array1.length - 1] + finalArr[array1.length];
  }
  return (sum / 2).toFixed(0);
}
let sortArray1 = [2, 3, 5, 6, 9];
let sortArray2 = [44, 87, 23, 90, 21];
console.log(medianOfArray(sortArray1, sortArray2));

// IIFE

let sortArray3 = [2, 3, 5, 6, 9];
let sortArray4 = [44, 87, 23, 90, 21];
(function medianOfArray(array1, array2) {
  let finalArr = [];
  let sum = 0;
  array1 = array1.sort((a, b) => a - b);
  array2 = array2.sort((a, b) => a - b);
  finalArr = [...array1, ...array2];
  if (array1.length === array2.length) {
    sum = finalArr[array1.length - 1] + finalArr[array1.length];
  }
  console.log((sum / 2).toFixed(0));
})(sortArray3, sortArray4);

// Arrow Function
var medianOfArray = (array1, array2) => {
  let finalArr = [];
  let sum = 0;
  array1 = array1.sort((a, b) => a - b);
  array2 = array2.sort((a, b) => a - b);
  finalArr = [...array1, ...array2];
  if (array1.length === array2.length) {
    sum = finalArr[array1.length - 1] + finalArr[array1.length];
  }
  return (sum / 2).toFixed(0);
};
let sortArray5 = [2, 3, 5, 6, 9];
let sortArray6 = [44, 87, 23, 90, 21];
console.log(medianOfArray(sortArray5, sortArray6));
////////////////////////////////////////////////////////////////////

// 7. Remove duplicates from an array
// Anonymous Funcion
function duplicates(array) {
  return [...new Set(array)];
}
let duplicateArray1 = [12, 45, 35, 12, 35, 45, 89];
console.log(duplicates(duplicateArray1));

// IIFE
let duplicateArray2 = [12, 45, 35, 12, 35, 45, 89];
(function duplicates(array) {
  console.log([...new Set(array)]);
})(duplicateArray2);
////////////////////////////////////////////////////////////////////

//  8. Rotate an array by k times
// Anonymous Funcion
function rotateArray(array, times) {
  for (let i = 0; i < times; i++) {
    let lastElement = array.pop();
    array.unshift(lastElement);
  }
  return array;
}
let originalArray1 = [12, 45, 35, 52, 5, 93, 89];
console.log(rotateArray(originalArray1, 4));

// IIFE
let originalArray2 = [12, 45, 35, 52, 5, 93, 89];
(function rotateArray(array, times) {
  for (let i = 0; i < times; i++) {
    let lastElement = array.pop();
    array.unshift(lastElement);
  }
  console.log(array);
})(originalArray2, 4);
////////////////////////////////////////////////////////////////////

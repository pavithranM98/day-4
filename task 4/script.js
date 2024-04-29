// A.Print odd numbers in an array
const printOddNumbers = function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5]);

(function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5]);

// B.Convert all the strings to title caps in a string array
const convertToTitleCaps = function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};

const inputArray = ["apple", "banana", "cherry"];
const titleCapsArray = convertToTitleCaps(inputArray);
console.log(titleCapsArray);

const result = (function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
})(["orange", "grape", "kiwi"]);

console.log(result);

// C.Sum of all numbers in an array
const sumArray = function (arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const numbers = [1, 2, 3, 4, 5];
const arraySum = sumArray(numbers);
console.log(arraySum);

const sum = (function (arr) {
  return arr.reduce((sum, num) => sum + num, 0);
})([10, 20, 30, 40, 50]);

console.log(sum);

// D.Return all the prime numbers in an array
const getPrimes = function (arr) {
  const isPrime = function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return arr.filter((num) => isPrime(num));
};

const numbersArray = [2, 3, 5, 7, 8, 11, 13, 17];
const primesArray = getPrimes(numbersArray);
console.log(primesArray);

// IIFE
const primes = (function (arr) {
  const isPrime = function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return arr.filter((num) => isPrime(num));
})([23, 29, 31, 37, 41, 43]);

console.log(primes);

// E.Return all the palindromes in an array
const getPalindromes = function (arr) {
  const isPalindrome = function (str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  return arr.filter((word) => isPalindrome(word));
};

const wordsArray = ["level", "hello", "radar", "world", "madam"];
const palindromesArray = getPalindromes(wordsArray);
console.log(palindromesArray);

// IIFE
const palindromes = (function (arr) {
  const isPalindrome = function (str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  return arr.filter((word) => isPalindrome(word));
})(["noon", "apple", "deed", "banana", "racecar"]);

console.log(palindromes);

// F. Return median of two sorted arrays of the same size.
const findMedianSortedArrays = function (arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);

  const mid = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    // If the merged array has an even length, return the average of the middle two elements
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    // If the merged array has an odd length, return the middle element
    return mergedArray[mid];
  }
};

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const median = findMedianSortedArrays(array1, array2);
console.log(median);

// IIFE
const result = (function (arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);

  const mid = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
})([10, 20, 30], [15, 25, 35]);

console.log(result);

// G.Remove duplicates from an array
const removeDuplicates = function (arr) {
  return Array.from(new Set(arr));
};

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates);

// IIFE
const result = (function (arr) {
  return Array.from(new Set(arr));
})([5, 6, 7, 7, 8, 9]);

console.log(result);

//H.Rotate an array by k times
const rotateArray = function (arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k is greater than array length

  const rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)];
  return rotatedArray;
};

const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(originalArray, 2);
console.log(rotatedArray);

// IIFE
const result = (function (arr, k) {
  const n = arr.length;
  k = k % n;

  const rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)];
  return rotatedArray;
})([10, 20, 30, 40, 50], 3);

console.log(result);

// Arrow Function
// A. Print odd numbers in an array
const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5]);

// B. Convert all the strings to title caps in a string array
const convertToTitleCaps = (arr) => {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};

const inputArray = ["hello", "world"];
const titleCapsArray = convertToTitleCaps(inputArray);
console.log(titleCapsArray);

// C. Sum of all numbers in an array
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

const numbers = [1, 2, 3, 4, 5];
const arraySum = sumArray(numbers);
console.log(arraySum);

// D. Return all the prime numbers in an array
const getPrimes = (arr) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return arr.filter((num) => isPrime(num));
};

const numbersArray = [2, 3, 5, 7, 8, 11, 13, 17];
const primesArray = getPrimes(numbersArray);
console.log(primesArray);

// E. Return all the palindromes in an array
const getPalindromes = (arr) => {
  const isPalindrome = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  return arr.filter((word) => isPalindrome(word));
};

const wordsArray = ["level", "hello", "radar", "world", "madam"];
const palindromesArray = getPalindromes(wordsArray);
console.log(palindromesArray);

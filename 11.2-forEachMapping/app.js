arrInt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrString = ["computer", "house", "pen", "car", "book"];
str = "the house is very big";
//1.
const doubleValues = (arr) => {
  const array = arr.map(function (num) {
    return num * 2;
  });
  return array;
};
console.log(doubleValues(arrInt));

//2.
const onlyEvenValues = (arr) => {
  const array = [];
  arr.forEach(function (num) {
    if (num % 2 === 0) {
      array.push(num);
    }
  });
  return array;
};
console.log(onlyEvenValues(arrInt));

//3.
const showFirstAndLast = (arr) => {
  const array = [];
  arr.forEach(function (num, idx) {
    if ((idx === 0 || idx === arr.length - 1) && typeof num ==='string') {
      array.push(num);
    }
  });
  return array;
};
console.log(showFirstAndLast(arrString));

//4.
const vowelCount = (str) => {
  const obj = {};
  const strNCS = str.toLowerCase().split("");
  let vowels = "aeiou";
  strNCS.forEach(function (letter) {
    if (vowels.indexOf(letter) !== -1) {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
};
console.log(vowelCount(str));



 //5.
  const capitalize = (str) => {
    const arr = str.split(''); 
    str = arr.map(function (letter) {
       return letter.toUpperCase();
    });
    return str.join('');
  };
  console.log(capitalize(str));
  
//6.
const shiftLetters = (str) => {
    const arrStr = str.split("");
    const newArr = arrStr.map(function (letter) {
      let newLetter = letter.charCodeAt(0) + 1; //charCodeAt Get the Unicode of the first character in a string
      newLetter = String.fromCharCode(newLetter);
      return newLetter;
    });
    return newArr.join("");
  };
  console.log(shiftLetters("awesome"));


//7.
const swapCase = (str) => {
        const arr = str.split(' '); 
        str = arr.map(function (word) {
           return word.toUpperCase();
        });
        return str.join(' ');
      };
      console.log(swapCase(str));
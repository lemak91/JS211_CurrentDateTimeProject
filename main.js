// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.

const convertNumbertoString = () => {
  let string = document.getElementById("myTextNumToString").value;
  Number(string);
  document.getElementById("numToString").innerHTML = string;
};
// console.log(typeof string);

// Write a JavaScript program to convert a string to the number.

const convertStringtoNumber = () => {
  let number = document.getElementById("myTextStringToNum").value;
  number.toString();
  document.getElementById("stringToNum").innerHTML = number;
};
// console.log(convertStringtoNumber(10));

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

const checkDataType = () => {
  let datatypes = document.getElementById("myTextCheckDataType").value;
  let inputType = typeof datatypes;
  document.getElementById("checkDataType").innerHTML = inputType;
  console.log(inputType);
};

// console.log(checkDataType(true));
// console.log(checkDataType(16));
// console.log(checkDataType("what is this"));

// Write a JavaScript program that adds 2 numbers together.

const addNumbers = () => {
  let num1 = document.getElementById("myTextNum1").value;
  let num2 = document.getElementById("myTextNum2").value;
  num1 = Number(num1);
  num2 = Number(num2);
  let sum = num1 + num2;
  document.getElementById("addNumbers").innerHTML = sum;
};

// Write a JavaScript program that runs only when 2 things are true.

const evenOdd = () => {
  let number1 = document.getElementById("myTextNumber1").value;
  let number2 = document.getElementById("myTextNumber2").value;
  number1 = Number(number1);
  number2 = Number(number2);
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    document.getElementById("evenOdd").innerHTML = "both numbers are even";
  } else {
    document.getElementById("evenOdd").innerHTML = "both numbers are not even";
  }
};

// Write a JavaScript program that runs when 1 of 2 things are true.

const evenOrOdd = () => {
  let numberA1 = document.getElementById("myTextNumberA1").value;
  let numberA2 = document.getElementById("myTextNumberA2").value;
  numberA1 = Number(numberA1);
  numberA2 = Number(numberA2);
  if (numberA1 % 2 === 0 || numberA2 % 2 === 0) {
    document.getElementById("evenOrOdd").innerHTML = "both numbers are even";
  } else {
    document.getElementById("evenOrOdd").innerHTML = "both numbers are not even";
  }
};

// Write a JavaScript program that runs when both things are not true.

const bothNotEven = () => {
  let numA1 = document.getElementById("myTextNumA1").value;
  let numA2 = document.getElementById("myTextNumA2").value;
  numA1 = Number(numA1);
  numA2 = Number(numA2);
  if (number1 % 2 !== 0 && number2 % 2 !== 0) {
    document.getElementById("evenOdd").innerHTML = "both numbers are not even";
  } else {
    document.getElementById("evenOdd").innerHTML = "both numbers are not even";
  }
};

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// const numInput = document.getElementById("num2str")
// const result = convertNumbertoString(num2str.value)

// num2str.value
// console.log(results)

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

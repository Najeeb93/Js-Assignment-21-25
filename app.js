

//----ASSIGNMENT # 21-25 ------

//---- Question No: 1

// var firstName = prompt("Please enter your first name: ");
// var  lastName = prompt("Please enter your last name: ");

// var fullName = firstName + " " + lastName;

// alert("hello " + fullName + "!")




//----- Question No: 2

// var mobileModel = prompt("Please enter your  mobile phone model number: ");

// document.write(`My favorite phone is: ${mobileModel.length}`)


//--Question No: 3

// var str = "pakistani";

// var index = str.indexOf("n");
// document.write("string: Pakistani"+ "<br>" + "Index of 'n': " + index)

//---Question No: 4

// var str = "Hello World";

// var index = str.lastIndexOf("l");
// document.write("The last index of the letter 'l' in the word 'Hello World' is: " + index);

//--- Question No: 5


// var str = "pakistani";

// var char = str.charAt(3);

// document.write(`srting: pakistani <br> Character at index 3: ${char}`);

//---Question No: 6

// var text1 = "Hello";

// var text2 = "World";

// var text3 = text1.concat(" ",text2);

// document.write(text3)

// --- Question No: 7

// var str = "Hyderabad";

// var newStr = str.replace("Hyderabad","Islamabad")
// document.write("City:Hyderabad","<br>","After replacement:",newStr)

//---- Question No: 8

// var message = "Ali and Sami are best friends. They play cricket and football together:";

// var newMessage = message.replace(/and/g,"&");
// document.write(newMessage);

//-----Question No: 9

// var str = "472";

// var num = Number(str);

// document.write("value:"+ str + "<br>" + typeof(str) + "<br>" + "Value:" + num + "<br>" + typeof(num) )

//----Question No: 10

// var userInput = prompt("Please enter a string");

// var capitalized = userInput.toLocaleUpperCase();

// document.write("The capitalized string is: ", capitalized);

//----Question No: 11

// var userInput = prompt("Please enter a string");

// var titleCase = userInput.toLowerCase();

// document.write("The title cased string is: " + titleCase)


//----Question No: 12

// var numb = "35.36";

// numb = numb.replace(".","")

// document.write(numb)

//----- Question No: 13 ----//


// var userName = prompt("Please enter your username");

// var specialSymbols = ["@",".",","];

// for(var i = 0; i < specialSymbols.length; i++){
//     if(userName.includes(specialSymbols[i])){
//         userName = prompt("Your username contain a special symbol. Please enter a valid  username:")
//     }
// }

// var storedUsername = userName;

// document.write("Your username is: " + storedUsername);

//------- Question No: 14 ----//

// var arr = ["cake","apple pie","cookie","chips","patties"];

// var userInput = prompt("Welcome to BLUE BAKRY.What do you want to order Sir/Ma'am?").toLowerCase();

// var check = false;
// for(i = 0; i < arr.length; i++){
//     if(userInput == arr[i]){
//         check = true;
//         var index = "";
//         document.write(`${arr[i]} is available at index ${arr.indexOf(userInput)} in our bakery`);
// }

// }
// if(check === false) {
//     document.write(`We are sorry.${userInput} is not available in our bakery`)
// }

// ---- Question No: 15 ----//




//---- Question No: 16 ----//

// var university = "University of Karachi";

// var arr = university.split("")
// for(i = 0; i < arr.length; i++) {
//     document.write(arr[i]+"<br>");
// }

// ---- Question No: 17 ----- //

// var userInput = prompt("Enter the words") 
//  lastChar = userInput.charAt(userInput.length-1);

//  document.write("User input: "+ userInput + "<br>" + " Last character of input: " + lastChar)

// ---- Question No: 18 ------ //

// var str = "the quick brown fox jumps over the lazy dog.";

// var result = str.split(' ');

// var count = 0;

// for(i = 0; i < result.length; i++) {
//     if(result[i] == "the"){
//         count++
//     }

// }
// document.write("Text: The  quick brown fox jumps over the lazy dog" + "<br>" + "There are " + count +  " occurrence(s) of 'the' ")


//-----ASSIGNMENT # 26-30 ---------//


//--- Question No: 1 --- //

// var num = 3.45214;
// document.write("number: " + num  + "<br>");
// document.write("round off value: " + Math.round(num) + "<br>");
// document.write("floor value: " + Math.floor(num) + "<br>");
// document.write("ceil value: " + Math.ceil(num) + "<br>");  

//---- Question No: 2 ---- //

// var num = -2.673;
// document.write("number: " + num + "<br>");
// document.write("round off value: " + Math.round(num)  + "<br>");
// document.write("floor value: " + Math.floor(num) + "<br>");
// document.write("ceil value: " + Math.ceil(num) +"<br>");

//---- Question No: 3 ----//

// var num = -4;

// document.write("The absolute value of " + num + " is " + Math.abs(num));

//--- Question No: 4 -----//


// var num = Math.random()*6;
// var num2 = Math.round(num);

// document.write("random dice value: " + num2);

//---- Question No: 5 ---- //

// var num = Math.floor(Math.random()*2)

// if(num == 1){
//    document.write("random coin value: Heads")
// }
// else{
//    document.write("random coin value: Tails")
// }

// ---  Question No: 6 --- //

// var num = Math.round(Math.random()*100);

// document.write("random number between 1 and 100: " + num);

//---- Question No: 7 --- //

// var userInput = +prompt("Enter your weight in kilograms");

// document.write(`The weight of user is ${userInput} kilograms`);

//----- Question No: 8 ---//


// var secretNumber = [2,4,6,7,8];

// var userInput = +prompt("Enter a number between 1 and 10");
// var flag = false

// for(i = 0; i < secretNumber.length; i++) {
//     if(userInput === secretNumber[i]){
//         flag = true
//         document.write("your selected number right")
//     }
// }   
// if(flag === false) {
//     document.write("Try Again!")
// }


// ------ ASSIGNMENT # 31-34 ------//

// --- Question No: 1 --//

// var date = new Date();

// document.write(date);

// --- Question No: 2 --//

// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var date = new Date();
// var month = date.getMonth()
// months = months[month]

// document.write(months)

// --- Question No: 3 ---//

// var days = ["sun","mon","tues","wed","thurs","fri","sat"];

// var date = new Date();

// var day = date.getDay();

// days = days[day];

// document.write("Today is "+ days)

// --- Question No: 4 ---//

// var days = ["sun","mon","tues","wed","thurs","fri","sat"];

// var date = new Date();

// var day = date.getDay();

// var days = days[day];


// if(days === "sat"  || days === "sun"){
   
    
//     document.write("Its Fun  Day " +  days );
// }

// --- Question No: 5 ---//

// var now = new Date();

// var day = now.getDate();

// if(day < 16){
//     document.write("First fifteen days")
// }
// else{
//     document.write(`Today is ${day} of month`)
// }

// --- Question No: 6 ---//

// var date = new Date();

// var mili = date.getTime();

// mins = mili / 60000;

// document.write(mins)

// --- Question No: 7 ---//

// var time = new Date().getHours()

// if(time < 12){
//     document.write("It's Am")
// }
// else{
//     document.write("It's Pm")
// }

//---- Question No: 8 ---//

// var laterDate = new Date("31 dec, 2020")

// document.write(laterDate)

// ---  Question No: 9 ----//

// var afteEid = new Date("15 june, 2024").getTime();

// var nowDate = new Date().getTime();

// var  leftTime = afteEid - nowDate

// var convert = Math.floor(leftTime / (1000 * 60 * 60 * 24));

// document.write(convert  +  " Days to left Eid ul Adha")

// ---  Question No: 10 ---- //

// var date = new Date("5 dec, 2015");

// var end = new Date("5 dec,2015").getTime()

// var start = new Date("1,jan 2015").getTime()

// var mint = end - start

// var convert = mint / 1000 / 60
// document.write("On reference Date " + date + "<br>"+ convert + " Seconds had passed since beginning of 2015 ")


// ---- Question No: 11 --- //

// var currenDate = new Date();

// var date = new Date()

// var hours = date.getHours();

// date.setHours(hours + 1);

// document.write("Current date: "+ currenDate + "<br>" + " 1 hours ago,it was  "+ date);

// ---- Question No: 12 ----//

// var current = new Date();

// var date = new Date();

// date.setFullYear(date.getFullYear()-100);

// document.write(`current date: ${current} <br> 100 years back,it was ${date}`);

// --- Question No: 13 ---//

// var age = prompt('Enter your Age');

// var birthYear = (new Date()).getFullYear()-age;

// document.write("Your birth year is " + birthYear)

// ---- Question No: 14 --- //

// var customerName = prompt("Enter your Name");

// var monthNames = ["January","February","March","April", "May", "June","July","August","September","October","November","December"];

// var month = new Date().getMonth();

// monthNames = monthNames[month];

// var units = +prompt("Enter Number of Units");

// var chargesPerUnits = 16;

// var netAmount = units * chargesPerUnits;

// var latePaymentCharges = 350;

// var grossAmountPay = netAmount + latePaymentCharges;

// document.write(`Customer Name: ${customerName} <br>`);
// document.write(`Months: ${monthNames} <br>`);
// document.write(`Number of units: ${units} <br>`);
// document.write(`Charges per units: ${chargesPerUnits} <br>`);
// document.write(`Net Amount Payable (Within Due Date): ${netAmount} <br>`);
// document.write(`Late payment surcharges: ${latePaymentCharges} <br>`);
// document.write(`Gross Amount Payable (after Due Date): ${grossAmountPay}`);

// ------- Practice Question ----- //

// var x = 1;
// function foo(x) {
//     x = x + x;
// }
// foo(x);
// console.log(x);
// const x = { a: 1};
// const y = { a: 1};
// console.log(x.a === y.a);
// let num = 0;
// function test() {
//     var num = 1;
//     console.log(num);
// };
// console.log(test());
// console.log(num);
// const numbers = [1,2,3,4];
// const [x] = numbers;
// console.log(x);
// let arr1 = [1,2,3];
// let arr2 = arr1.push(5);
// console.log(arr1.length);
// let str = "Baby";
// str[1] = "A";
// console.log(str);
// let x = [10] == [10];
// let y = x ? true : false;
// console.log(y);
// let a = 10;
// let b = a++;
// console.log(a, b);
// let func = () => {
//     console.log("Baby");
// };
// let result = func();
// onsole.lcog(result);
// console.log(+'10'-5);
// function baby(x, y=x){
//     return x * x;
// };
// console.log(baby(5));
// let count = 0;
// const increment = () => ++count;
// console.log(typeof increment);
// let a = 5;
// let b = a;
// a = 10;
// console.log(b);
// var obj = {
//     a: 1,
//     b: 2,
//     a: 3
// };
// console.log(obj.a);
// const [a, , b] = [1,2,3];
// console.log(a, b);
// let x = [1,2,3];
// let y = x;
// x.push(4);
// console.log(x);
// let x = 0;
// let y = x++;
// console.log(y,x);
// var x = 0;
// var y = 10;
// if(x){
//     console.log(x);
// }
// if(y){
//     console.log(y);
// }
// var array1 = ['a','b','c'];
// var array2 = array1;
// array2.length = 0;
// console.log(array1, array2);
// let arr = [10,20,30];
// let index = 0;
// console.log(arr[index++]);
// console.log(arr[++index]);
// let data = [1,2,3,4,5];
// let res = data.slice(1,3);
// console.log(res);
// var a = 10;
// let a = 20;
// console.log(a);
// function add(...n) {
//     console.log(n);
// }
// let num = [2,4,6];
// add(...num);
// let arr = ['eat','sleep','baby'];
// let a = arr.pop();
// console.log(a);
// let x = [1,2,3];
// let y = x;
// x = [];
// console.log(y);
// let a = 5;
// let b = a;
// b = 10;
// console.log(a);
// console.log(b);
// let a = [1,2,3];
// let b = [4,5,6];
// console.log(a + b);
// let x = 5;
// let y = x ** 2 * x;
// console.log(y);
// let x = 5;
// x += x++;
// console.log(++x);
// let a = 5;
// let b = a;
// console.log(++b);
// console.log([] == false);
// console.log({} + {});

// var x = Math.floor(Math.random());
// if(x > 0.5) {
//     var x = 1;
// }else {
//     var x = 2;
// }
// console.log(x);
// const arrNum = [1,2,8,2,9,8];
// const duplicates = arrNum.filter((ele,index,arr) => arr.indexOf(ele) !== index);
// console.log(duplicates);
// let p = [1,2,3,4];
// p[p.length-1]++;
// console.log(p);
// console.log({} == {});
// console.log({} === {});
// let arr = ['baby1','baby2,','baby3'];
// let { 2: c} = arr;
// console.log(c);
// let a = 0;
// let b = 5;
// console.log(a ?? b);
// let n = 5;
// let p = n++;
// console.log(n, p);
// let a = 5 > 4;
// let b = 4 < 5;
// let c = a >= b;
// console.log(c);
// const num = 20;
// var fact = 1;
// for(let i = 1; i <= num; i++) {
// fact *= i
// }
// console.log(fact);
// let x = true;
// let y = false;
// console.log(x && y);
// const arry = [];
// arry.foo = 'follow';
// console.log(arry.length);
// const a = {x: 1};;
// const b = {x: 1};
// console.log(a === b);
// console.log(a.x === b.x);
// let a = 5;
// let b = a++;
// let c = a + b;
// console.log(c);
// const arr1 = [1,2,3];
// const arr2 = [...arr1, 4,5];
// console.log(arr2);
// const count = 5;
// const increment = () => ++count;
// console.log(typeof increment);
// const arr = [1,2,3];
// const [a, b, c, d = 4] = arr;
// console.log(a, b, c, d);
// let hi = function hello(){
//     console.log('hi');
// };
// hello();
// let x = 0;
// let y = 0;
// console.log(++x === y++);
// let x = 5;
// let y = '5';
// console.log(x != y);
// function hi() {
//     console.log('hello');
// };
// console.log(window.hi());
// if("false") {
//     console.log('Truthy');
// } else {
//     console.log('Falsy');
// }
// const arr = [2,4];
// arr.concat(6,8);
// console.log(arr);
// const user = {
//     firstName: 'Baby',
//     lastName: 'Girl',
//     age: 15,
// };
// console.log('age' in user);
// const arr = [
//     [12,4,3,6],
//     [43,5],
//     [7],
//     [8,9,10],
// ]
// for(let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
        
//         console.log(arr[i][j]);
//     }
// }
// let x = 10;
// let y = 5;
// console.log(x++ - --y);
// function sortStringa(arr) {
//     return arr.sort();
// }
// const strings = ['apple','elderberry','cherry','date','banana'];
// console.log(sortStringa(strings));
// let x = 'false';
// let y = !x;
// console.log(y);
// var name = 'john';
// function sayName(){
//     console.log(name);
//     var name = 'jane'
// }
// sayName();
// const arr = [1,2,3];
// delete arr[0];
// console.log(arr);
// const obj = {
//     id: 42,
//     getId: () => {
//         return this.id;
//     }
// };
// console.log(obj.getId());
// let  x = 6;
// x++;
// console.log(x);
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);
// function foo(a, b, c) {
//     arguments[0] = 10;
//     console.log(a, arguments[0]);
// }
// foo(1, 2, 3)
// for(var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1)
// }
// const obj = { x: 1, y: 2};
// const key = ['x'];
// console.log(obj[key]);
// const number = [1,2,3];
// const [x,y,z] = number;
// console.log(x,y,z);
// let a = [null];
// let b = 5;
// console.log(a ? a : b);
// if({}) {
//     console.log("true");
// }else {
//     console.log("false");
// }
// let a = 10;
// (() => {
//     console.log(a);
//     var a = 20;
// })();
// function foo(a, a) {
//     console.log(a);
// }
//  foo(1, 2);
// let num = 5.678;
// console.log(num.toFixed(1));
// let a = 5 > 4;
// let b = 4 < 5;
// let  c = a >= b;
// console.log(c);
// const a = [1,2,3];
// a[3] = 4;
// a.push(5);
// console.log(a);
// let a = 'hello';
// let b = [...a];
// console.log(b.length);
// function add(x = 5, y = x) {
//     return x + y;
// }
// console.log(add(3));
// for(let i = 1; i < 5; i++) {
//     if(i == 5) {
//         console.log('i is 5 now');
//     }
// }
// const arr = [1,2,3];
// arr[10] = 10;
// console.log(arr.length);
// console.log(arr[9]);
// let obj = {
//     val: function (a) {
//         return a ** 3;
//     },
// };
// console.log(obj.val(3));
// const x = [1,2,3];
// const y = x.reverse();
// console.log(y);
// console.log(x === y);
// const a = 5;
// const b = new Number(5);
// console.log(a == b);
// console.log(a === b);
// let obj = {
//     address: {
//         city: 'Karachi',
//     },
// };
// let {address} = obj;
// let {city} = address;
// console.log(city);
// function hi() {
//     console.log('Hello');
// };
// console.log(window.hi());
// const add = (a, b) => a + b;
// console.log(add(2,3,4));
// const value = ' "" ';
// console.log(Boolean(value));
// let names = ['baby', 'is', 'cute'];
// let res = names.forEach((name) => {
//     return name;
// });
// console.log(res);
// let a = [0];
// a = a ? "Yes" : "No";
// console.log(a);
// let a = 1;
// function test() {
//     console.log(a);
//     let a = 2;
// }
// test();
// let str1 = 'engineer';
// let str2 = str1;
// str2 = 'ofcode';
// console.log(str1);
// let a = 45;
// let b = a++;
// console.log(b);
// const arr = [0,1,2];
// arr[arr.length] = arr.length;
// console.log(arr);
// let obj = {
//     hi: 'hello',
//     me: 'you',
// };
// console.log(obj.length);
// let a = 10;
// let b = a++;
// console.log(a, b);
// const monthNames = {
//     1: 'January',
//     2: 'February',
//     3: 'March',
//     4: 'April',
//     5: 'May',
//     6: 'June',
//     7: 'July',
//     8: 'August',
//     9: 'September',
//     10: 'October',
//     11: 'November',
//     12: 'December',
// };
// function getMonthName(monthNumber) {
//     return monthNames[monthNumber] || 'unknown'
// }
// console.log(getMonthName(1));
// let a = 5;
// let b = a++;
// let c = a + 1;
// console.log(a, b, c);
// const arr = [0,1,2,3];
// let pop = arr.pop();
// console.log(arr, pop);
// let x = 10.5;
// let y = parseInt(x);
// console.log(y);
// let str = 'Hello Baby';
// let index = str.indexOf('Baby');
// console.log(index);
// let x = 10;
// function increase() {
//     x += 3;
//     console.log(x);
// }
//  increase();
// let arr = ['karachi','lahore','islamabad'];
// arr[0] = arr[2], arr[2] = arr[0][0];
// console.log(arr);
// let arr = ['cat','dog','fish'];
// arr[0] = arr[1], arr[1] = arr[0][0];
// console.log(arr);
// let num = 8;
// let result = num > 5 ? 'Yes' : 'No';
// console.log(result);
// const arr = [1,2,3];
// arr[10] = 10;
// console.log(arr.length);
// console.log(arr[9]);
// let a = typeof 1;
// let b = typeof a;
// console.log(b);
// let num = 1;
// num++;
// ++num;
// console.log(num++);
// console.log(++num);
// const day = 'Saturday';
// if('Sunday') {
//     console.log('Call Baby');
// } else {
//     console.log('Do Work');
// }
// const arr = ['a','b', 'c'];
// arr.length = 1;
// console.log(arr);
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b);
// function foo(a, b, c) {
//     arguments[0] = 10;
//     console.log(a, arguments[0]);
// }
// foo(1, 2, 3)
// const arr = [1,2,3];
// const res = arr.reverse();
// console.log(arr[0]);
// let arr = [1,2,3];
// arr.push(4);
// arr.unshift(0);
// console.log(arr.length);
// let x = '8';
// let y = 1;
// console.log((+x)+y+1);
// const arr = [1,2,3];
// arr[1] = 4;
// arr[2] = arr[1];
// console.log(arr);
// const arr = [1,2,3,4];
// arr.length = 2;
// console.log(arr);
// let x = 6;
// let y = typeof (x == 6);
// console.log(y);
// const array = [1,1,2,3,6,6,3,1];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray);
// let x = [2];
// let y = 2;
// console.log(x == y);
// let newArr = [1,2,3].push(4);
// console.log(newArr);
// const num = [1,2,3];
// num.length = 0;
// console.log(num);
// let a = [null];
// let b = 5;
// console.log(a ? a : b);
// let fruits = ['apple','banana','cherry'];
// let [fruit, ...rest] = fruits;
// console.log(rest.length);
// let a = 10;
// let b = a;
// a = 20;
// console.log(a);
// console.log(b);
// const arr = ['baby','baby'];
// console.log(arr[2]);
// let a = { name: 'Alice'};
// let b = a;
// a = { name: 'Bob'};
// console.log(b.name);
// let name = 'Baby';
// function getName() {
//     console.log(name);
//     let name = 'Cyko'
// }
// getName();
// count = 1;
// var count = 0;
// function counter() {
//     return count++;
// }
// console.log(counter());
const obj = {
    name: 'Alice',
    name:   'John'
};
console.log(obj.name);
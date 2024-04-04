

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


// var userName = prompt("Enter a username");


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

var num = -4;

document.write("The absolute value of " + num + " is " + Math.abs(num));
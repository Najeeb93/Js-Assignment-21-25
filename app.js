

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


// for(let i = 1; i <= 3; i++){
//     // console.log("outer loop ==>",i)
//     for(let j = 1; j <= 2; j++){
//         console.log(i * j)


//     }
// }

// for(var i = 1; i <=5; i++){
//     for(var j=1; j <=i; j++){
//         document.write(j)
//     }
//     document.write("<br>")
// }

// for(var i = 5; i>=1; i--){
//     for(var j = 5;  j>=i; j--) {
//           document.write(j)
//     }
//     document.write("<br>")
    
// }

// for(var i = 1; i <= 5 ; i++){
//     for(var j = 1; j<=5; j++) {
//         document.write(j)
//     }
//     document.write( "<br>" )
// }

// for(var i = 5; i>=1; i--){
//     for(var j = 5;  j>=i; j--) {
//           document.write("*")
//     }
//     document.write("<br>")
    
// }

/* Write a program to check whether the word is palidrome or not.
palidrome words --> civic,madam,,121.
*/
 
/*write a program to calculate factorial by using prompt i.e (5) 5*4*3*2*1

var userInput = prompt("Enter the palindrome word");

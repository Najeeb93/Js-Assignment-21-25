

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

var arr = ["cake","apple pie","cookie","chips","patties"];

var userInput = prompt("Welcome to BLUE BAKRY.What do you want to order Sir/Ma'am?").toLowerCase();

var check = false;
for(i = 0; i < arr.length; i++){
    if(userInput == arr[i]){
        check = true;
        var index = "";
        document.write(`${arr[i]} is available at index ${arr.indexOf(userInput)} in our bakery`);
}

}
if(check === false) {
    document.write(`We are sorry.${userInput} is not available in our bakery`)
}



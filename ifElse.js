// Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.
// var num1 = prompt("Enter a value ");
// var num2 = 3;
// +num1;
// var val = num1%num2;

// if(val == 0){
//     document.write(num1 +" is divisible by 3");
// }else{
//     document.write(num1 + " is not divisible by 3");
// }

// Write a program that checks whether the given input is an even
// number or an odd number.
// var num1 = prompt("enter a value");

// var odd = num1%2;
// if(num1%2 ==0){
//     document.write("the given number is even")
// }else{
//     document.write("the given number is odd");
// }

// Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".
// var age = prompt("enter your age ");
// if (age > 18){
//     document.write("Old Enough");
// }else{
//     document.write("too young")
// }

// Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.

// var name_ = prompt("write your name");
// var my_name = "umer";
// if(name_ == my_name){
//     document.write("Welcome to JS")
// }

// var val1 = 10;
// var value_type =typeof(val1);
// document.write(value_type);
// if(value_type == "number"){
//     document.write("the given input is number")
// }else{
//     document.write("the given input is string")
// }
// Write a program that takes time as input from user in 24 hours
// clock format like: 1900

// var time = 1900;
// if(time >= 0 && time < 1200){
//     document.write("Good Morning");
// }else if(time >= 1200 && time <1700){
//     document.write("Good Afternoon");
// }else if(time >=1700 && time < 2100 ){
//     document.write("Good Evening")

// }else{
//     document.write("Good Night");
// }

var pass_word = "coder";
var user_password = prompt("enter your password");
if(user_password == ""){
    document.write("Plwase enter a password");
}else if(user_password ==  pass_word){
    document.write("Correct! your password matched with original password")
}
    else{
        document.write(user_password);
    }

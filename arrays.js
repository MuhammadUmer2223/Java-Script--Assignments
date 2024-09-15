var div = document.querySelector("div");
// var std_ = [];
// var arr = new Array();
// var str_arr = ["abc", "xyz", "123"];
// var num_arr = [1, 23, 100];
// var bool_arr = [true, false];
// var mix_arr = ["name", 123, true, false];
// var mobile = ["Jazz", "Telenore", "Zong", "U-fone"];

// Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser

// var edu_qftn =  ["BSCS","B-COM", "BBA", "B.E", "MS", "MSC", "PHD"];
// div.innerHTML = edu_qftn[0] + "<br />"+ edu_qftn[1]+ "<br />" + edu_qftn[2]+ "<br />" + edu_qftn[3] + "<br />"+ edu_qftn[4]+ "<br />"+ edu_qftn[5]+ "<br />"+ edu_qftn[6];

// Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)
// var movies = [];
// movies[0]= "Avengers: age Of Ultron"
// movies[1]= "Jurassic World"
// movies[2]= "Spectre"
// movies[3]= "Insidde Out";
// var head = document.querySelector("#head");
// div.innerHTML = movies;

// for(var i = 0; i <= movies.length; i++){
//     div.innerHTML += movies[i] + "<br />";
// }
// // head.innerHTML= "the length of the array is " + movies.length;

//                 // Declare and Initialize an array with your favorite cars
// var cars = ["Kia", "Honda", "Haval","Sportage"];
// var zero = document.querySelector("#zero");
// var first = document.querySelector("#first");
// var second = document.querySelector("#second");
// var third = document.querySelector("#third");

// zero.innerHTML = "First index of the array " + cars.indexOf("Kia");
// first.innerHTML = "car at First index of the array " + cars[0];
// second.innerHTML = "last index of the array " + cars.indexOf("Sportage");
// third.innerHTML = "car at last index of the array " + cars[3];

        // Write a program to store 3 student names in an array

// var std_names = ["umer", "ammar", "ali"];

// var std_scores = [488, 498, 491];
// var umer = document.querySelector("#umer");
// var ammar = document.querySelector("#ammar");
// var ali = document.querySelector("#ali");

// var total = 500;
// var per1 = std_scores[0]/500 *100;
// var per2 = std_scores[1]/500 *100;
// var per3 = std_scores[2]/500 *100;
// umer.innerHTML = "Score of " + std_names[0] +" is "+per1 + "%";
// ammar.innerHTML = "Score of " + std_names[1]+" is "+per2 +"%"; 
// ali.innerHTML = "Score of " + std_names[2]+" "+per3 + "%";

//     Initialize an array with color names. Display the array
// elements in your browser.

var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var color4 = document.querySelector("#color4")
var color5 = document.querySelector("#color5");
var color6 = document.querySelector("#color6");
var colors = ["red", "green", "blue","white"];

// color1.innerHTML = colors;
// var user_color = "purple";
// colors.unshift(user_color);
// color2.innerHTML = colors;
// var user_color = "orange";
// colors.push(user_color);
// color3.innerHTML = colors;
// colors.splice(0,0,"brown", "yellow");
// color4.innerHTML = colors;
// colors.shift();
// color5.innerHTML = colors;
// colors.pop();
// color6.innerHTML = colors;

        // Ask the user at which index he/she wants to add a color &
        // color name. Then add the color to desired position/index.
        // . Display the updated array in your browser.

var user1 = document.querySelector("#user1");
// var user_choice = prompt("which position do you want to add a color");
// var user_color = prompt("color name");
// colors.splice(user_choice, 0 ,user_color)
// user1.innerHTML = colors;

        // Ask the user at which index he/she wants to delete
        // color(s) & how many colors he/she wants to delete. Then
        // remove the same number of color(s) from user-defined
        // positon/index. . Display the updated array in your
        // browser.
// var before = document.querySelector("#before");
// before.innerHTML = colors;
// var user_choice = prompt("at which index do you want to add a color");
// var user_choiceD = prompt("how many color do you want to delete");
// before.innerHTML = colors;
// colors.splice(user_choice, user_choiceD,);
// user1.innerHTML = colors;

// Write a program to store student scores in an array rray & sort
// the array in ascending order using Array’s sort method.

// var std_scores = [455, 359, 482, 320,290];
// var before = document.querySelector("#before");
// var after = document.querySelector("#after");
// before.innerHTML = "Scores of students : " +std_scores;
// std_scores.sort();
// after.innerHTML = "Sorted scores of Students : " + std_scores;

        // 14. Write a program to sort the below mentioned array:
        // var fruits = [“strawberry”, “apple”, “orange”, “

// var fruits = ["strawberry", "apple", "orange", "banana"];
// var before = document.querySelector("#before");
// var after = document.querySelector("#after");
// before.innerHTML = "Fruits List : <br />" + fruits;
// fruits.sort();
// after.innerHTML = "Ordered Fruits List : <br />" + fruits;

// Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array.

// var cities = ["karachi", "Lahore", "Islamabad", "Faislabad", "Kalam"];
// var before = document.querySelector("#before");
// var after = document.querySelector("#after");
// before.innerHTML = "Cities List : " + cities;
// var selectd_cities = cities.slice(0, 3);
// after.innerHTML = "Selected Cities List : " + selectd_cities;

// var before = document.querySelector("#before");
// var after = document.querySelector("#after");
// var arr = [" My " , " Name ", " Is ", " Muhammad ", " Umer "];
// before.innerHTML ="Array <br>" + arr;
// var newarr = arr.join(" ");
// after.innerHTML= "String <br>" + newarr;

var devices = ["Keyboard","Mouse","Monitor", "Printer"];

var before = document.querySelector("#before");
var after = document.querySelector("#after");
before.innerHTML = devices;
devices.shift();
after.innerHTML = devices;
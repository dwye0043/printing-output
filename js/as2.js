// Task 1 -------------------------------------------------------------------------------------
// alert( "description of alerted_value: " + alerted_value );
/*
   a + b
   a - b
   a * b
   a / b
   a % b
   a += b
   a -= b
   a *= b
   a /= b
   a %= b
   a == b
   a != b
   a > b
   a < b
   !a && !c 
   !a || !c 
*/

var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n------------\n" +
      "a + b = " + (a + b) + "\n" +
      "a - b = " + (a - b) + "\n" +
      "a * b = " + (a * b) + "\n" +
      "a / b = " + (a / b) + "\n" +
      "a % b = " + (a % b) + "\n" +
      "(a += b): " + (a += b) + "\n" +
      "(a -= b): " + (a -= b) + "\n" +
      "(a *= b): " + (a *= b) + "\n" +
      "(a /= b): " + (a /= b) + "\n" +
      "(a %= b): " + (a %= b) + "\n" +
      "(a == b): " + (a == b) + "\n" +
      "(a != b): " + (a != b) + "\n" +
      "(a > b): " + (a > b) + "\n" +
      "(a < b): " + (a < b) + "\n" +
      "(!a && !c): " + (!a && !c) + "\n" +
      "(!a || !c): " + (!a || !c) 
);


// Task 2 -------------------------------------------------------------------------------------
//Declare the variable first_name and assign it with the value of your first name;
//Declare the variable last_name and assign it with the value of your last name;
//Declare the variable email and assign it with the value of your email;

var first_name = "Vivian";
var last_name = "Dwyer";
var email = "dwye0043@algonquinlive.com";
var output;

/* 
 Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com."
*/
output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email;
alert(output);


// Task 3 ------------------------------------------------------------------------------------

// Define Variables
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

/* 
 Add up the first and last element of the array.
 Declare variable sum and assign it with value gotten by addition of the two array elements.
*/
 var sum = numbers[0] + numbers[4];

/*
 Check if sum is an even or an odd number.
 If sum is an even number print the output confirming that.
*/
if (sum % 2 == 1) {
   alert(numbers[0] + " + " + numbers[4] + " = " + sum + "\n" + 
              "This is an odd number."); 
} else if (sum % 2 == 0) {
   alert(numbers[0] + " + " + numbers[4] + " = " + sum + "\n" + 
              "This is an even number."); 
}

const studentId = 123; // if the value won't change
let studentName = "xyz"; // if the value change
var studentEmail = "xyz@gmail.com"; // issue in block scope and functional scope
let studentPassword = "8798";
studentCity = "Agra";
let studentState; // undefined

// studentId = 145;  
studentName = "zyx";
studentEmail = "zyx@gmail.com";
studentPassword = "989879";
studentCity = "Delhi";

console.table([studentId, studentName, studentEmail, studentPassword, studentCity, studentState]);
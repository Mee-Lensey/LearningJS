console.log("Learning JavaScript is fun!");
console.log(" dhdid");

// Answering question 1 for JS

let x= Math.floor(Math.random()*1000);

if(x%7==0 && x%9==0){
    console.log("yes");
} else {
    console.log("noooo");
// Answering question 2 for JS
}


let b =Math.floor(Math.random()*100);

let temperature= (b<60 ) ? "too cold" : (b<=90)? "perfect": "too hot";
console.log(b + " is " + temperature);
// (condition) ? value if true : value if false
// (temperature<90) ? "too hot" : "too cold"

// Answering question 3 for JS
function arith(d, y, oper){
    if (oper == "/"){
        res = d/y;
        console.log(d + "/" + y + " is equal to " + res);
        return res;
    } else if (oper == "*") {
        res = d*y;
        console.log(d + "x" + y + " is equal to " + res);
        return res;
    } else if (oper == "+") {
        res = d+y;
        console.log(d + " + " + y + " is equal to " + res);
        return res;
    }else if (oper == "-") {
        res = d-y;
        console.log(d + " - " + y + " is equal to " + res);
        return res;
    }

}

// Answering question 4 for JS
let d = Math.floor(Math.random() * 101); // goes through 0-100
let y = Math.floor(Math.random() * 101); // also goes through 0-100
var operations = ['+', '-', '*', '/'] //this stores the four operations in an array
const oper = operations[Math.floor(Math.random() * operations.length)];   //picks a random operation from the array
const arithFunc = (a, b, c) => arith(a, b, c); // arrow function which calls the arith function
arithFunc(d, y, oper); // calling the arrow function with the two random numbers and the random operation


// Answering question 5 for Javascript


var shoes = [];

shoes[0]="blah"
shoes [1]= "nike";
shoes[2] = "addidas";
shoes[3]= "underarmor";
shoes[4]= "footlocker";
shoes[5]="journeys";
shoes[6]="jordans";
shoes[7]="maisonmargel";
shoes[8]="loafers";
shoes[9]="boatshoes";
shoes[10]="boots";
shoes[11]="flipflops";
shoes[12]= "birkenstocks"
shoes[13]="slides";
shoes[14]="new balance";
shoes[15]="vans";

console.log(shoes.length);
console.log(shoes[0]); // first thing in the array print
console.log(shoes[15]); // last thing in the array print

let length = shoes.push("brown")
//console.log (Math.floor(Math.random() * array.length)); //comeback to this one


















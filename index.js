const readline = require('readline-sync');
console.log("Please enter the highest value you wish to count to");
var response = readline.prompt();
response = parseInt(response);
var rules ={};
var done = false;
while (!done) {
    console.log("Please enter the rules you wish to apply, one by one, pressing enter after each one.");
    console.log("When you are done just press enter on a blank line.");
    console.log("Possible rules: 3, 5, 7, 11, 13, 17");
    console.log("Current rules:");
    for (var item in rules) {
        if (rules[item] = true) {
            console.log(item);
        }
    }

    var rule = readline.prompt();
    if (rule === "") {done = true;}
    if (rule === "3") {rules.Fizz = true;}
    if (rule === "13") {rules.Fezz = true;}
    if (rule === "5") {rules.Buzz = true;}
    if (rule === "7") {rules.Bang = true;}
    if (rule === "11") {rules.Bong = true;}
    if (rule === "17") {rules.Reverse = true;}
}

for (var i = 1; i <= response; i++) {
    var arr = [];
    if (i % 3 === 0 && rules.Fizz){
        arr.push("Fizz");
    }
    if (i % 13 === 0 && rules.Fezz){
        arr.push("Fezz");
    }
    if (i % 5 === 0 && rules.Buzz){
        arr.push("Buzz");
    }
    if (i % 7 === 0 && rules.Bang){
        arr.push("Bang");
    }
    if (i % 11 === 0 && rules.Bong){
        if (i % 13 === 0){
            arr = ["Fezz"];
        }
        else{
            arr.length = 0;
        }
        arr.push("Bong");
    }
    if (i % 17 === 0 && rules.Reverse){
    arr = arr.reverse();
    }
    if (arr.length === 0){
        arr.push(i);
    }
    var string = "";
    for(var j=0;j<arr.length;j++)
    {
       string = string.concat(arr[j]);
    }
console.log(string);
}

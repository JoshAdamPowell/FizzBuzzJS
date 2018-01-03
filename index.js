const readline = require('readline-sync');
console.log("Please enter the highest value you wish to count to");
var response = readline.prompt();
response = parseInt(response);
var done = false;
while (!done){
    console.log("Please enter the rules you wish to apply, one by one, pressing enter after each one.");
    console.log("When you are done just press enter on a blank line.");
    console.log("Possible rules: 3, 5, 7, 11, 13, 17");
    var rule = readline.prompt();
    if (rule == ""){
        done = true;
    }
    if (rule == "T" || rule == "t"){
     var test = true;
    }
    if (rule == "3")
    {
        var Fizz = true;
    }
    if (rule == "13")
    {
        var Fezz = true;
    }
    if (rule == "5")
    {
        var Buzz = true;
    }
    if (rule == "7")
    {
        var Bang = true;
    }
    if (rule == "11")
    {
        var Bong = true;
    }
    if (rule == "1")
    {
        var Reverse = true;
    }


for (var i = 1; i <= response; i++) {
    var arr = [];
    if (i % 3 === 0 && Fizz){
        arr.push("Fizz");
    }
    if (i % 13 === 0 && Fezz){
        arr.push("Fezz");
    }
    if (i % 5 === 0 && Buzz){
        arr.push("Buzz");
    }
    if (i % 7 === 0 && Bang){
        arr.push("Bang");
    }
    if (i % 11 === 0 && Bong){
        if (i % 13 === 0){
            arr = ["Fezz"];
        }
        else{
            arr.length = 0;
        }
        arr.push("Bong");
    }
    if (i % 17 == 0 && Reverse){
    arr = arr.reverse();
    }
    if (arr.length === 0){
        arr.push(i);
    }
    string = "";
    for(var j=0;j<arr.length;j++)
    {
       string = string.concat(arr[j]);
    }
console.log(string);
}

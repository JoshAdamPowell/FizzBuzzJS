const readline = require('readline-sync');
console.log("Please enter the highest value you wish to count to");
var response = readline.prompt();
response = parseInt(response);
var rules ={};
var done = false;

    var ruleset = [[3, "Fizz"],[13, "Fezz"], [5, "Buzz"],[7, "Bang"], [11, "Bong"]]
    /*
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
*/
for (var i = 1; i <= response; i++) {
    var arr = [];
    var words = ruleset.filter(([key, _]) => i % key === 0).map(([_,value]) => value);
    if (i % 11 === 0 ){
        words = words.filter(value => value == "Bong" || value == "Fezz");
    }
    if (i % 17 === 0){
    words = words.reverse();
    }
    if (words.length === 0){
        words.push(i);
    }
    var string = words.join("");
console.log(string);
}

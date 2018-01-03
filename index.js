for(var i = 0; i <= 100; i++){
    var string = "";
    if (i % 3 === 0){
        string = string.concat("Fizz");
    }
    if (i % 5 === 0){
        string = string.concat("Buzz");
    }
    if (string == ""){
        string = i;
    }
    console.log(string);
}
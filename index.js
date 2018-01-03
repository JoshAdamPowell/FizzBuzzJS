for (var i = 1; i <= 256; i++) {
    var arr = [];
    if (i % 3 === 0){
        arr.push("Fizz");
    }
    if (i % 13 === 0){
        arr.push("Fezz");
    }
    if (i % 5 === 0){
        arr.push("Buzz");
    }
    if (i % 7 === 0){
        arr.push("Bang");
    }
    if (i % 11 === 0){
        if (i % 13 === 0){
            arr = ["Fezz"];
        }
        else{
            arr.length = 0;
        }
        arr.push("Bong");
    }
if (i % 17 == 0)
{
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

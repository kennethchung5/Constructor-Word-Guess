var Letter = require("./Letter");



var test = new Letter("a");
var test2 = new Letter("b");

console.log(test);
console.log(test2.character);

var testArray = [test, test2]

console.log(testArray.join(" "))
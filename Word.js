var Letter = require("./Letter");


//
var test = new Letter("a");
var test2 = new Letter("b");

// console.log(test);
// console.log(test2.character);

// var testArray = [test, test2]

// console.log(testArray.join(" "))
//


function Word(newWord) {
    this.wordArray = [];
    this.first = function() {        
            for (var i=0; i<newWord.length; i++) {
                this.wordArray.push(new Letter(newWord.charAt(i)));
            };
        }
    this.displayWord = function() {
        this.wordArray.join(" ");
    };
    this.
}

module.exports = Word;

// module.exports = {
//     Word: Word,
//     Letter: Letter
// };
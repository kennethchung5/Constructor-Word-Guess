function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.toString = function() {
            if (this.guessed) {
                return this.character;
            } else {
                return "_";
            };
        };
    this.check = function(currentLetter) {
            if (currentLetter.toUpperCase() === this.character) {
                this.guessed = true;
            };
        };   
};

module.exports = Letter;
class Game {
    constructor(validWords) {
        this.attempts = [];
    }
    
    hasWon() {
        return false;
    }

    hasLost() {
        return this.attempts.length > 5;
    }

    wordsAttempted() {
        return this.attempts ;
    }

    addAttempt(word) {
        this.attempts.push(word);   
    }
}

module.exports = Game
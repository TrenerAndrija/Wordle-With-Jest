class Word {
    constructor(word) {
      if (word.length < 5)
        throw new Error('Too few letters. Should be 5');
      if (word.length > 5)
        throw new Error('Too many letters. Should be 5');
      if (!word.match(/^[a-z]+$/))
        throw new Error('Word has invalid letters');

      this.word = word;
    }
    letters() {
        return this.word.split('');
    }  

    someAs(word) {
      return word.word() == this.word();
    }
  }
module.exports = Word

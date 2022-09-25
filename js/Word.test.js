const Word = require('./Word')

test("test01ValidWordLettersAreValid", async function() {
    const word = new Word('valid');
    expect(['v', 'a', 'l', 'i', 'd']).toStrictEqual(word.letters());
});

test("test02FewWordLettersShouldRaiseException", async function() {
    expect(() => { 
      new Word('vali');                 
    }).toThrow(Error);
});

test("test03TooManyWordLettersShouldRaiseException", async function () {
    expect(() => {
        new Word('toolong');
    }).toThrow(Error);
})

test('test04EmptyLettersShouldRaiseException', async function() {
    expect(() => {
        new Word('');
    }).toThrow(Error);
})

test('test05InvalidLettersShouldRaiseException', async function () {
    expect(() => {
        new Word('vali*');
    }).toThrow(Error);
})

test('test06PointShouldRaiseException', () => {
    expect(() => {
        new Word('val.d');
    }).toThrow(Error);
})

test("test07TwoWordsAreNotTheSame", async function() {
    const firstWord = new Word('valid');
    const secondWord = new Word('happy');
    expect(firstWord).not.toStrictEqual(secondWord);
});

test("test08TwoWordsAreTheSame", async function() {
    const firstWord = new Word('valid');
    const secondWord = new Word('valid');
    expect(firstWord).toStrictEqual(secondWord);
});

test('test09LettersForGrassWord', () => {
    const grassWord = new Word('grass');
    expect(['g', 'r', 'a', 's', 's']).toStrictEqual(grassWord.letters());
})

test('test10ComparisonIsCaseInsensitve', () => {
    expect(() => {
        new Word('vAlid');
    }).toThrow(Error);
})




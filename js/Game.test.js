const Game = require('./Game');
const Word = require('./Word');

test('test11EmptyGameHasNoWinner', () => {
    const game = new Game();
    expect(false).toStrictEqual(game.hasWon());
})

test("test12EmptyGameWordsAttempted", async function() {
    const game = new Game()
    expect([]).toStrictEqual(game.wordsAttempted());
});

test("test13TryOneWordAndRecordIt", async function() {
    var game = new Game();
    game.addAttempt(new Word('loser'));
    expect([new Word('loser')]).toStrictEqual(game.wordsAttempted());   
});

